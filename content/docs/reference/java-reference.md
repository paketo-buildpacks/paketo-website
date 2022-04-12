---
title: "Java Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: java-reference
    name: "Java Buildpack"
---

{{% reference_exec_summary bp_name="Paketo Java Buildpack" bp_repo="https://github.com/paketo-buildpacks/java" howto_docs_path="/docs/howto/java" %}}

The [Paketo Java Buildpack][bp/java] allows users to create an image containing a JVM application from a precompiled artifact or directly from source.

The Java Buildpack is a [composite buildpack][composite buildpack] and each step in a build is handled by one of its [components]({{< relref "#components" >}}). For a full set of configuration options and capabilities see the homepages for the component buildpacks.

## About the JVM

The Java Buildpack uses the [BellSoft Liberica][liberica] implementations of the JRE and JDK. JVM installation is handled by the [BellSoft Liberica Buildpack][bp/bellsoft-liberica]. The JDK will be installed in the build container but only the JRE will be contributed to the application image.

See the [homepage][bp/bellsoft-liberica] for the Bellsoft Liberica Buildpack for a full set of configuration options.

## Memory Calculator

The Java Memory Calculator is a tool used by the Paketo Java Buildpack to provide an optimized memory configuration for Java applications running in containers with enforced memory limits.

This section describes the algorithm that is responsible for providing this memory configuration, including the inputs used and their default values.

### Heap

The Heap memory value, ultimately supplied as the `-xmX` JVM flag, is calculated using the following formula:

`Heap = Total Container Memory - Non-Heap - Headroom`

1. The Total Container Memory value is the total memory available to the application, typically the value of the memory limit set for the container.

2. The Non-Heap value is calculated by the algorithm using the following formula. 

   `Non-Heap = Direct Memory + Metaspace + Reserved Code Cache + (Thread Stack * Thread Count)`
3. Headroom is a percentage of the container’s total memory that can be excluded from the memory calculator’s algorithm and left for non-JVM operations. This defaults to 0.

### Non-Heap

The below table lists the component parts of the Non-Heap value, the equivalent JVM flags, and their defaults. Where one exists, the JVM default value is used.

| Memory Region       | JVM Flag                    | Default                                                                             |
| ------------------- | --------------------------- | ----------------------------------------------------------------------------------- |
| Direct Memory       | `-XX:MaxDirectMemorySize`   | 10MB (JVM Default)                                                                  |
| Metaspace           | `-XX:MaxMetaspaceSize`      | Automatically calculated based on class count                                       |
| Reserved Code Cache | `-XX:ReservedCodeCacheSize` | 240MB (JVM Default)                                                                 |
| Thread Stack        | `-Xss`                      | 1M * 250  (JVM Default Thread Stack Size * Default Optimum Thread Count for Tomcat) |

The outputs of the tool are the above JVM flags and their calculated values. 

The remaining memory left after totalling these values is assigned to the `-Xmx` flag as Heap. All flags and values are then appended to `JAVA_TOOL_OPTIONS` when the application image is run. 

### Notes

**It is not recommended to set the Heap memory value directly using the `-Xmx` flag**

The non-heap value calculated by the tool **remains fixed** for a constant application. 
Therefore, setting `-Xmx` directly could either:
* Cause the total memory (Heap + Non-Heap) to exceed the container limit if set too high, or
* Force a lower limit on Heap size than would be necessary after calculation, wasting memory.

**Adjusting container memory limits**

Decreasing the container memory limit will result in a reduced heap (`-Xmx`) size. 

Similarly, increasing container memory limit beyond a known application's non-heap (fixed) size will assign all of the increased value to Heap (`-Xmx`).

**Overriding Defaults**

It is possible to override the calculated or default values specified above in the non-heap table, however the runtime consequences of adjusting these values should be considered. For more information on how to configure these explicitly, see the How-To section [Configure The JVM at Runtime][configure jvm].

## Java Application Servers

