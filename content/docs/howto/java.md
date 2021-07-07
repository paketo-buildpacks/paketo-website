---
title: "Java Buildpack"
weight: 316
menu:
  main:
    parent: "howto"
aliases:
  - /docs/buildpacks/language-family-buildpacks/java/
---

The [Paketo Java Buildpack][java] allows users to create an image containing a JVM application from a precompiled artifact or directly from source.

The Java Buildpack is a [composite buildpack][composite buildpack] and each step in a build is handled by one of it's [components](#components). The following docs describe common build configurations. For a full set of configuration options and capabilities see the homepages for the component buildpacks.

## About the Examples

All Java Buildpack examples will use the Paketo [sample applications][samples].

Examples assume that the root of this repository is the working directory:
{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples
{{< /code/copyable >}}

The [pack CLI][pack] is used throughout the examples. `pack` is just one of several Cloud Native Buildpack [platforms][platforms] than can execute builds with the Java Buildpacks. For example, Spring Boot developers may want to explore the [Spring Boot Maven Plugin][spring boot maven plugin] or [Spring Boot Gradle Plugin][spring boot gradle plugin] .

Examples assume that the [Paketo Base builder][base builder] is the default builder:
{{< code/copyable >}}
pack config default-builder paketobuildpacks/builder:base
{{< /code/copyable >}}

All java example images should return `{"status":"UP"}` from the [actuator health endpoint][spring boot actuator endpoints].
{{< code/copyable >}}
docker run --rm --tty --publish 8080:8080 samples/java
curl -s http://localhost:8080/actuator/health | jq .
{{< /code/copyable >}}

## Building from Source

The Java Buildpack can build from source using any of the following build tools:

* [Gradle][gradle] - Support provided by the [Gradle Buildpack][bp/gradle]
* [Leiningen][leiningen] - Support provided by the [Leiningen Buildpack][bp/leiningen]
* [Maven][maven] - Support provided by the [Maven Buildpack][bp/maven]
* [SBT][sbt] - Support provided by the [SBT Buildpack][bp/sbt])

The correct build tool to use will be detected based on the contents of the application directory.