The Paketo Java buildpack supports multiple application servers. Each application server has different capabilities and configuration options. The following are a list of supported application servers and links to reference documentation for each one.

| Application Server | Buildpack Documentation                                                        | Server Documentation                                        |
| ------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| Apache Tomcat      | [link](https://github.com/paketo-buildpacks/apache-tomcat/blob/main/README.md) | [link](https://tomcat.apache.org/tomcat-9.0-doc/index.html) |
| Apache Tomee       | [link](https://github.com/paketo-buildpacks/apache-tomee/blob/main/README.md)  | [link](https://tomee.apache.org/tomee-8.0/docs/)            |
| Open Liberty       | [link](https://github.com/paketo-buildpacks/liberty/blob/main/README.md)       | [link](https://openliberty.io/)                             |

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

### Optimizations

The Spring Boot Buildpack can apply domain-specific knowledge to optimize the performance of Spring Boot applications. For example, if the buildpack detects that the application is a reactive web application the thread count will be reduced to `50` from a default of `250`.

## Components

The following component buildpacks compose the Java Buildpack. Buildpacks are listed in the order they are executed.

| Buildpack                                                                    | Required/Optional | Responsibility                                                                                  |
| ---------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------- |
| [Paketo CA Certificates Buildpack][bp/ca-certificates]                       | Optional          | Adds CA certificates to the system truststore at build and runtime.                             |
| [Paketo BellSoft Liberica Buildpack][bp/bellsoft-liberica]                   | **Required**      | Provides the JDK and/or JRE.                                                                    |
| [Paketo Syft][bp/syft]                                                       | Optional          | Provides the Syft CLI which can be used to generate SBoM information.                           |
| [Paketo Leiningen Buildpack][bp/leiningen]                                   | Optional          | Builds Leiningen-based applications from source.                                                |
| [Paketo Clojure Tools Buildpack][bp/clojure-tools]                           | Optional          | Builds Clojure applications from source.                                                        |
| [Paketo Gradle Buildpack][bp/gradle]                                         | Optional          | Builds Gradle-based applications from source.                                                   |
| [Paketo Maven Buildpack][bp/maven]                                           | Optional          | Builds Maven-based applications from source.                                                    |
| [Paketo SBT Buildpack][bp/sbt]                                               | Optional          | Builds SBT-based applications from source.                                                      |
| [Paketo Watchexec Buildpack][bp/watchexec]                                   | Optional          | Contributes the `watchexec` binary for process reloading.                                       |
| [Paketo Executable JAR Buildpack][bp/executable-jar]                         | Optional          | Contributes a process Type that launches an executable JAR.                                     |
| [Paketo Apache Tomcat Buildpack][bp/apache-tomcat]                           | Optional          | Contributes Apache Tomcat and a process type that launches a WAR with Tomcat.                   |
| [Paketo Apache Tomee Buildpack][bp/apache-tomee]                             | Optional          | Contributes Apache Tomee and a process type that launches a WAR with Tomee.                     |
| [Paketo Liberty Buildpack][bp/liberty]                                       | Optional          | Contributes Open Liberty and a process type that launches a WAR with Open Liberty.              |
| [Paketo DistZip Buildpack][bp/dist-zip]                                      | Optional          | Contributes a process type that launches a DistZip-style application.                           |
| [Paketo Spring Boot Buildpack][bp/spring-boot]                               | Optional          | Contributes configuration and metadata to Spring Boot applications.                             |
| [Paketo Procfile Buildpack][bp/procfile]                                     | Optional          | Allows the application to define or redefine process types with a [Procfile][procfiles]         |
| [Paketo Jattach][bp/jattach]                                                 | Optional          | Provides the JAttach binary to send commands to a remote JVM via Dynamic Attach mechanism       |
| [Paketo Azure Application Insights Buildpack][bp/azure-application-insights] | Optional          | Contributes the Application Insights Agent and configures it to connect to the service.         |
| [Paketo Google Stackdriver Buildpack][bp/google-stackdriver]                 | Optional          | Contributes Stackdriver agents and configures them to connect to the service.                   |
| [Paketo Datadog Buildpack][bp/datadog]                                       | Optional          | Contributes Datadog trace agent and configures it to connect to the service.                    |
| [Paketo Java Memory Assistant Buildpack][bp/java-memory-assistant]           | Optional          | Contributes and configures the SAP Java Memory Assistant (JMA) Agent for Java applications.     |
| [Paketo Encrypt At Rest Buildpack][bp/encrypt-at-rest]                       | Optional          | Encrypts an application layer and contributes a profile script that decrypts it at launch time. |
| [Paketo Environment Variables Buildpack][bp/environment-variables]           | Optional          | Contributes arbitrary user-provided environment variables to the image.                         |
| [Paketo Image Labels Buildpack][bp/image-labels]                             | Optional          | Contributes OCI-specific and arbitrary user-provided labels to the image.                       |

<!-- buildpacks -->
[bp/apache-tomcat]:https://github.com/paketo-buildpacks/apache-tomcat
[bp/apache-tomee]:https://github.com/paketo-buildpacks/apache-tomee
[bp/azure-application-insights]:https://github.com/paketo-buildpacks/azure-application-insights
[bp/bellsoft-liberica]:https://github.com/paketo-buildpacks/bellsoft-liberica
[bp/amazon-corretto]:https://github.com/paketo-buildpacks/amazon-corretto
[bp/azul-zulu]:https://github.com/paketo-buildpacks/azul-zulu
[bp/clojure-tools]:https://github.com/paketo-buildpacks/clojure-tools
[bp/eclipse-openj9]:https://github.com/paketo-buildpacks/eclipse-openj9
[bp/graalvm]:https://github.com/paketo-buildpacks/graalvm
[bp/datadog]:https://github.com/paketo-buildpacks/datadog
[bp/dragonwell]:https://github.com/paketo-buildpacks/alibaba-dragonwell
[bp/microsoft]:https://github.com/paketo-buildpacks/microsoft-openjdk
[bp/sap-machine]:https://github.com/paketo-buildpacks/sap-machine
[bp/ca-certificates]:https://github.com/paketo-buildpacks/ca-certificates
[bp/dist-zip]:https://github.com/paketo-buildpacks/dist-zip
[bp/encrypt-at-rest]:https://github.com/paketo-buildpacks/encrypt-at-rest
[bp/environment-variables]:https://github.com/paketo-buildpacks/environment-variables
[bp/executable-jar]:https://github.com/paketo-buildpacks/executable-jar
[bp/google-stackdriver]:https://github.com/paketo-buildpacks/google-stackdriver
[bp/gradle]:https://github.com/paketo-buildpacks/gradle
[bp/image-labels]:https://github.com/paketo-buildpacks/image-labels
[bp/jattach]:https://github.com/paketo-buildpacks/jattach
[bp/java]:https://github.com/paketo-buildpacks/java
[bp/java-memory-assistant]:https://github.com/paketo-buildpacks/java-memory-assistant
[bp/leiningen]:https://github.com/paketo-buildpacks/leiningen
[bp/liberty]:https://github.com/paketo-buildpacks/liberty
[bp/maven]:https://github.com/paketo-buildpacks/maven
[bp/procfile]:https://github.com/paketo-buildpacks/procfile
[bp/sbt]:https://github.com/paketo-buildpacks/sbt
[bp/spring-boot]:https://github.com/paketo-buildpacks/spring-boot
[bp/syft]:https://github.com/paketo-buildpacks/syft
[bp/watchexec]:https://github.com/paketo-buildpacks/watchexec

<!-- other references -->
[liberica]:https://bell-sw.com/
[composite buildpack]:{{< ref "docs/concepts/buildpacks#component-buildpacks" >}}
[configure jvm]: {{< ref "docs/howto/java#configure-the-jvm-at-runtime" >}}