The build should produce one the of [supported artifact formats](#building-from-a-compiled-artifact). After building, the buildpack will replace provided application source code with the exploded archive. The build will proceed as described in [Building from a Compiled Artifact](#building-from-a-compiled-artifact).

**Example**: Building with Maven

The following command creates an image from source with `maven`.

{{< code/copyable >}}
pack build samples/java \
  --path java/maven
{{< /code/copyable >}}

### Configuring the Build Tool

**Note**: The following set of configuration options are not comprehensive, see the homepage for the relevant component buildpacks for a full-set of configuration options.

#### Selecting a Module or Artifact

For a given build `<TOOL>`, where `<TOOL>` is one of `MAVEN`, `GRADLE`, `LEIN` or `SBT`, the selected artifact can be configured with one of the following environment variable at build-time:

* `BP_<TOOL>_BUILT_MODULE`
  * *Defaults* to the root module.
  * Configures the module in a multi-module build from which the buildpack will select the application artifact.
  * *Example*: Given `BP_MAVEN_BUILT_MODULE=api`, Paketo Maven Buildpack will look for the application artifact with the file pattern `target/api/*.[jw]ar`.
* `BP_<TOOL>_BUILT_ARTIFACT`
  * Defaults to a tool-specific pattern (e.g. `target/*.[jw]ar` for Maven, `build/libs/*.[jw]ar` for gradle). See component buildpack homepage for details.
  * Configures the built application artifact path, using [Bash Pattern Matching][bash pattern matching].
  * Supercedes `BP_<TOOL>_BUILT_MODULE` if set to a non-default value.
  * *Example*: Given `BP_MAVEN_BUILT_ARTIFACT=out/api-*.jar`, the Paketo Maven Buildpack will select a file with name `out/api-1.0.0.jar`.

#### Specifying the Build Command

For a given build `<TOOL>`, where `<TOOL>` is one of `MAVEN`, `GRADLE`, `LEIN` or `SBT`, the build command can be configured with the following environment variable at build-time:

* `BP_<TOOL>_BUILD_ARGUMENTS`
  * *Defaults* to a tool-specific value (e.g. `-Dmaven.test.skip=true package` for Maven, `--no-daemon assemble` for Gradle). See component buildpack homepage for details.
  * Configures the arguments to pass to the build tool.
  * *Example*: Given `BP_GRADLE_BUILD_ARGUMENTS=war`, the Paketo Gradle Buildpack will execute `./gradlew war` or `gradle war` (depending on the presence of the gradle wrapper).

#### Connecting to a Private Maven Repository

A [binding][bindings] with type `maven` and key `settings.xml` can be used to provide custom [Maven settings][maven settings].

```plain
<binding-name>
├── settings.xml
└── type
```

The value of `settings.xml` file may contain the credentials needed to connect to a private Maven repository.

**Example**: Providing Maven Settings

The following steps demonstrate how to use a `settings.xml` file from your workstation with `pack`.

1. Create a directory to contain the binding.
{{< code/copyable >}}
mkdir java/maven/binding
{{< /code/copyable >}}

2. Indicate that the binding is of type `maven` with a file called `type` inside the binding, containing the value `maven`.
{{< code/copyable >}}
echo -n "maven" > java/maven/binding/type
{{< /code/copyable >}}

3. Copy the `settings.xml` file from the workstation to the binding.
{{< code/copyable >}}
cp ~/.m2/settings.xml java/maven/binding/settings.xml
{{< /code/copyable >}}

4. Provide the binding to `pack build`.
{{< code/copyable >}}
pack build samples/java \
   --path java/maven \
   --volume $(pwd)/java/maven/binding:/platform/bindings/my-maven-settings
{{< /code/copyable >}}

## Building from a Compiled Artifact

An application developer may build an image from following archive formats:

* [Executable JAR][executable jar] - Support provided by the [Executable Jar Buildpack][bp/executable-jar]
* [WAR][war] - Support provided by the [Apache Tomcat Buildpack][bp/apache-tomcat]
* [Distribution ZIP][dist-zip] - Support provided by the [DistZip Buildpack][bp/dist-zip]

The Java Buildpack expects the application directory to contain the extracted contents of the archive (e.g. an exploded JAR). Most platforms will automatically extract any provided archives.

If a WAR is detect the Java Buildpack will install [Apache Tomcat][apache tomcat]. For exact set of supported Tomcat versions can be found in the Java Buildpack [releases notes][bp/java/releases]. For tomcat configuration options see the [Apache Tomcat Buildpack][bp/apache-tomcat].

The component buildpack for the provided artifact format will contribute a start command to the image.

*Note*: All three of the [Apache Tomcat Buildpack][bp/apache-tomcat], [Executable Jar Buildpack][bp/executable-jar], and [DistZip Buildpack][bp/dist-zip] may opt-in during detection. However, only one of these buildpacks will actually contribute to the final image. This happens because the artifact type may be unknown during detection, if for example a previous buildpack [compiles the artifact](#building-from-source).

**Example**: Building from an Executable JAR

The following command uses Maven to compile an executable JAR and then uses `pack` to build an image from the JAR.

{{< code/copyable >}}
cd java/maven
./mvnw package
pack build samples/java \
   --path /target/demo-0.0.1-SNAPSHOT.jar
{{< /code/copyable >}}

The resulting application image will be identical to that built in the Building with Maven example.

## About the JVM

The Java Buildpack uses the [BellSoft Liberica][liberica] implementations of the JRE and JDK. JVM installation is handled by the [BellSoft Liberica Buildpack][bp/bellsoft-liberica]. The JDK will be installed in the build container but only the JRE will be contributed to the application image.

See the [homepage][bp/bellsoft-liberica] for the Bellsoft Liberica Buildpack for a full set of configuration options.

### The JVM Version

The Bellsoft Liberica Buildpack provides support for the latest patch release of all version lines supported at the time of buildpack release. The exact set of JDK/JRE versions support by a given buildpack version can be found in the Java Buildpack [release notes][bp/java/releases].

#### Inspecting the JVM Version

The exact JRE version that was contributed to a given image can be read from the Bill-of-Materials.

**Example** Inspecting the JRE Version

Given an image named `samples/java` built from one of examples above, the following command should print the exact version of the installed JRE.
{{< code/copyable >}}
pack inspect-image samples/app --bom | jq '.local[] | select(.name=="jre") | .metadata.version'
{{< /code/copyable >}}

#### Configuring the JVM Version

The following environment variable configures the JVM version at build-time.

* `BP_JVM_VERSION`
  * Defaults to the latest LTS version at the time of release.
  * Configures a specific JDK or JRE version.
  * *Example*: Given `BP_JVM_VERSION=8` or `BP_JVM_VERSION=8.*` the buildpack will install the latest patch releases of the Java 8 JDK and JRE.

### Runtime JVM Configuration

The Java Buildpack configures the JVM by setting `JAVA_TOOL_OPTIONS` in the JVM environment.

#### Memory Calculator

The Java Buildpack installs a component called the Memory Calculator which will configure JVM memory based on the resources available to the container at runtime. The calculated flags will be appended to `JAVA_TOOL_OPTIONS`.

#### Configuring JVM at Runtime

The runtime JVM can be configured in two ways:

1. Buildpack-provided runtime components including the Memory Calculator accept semantically named environment variables which are then used to derive `JAVA_TOOL_OPTIONS` flags. Examples include:
    * `BPL_JVM_HEAD_ROOM`
    * `BPL_JVM_LOADED_CLASS_COUNT`
    * `BPL_JVM_THREAD_COUNT`
2. Flags can be set directly at runtime with the `JAVA_TOOL_OPTIONS` environment variable. User-provided flags will be appended to buildpack-provided flags. If the user and a buildpack set the same flag, user-provided flags take precedence.

See the [homepage][bp/bellsoft-liberica] for the Bellsoft Liberica Buildpack for a full set of configuration options.

### Using Alternative JVMs

By default, the [Paketo Java buildpack][bp/java] will use the Liberica JVM. The following Paketo JVM buildpacks may be used to substitute alternate JVM implemenations in place of Liberica's JVM.

| JVM                                                         | Buildpack                                                            |
| ----------------------------------------------------------- | -------------------------------------------------------------------- |
| [Alibaba Dragonwell](http://dragonwell-jdk.io/)             | [Paketo Alibaba Dragonwell Buildpack][bp/dragonwell]                 |
| [Amazon Corretto](https://aws.amazon.com/corretto/)         | [Paketo Amazon Corretto Buildpack][bp/amazon-corretto]               |
| [Azul Zulu](https://www.azul.com/downloads/zulu-community/) | [Paketo Azul Zulu Buildpack][bp/azul-zulu]                           |
| [BellSoft Liberica](https://bell-sw.com/pages/libericajdk/) | [Paketo BellSoft Liberica Buildpack - Default][bp/bellsoft-liberica] |
| [Eclipse OpenJ9](https://www.eclipse.org/openj9/)           | [Paketo Eclipse OpenJ9 Buildpack][bp/eclipse-openj9]                 |
| [GraalVM](https://www.graalvm.org/)                         | [Paketo GraalVM Buildpack][bp/graalvm]                               |
| [Microsoft OpenJDK](https://www.microsoft.com/openjdk)      | [Paketo Microsoft OpenJDK Buildpack][bp/microsoft]                   |
| [SapMachine](https://sap.github.io/SapMachine/)             | [Paketo SapMachine Buildpack][bp/sap-machine]                        |

To use an alternative JVM, you will need to set two `--buildpack` arguments to `pack build`, one for the alternative JVM buildpack you'd like to use and one for the Paketo Java buildpack (in that order). This works because while you end up with two JVM buildpacks, the first one, the one you're specifying will claim the build plan entries so the second one will end up being a noop and doing nothing.

This example will switch in the Azul Zulu buildpack:

{{< code/copyable >}}
pack build samples/jar --buildpack gcr.io/paketo-buidpacks/azul-zulu --buildpack paketo-buildpacks/java`
{{< /code/copyable >}}

There is one drawback to this approach. When using the method above to specify an alternative JVM vendor buildpack, this alternate buildpack ends up running before the CA certs buildpack and therefore traffic from the alternate JVM vendor buildpack won’t trust any additional CA certs. This is not expected to impact many users because JVM buildpacks should reach out to URLs that have a cert signed by a known authority with a CA in the default system truststore.

If you have customized your JVM buildpack to download the JVM from a URL that uses a certificate not signed by a well-known CA, you can workaround this by specifying the CA certs buildpack to run first. This works because while you will end up with the CA certificates buildpack specified twice, the lifecycle is smart enough to drop the second one.

For example:

{{< code/copyable >}}
pack build samples/jar --buildpack paketo-buildpacks/ca-certificates --buildpack gcr.io/paketo-buidpacks/azul-zulu --buildpack paketo-buildpacks/java`
{{< /code/copyable >}}

It does not hurt to use this command for all situations, it is just more verbose and most users can get away without specifying the CA certificates buildpack to be first.

## Spring Boot Applications

If the application uses Spring Boot the [Spring Boot Buildpack][bp/spring-boot] will enhance the resulting image by adding additional metadata to the image config,
applying Boot-specific performance optimizations, and enabling runtime auto-configuration.

### Additional Metadata

The Spring Boot Buildpack adds the following additional image labels:

* `org.opencontainers.image.title` - set to the value of `Implementation-Title` from  `MANIFEST.MF`.
* `org.opencontainers.image.version` - set to the values of `Implementation-Version` from `MANIFEST.MF`.
* `org.springframework.boot.version` - set to the value of `Spring-Boot-Version` from `MANIFEST.MF`.
* `org.springframework.cloud.dataflow.spring-configuration-metadata.json` - containing [configuration metadata][spring boot configuration metadata].
* `org.springframework.cloud.dataflow.spring-configuration-metadata.json` - containing `dataflow-configuration-metadata.properties`, if present.

In addition, the buildpack will add an entry with name `dependencies` to the Bill-of-Materials listing the application dependencies.

**Example**: Inspecting Application Dependencies

The following command uses `pack` to list every dependency of a sample application.
{{< code/copyable >}}
pack inspect-image samples/java --bom | jq '.local[] | select(.name=="dependencies") | .metadata.dependencies[].name'
{{< /code/copyable >}}

### Runtime Auto-Configuration

The Spring Boot Buildpack adds [Spring Cloud Bindings][spring cloud bindings] to the application class path. Spring Cloud Bindings will auto-configure the application to connect to an external service when a binding of a supported type provides credentials and connection information at runtime. Runtime auto-configuration is enabled by default but can be disabled with the `BPL_SPRING_CLOUD_BINDINGS_ENABLED` environment variable.

### Optimizations

The Spring Boot Buildpack can apply domain-specific knowledge to optimize the performance of Spring Boot applications. For example, if the buildpack detects that the application is a reactive web application the thread count will be reduced to `50` from a default of `250`.

## Connecting to an APM

The Java Buildpack supports the following [APM][apm] integrations:

* [Azure Application Insights][azure application insights] - support provided by the [Azure Application Insights Buildpack][bp/azure-application-insights]
* [Google Stackdriver][google stackdriver] - support provided by the [Google Stackdriver Buildpack][bp/google-stackdriver]

APM integration are enabled with [bindings][bindings]. If a binding of the correct `type` is provided at build-time the corresponding java agent will be contributed to the application image. Connection credentials will be read from the binding at runtime.

**Example**: Connecting to Azure Application Insights

The following command builds an image with the Azure Application Insights Java Agent
{{< code/copyable >}}
pack build samples/java --volume "$(pwd)/java/application-insights/binding:/platform/bindings/application-insights"
{{< /code/copyable >}}

To connect to Azure Applicaiton Insights at runtime a valid [Instrumentation Key][azure application insights instrumentation key] is required.
{{< code/copyable >}}
echo "<Instrumentation Key>" > java/application-insights/binding/InstrumentationKey
docker run --rm --tty \
  --env SERVICE_BINDING_ROOT=/bindings \
  --volume "$(pwd)/java/application-insights/binding:/bindings/app-insights" \
  samples/java
{{< /code/copyable >}}

## Debugging

If `BP_DEBUG_ENABLED` is set at build-time and `BPL_DEBUG_ENABLED` is set at runtime the [Debug Buildpack][bp/debug] will configure the application to accept debugger connections. The debug port defaults to `8000` and can be configured with `BPL_DEBUG_PORT` at runtime. If `BPL_DEBUG_SUSPEND` is set at runtime, the JVM will suspend execution until a debugger has attached.

**Example**: Remote Debugging

The following commands builds a debug-enabled image.
{{< code/copyable >}}
pack build samples/java \
  --path java/jar \
  --env BP_DEBUG_ENABLED=true
{{< /code/copyable >}}

To run the image with the debug port published:
{{< code/copyable >}}
docker run --env BPL_DEBUG_ENABLED=true --publish 8000:8000 samples/java
{{< /code/copyable >}}

Connect your IDE debugger to connect to the published port.
![Eclipse Remote Debug Configuration](/images/debug-eclipse.png)

## Enabling JMX

If `BP_JMX_ENABLED` is set at build-time and `BPL_JMX_ENABLED` is set at runtime, the [JMX Buildpack][bp/jmx] will enable [JMX][jmx]. The JMX connector will listen on port `5000` by default. The port can be configured with the `BPL_JMX_PORT` environment variable at runtime.

**Example**: Enabling JMX

The following commands builds a JMX enabled image.
{{< code/copyable >}}
pack build samples/java \
  --path java/jar \
  --env BP_JMX_ENABLED=true
{{< /code/copyable >}}

To run the image with the JMX port published:
{{< code/copyable >}}
docker run --env BPL_JMX_ENABLED=true --publish 5000:5000 samples/java
{{< /code/copyable >}}

Connect [JConsole][jconsole] to the published port.
![JConsole](/images/jconsole.png)

## Selecting a Process

The Java buildpack will contribute a default process type that starts the application.

**Example**: Running the default process

Execute the following commands to start the default process type using a `samples/java` image built from any previous example command.
{{< code/copyable >}}
docker run  --rm --publish 8080:8080 samples/java
curl -s http://localhost:8080/actuator/health
{{< /code/copyable >}}

### Providing Additional Arguments

Additional arguments can be provided to the application using the container [`CMD`][oci config]. In Kubernetes set `CMD` using the `args` field on the [container][kubernetes container resource] resource.

**Example**: Setting the Server Port

Execute the following command passes an additional argument to application start command, setting the port to `8081`.
{{< code/copyable >}}
docker run --rm --publish 8081:8081 samples/java --server.port=8081
curl -s http://localhost:8081/actuator/health
{{< /code/copyable >}}

### Executing a Custom Command

To override the buildpack-provided start command with a custom command, set the container [`ENTRYPOINT`][oci config]

**Example**: Starting an Interactive Shell

The following command runs Bash interactively:
{{< code/copyable >}}
docker run --rm --entrypoint bash samples/java
{{< /code/copyable >}}

### Executing a Custom Command in the Buildpack-Provided Environment

Every buildpack-generated image contains an executable called the `launcher` which can be used to execute a custom command in an environment containing buildpack-provided environment variables. The `launcher` will execute any buildpack provided profile scripts before running to provided command, in order to set environment variables with values that should be calculated dynamically at runtime.

To run a custom start command in the buildpack-provided environment set the `ENTRYPOINT` to `launcher` and provide the command using the container `CMD`.

**Example**: Inspecting the Buildpack-Provided `JAVA_TOOL_OPTIONS`
The following command will print value of `$JAVA_TOOL_OPTIONS` set by the buildpack:
{{< code/copyable >}}
docker run --rm --entrypoint launcher samples/java echo 'JAVA_TOOL_OPTIONS: $JAVA_TOOL_OPTIONS'
{{< /code/copyable >}}

Each argument provided to the launcher will be evaluated by the shell prior to execution and the original tokenization will be preserved. Note that, in the example above `'JAVA_TOOL_OPTIONS: $JAVA_TOOL_OPTIONS'` is single quoted so that `$JAVA_TOOL_OPTIONS` is evaluated in the container, rather than by the host shell.

## Components

The following component buildpacks compose the Java Buildpack. Buildpacks are listed in the order they are executed.

| Buildpack                                                                    | Required/Optional | Responsibility                                                                                  |
| ---------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------- |
| [Paketo CA Certificates Buildpack][bp/ca-certificates]                       | Optional          | Adds CA certificates to the system truststore at build and runtime.                             |
| [Paketo BellSoft Liberica Buildpack][bp/bellsoft-liberica]                   | **Required**      | Provides the JDK and/or JRE.                                                                    |
| [Paketo Gradle Buildpack][bp/gradle]                                         | Optional          | Builds Gradle-based applications from source.                                                   |
| [Paketo Leiningen Buildpack][bp/leiningen]                                   | Optional          | Builds Leiningen-based applications from source.                                                |
| [Paketo Maven Buildpack][bp/maven]                                           | Optional          | Builds Maven-based applications from source.                                                    |
| [Paketo SBT Buildpack][bp/sbt]                                               | Optional          | Builds SBT-based applications from source.                                                      |
| [Paketo Executable JAR Buildpack][bp/executable-jar]                         | Optional          | Contributes a process Type that launches an executable JAR.                                     |
| [Paketo Apache Tomcat Buildpack][bp/apache-tomcat]                           | Optional          | Contributes Apache Tomcat and a process type that launches a WAR with Tomcat.                   |
| [Paketo DistZip Buildpack][bp/dist-zip]                                      | Optional          | Contributes a process type that launches a DistZip-style application.                           |
| [Paketo Spring Boot Buildpack][bp/spring-boot]                               | Optional          | Contributes configuration and metadata to Spring Boot applications.                             |
| [Paketo Procfile Buildpack][bp/procfile]                                     | Optional          | Allows the application to define or redefine process types with a [Procfile][procfiles]         |
| [Paketo Azure Application Insights Buildpack][bp/azure-application-insights] | Optional          | Contributes the Application Insights Agent and configures it to connect to the service.         |
| [Paketo Debug Buildpack][bp/debug]                                           | Optional          | Configures debugging for JVM applications.                                                      |
| [Paketo Google Stackdriver Buildpack][bp/google-stackdriver]                 | Optional          | Contributes Stackdriver agents and configures them to connect to the service.                   |
| [Paketo JMX Buildpack][bp/jmx]                                               | Optional          | Configures JMX for JVM applications.                                                            |
| [Paketo Encrypt At Rest Buildpack][bp/encrypt-at-rest]                       | Optional          | Encrypts an application layer and contributes a profile script that decrypts it at launch time. |
| [Paketo Environment Variables Buildpack][bp/environment-variables]           | Optional          | Contributes arbitrary user-provided environment variables to the image.                         |
| [Paketo Image Labels Buildpack][bp/image-labels]                             | Optional          | Contributes OCI-specific and arbitrary user-provided labels to the image.                       |

<!-- buildpacks -->
[bp/apache-tomcat]:https://github.com/paketo-buildpacks/apache-tomcat
[bp/azure-application-insights]:https://github.com/paketo-buildpacks/azure-application-insights
[bp/bellsoft-liberica]:https://github.com/paketo-buildpacks/bellsoft-liberica
[bp/amazon-corretto]:https://github.com/paketo-buildpacks/amazon-corretto
[bp/azul-zulu]:https://github.com/paketo-buildpacks/azul-zulu
[bp/eclipse-openj9]:https://github.com/paketo-buildpacks/eclipse-openj9
[bp/graalvm]:https://github.com/paketo-buildpacks/graalvm
[bp/dragonwell]:https://github.com/paketo-buildpacks/graalvm
[bp/microsoft]:https://github.com/paketo-buildpacks/graalvm
[bp/sap-machine]:https://github.com/paketo-buildpacks/sap-machine
[bp/ca-certificates]:https://github.com/paketo-buildpacks/ca-certificates
[bp/debug]:https://github.com/paketo-buildpacks/debug
[bp/dist-zip]:https://github.com/paketo-buildpacks/dist-zip
[bp/encrypt-at-rest]:https://github.com/paketo-buildpacks/encrypt-at-rest
[bp/environment-variables]:https://github.com/paketo-buildpacks/environment-variables
[bp/executable-jar]:https://github.com/paketo-buildpacks/executable-jar
[bp/google-stackdriver]:https://github.com/paketo-buildpacks/google-stackdriver
[bp/gradle]:https://github.com/paketo-buildpacks/gradle
[bp/image-labels]:https://github.com/paketo-buildpacks/image-labels
[bp/java]:https://github.com/paketo-buildpacks/java
[bp/jmx]:https://github.com/paketo-buildpacks/jmx
[bp/leiningen]:https://github.com/paketo-buildpacks/leiningen
[bp/maven]:https://github.com/paketo-buildpacks/maven
[bp/procfile]:https://github.com/paketo-buildpacks/procfile
[bp/sbt]:https://github.com/paketo-buildpacks/sbt
[bp/spring-boot]:https://github.com/paketo-buildpacks/spring-boot

<!-- paketo references -->
[bp/java/releases]:https://github.com/paketo-buildpacks/java/releases
[samples]:https://github.com/paketo-buildpacks/samples

<!-- paketo docs references -->
[base builder]:{{< ref "/docs/concepts/builders#base" >}}
[bindings]:{{< ref "/docs/reference/configuration#bindings" >}}
[composite buildpack]:{{< ref "/docs/concepts/buildpacks#composite-buildpacks" >}}
[procfiles]:{{< ref "/docs/reference/configuration#procfiles" >}}

<!-- cnb references -->
[pack]:https://github.com/buildpacks/pack
[platforms]:https://buildpacks.io/docs/concepts/components/platform/

<!-- other references -->
[apache tomcat]:http://tomcat.apache.org
[apm]:https://en.wikipedia.org/wiki/Application_performance_management
[azure application insights instrumentation key]:https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource#copy-the-instrumentation-key
[azure application insights]:https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview
[bash pattern matching]:https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html
[dist-zip]:https://docs.gradle.org/current/userguide/distribution_plugin.html
[executable jar]:https://en.wikipedia.org/wiki/JAR_(file_format)#Executable_JAR_files
[google stackdriver]:https://cloud.google.com/products/operations
[gradle]:https://gradle.org/
[java]:https://github.com/paketo-buildpacks/java
[jconsole]:https://openjdk.java.net/tools/svc/jconsole/
[jmx]:https://en.wikipedia.org/wiki/Java_Management_Extensions#:~:text=Java%20Management%20Extensions%20(JMX)%20is,MBeans%20(for%20Managed%20Bean)
[kubernetes container resource]:https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#container-v1-core
[leiningen]:https://leiningen.org/
[liberica]:https://bell-sw.com/
[maven settings]:http://maven.apache.org/settings.html
[maven]:https://maven.apache.org/
[oci config]:https://github.com/opencontainers/image-spec/blob/master/config.md#properties
[sbt]:https://www.scala-sbt.org/index.html
[spring boot actuator endpoints]:https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-endpoints
[spring boot configuration metadata]:https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-configuration-metadata.html
[spring boot gradle plugin]:https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/html/#build-image
[spring boot maven plugin]:https://docs.spring.io/spring-boot/docs/current/maven-plugin/reference/html/#build-image
[spring cloud bindings]:https://github.com/spring-cloud/spring-cloud-bindings
[war]:https://en.wikipedia.org/wiki/WAR_(file_format)
