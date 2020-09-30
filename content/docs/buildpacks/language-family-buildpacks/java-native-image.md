---
title: "Java Native Image Buildpack"
weight: 303
menu:
  main:
    parent: "language-family-buildpacks"
---

# Java Native Image Buildpack
The [Paketo Java Native Image Buildpack][bp/java-native-image] allows users to create an image containing a [GraalVM][graalvm] [native image][graalvm native image] application.

The Java Native Buildpack is a [composite buildpack][composite buildpack] and each step in a build is handled by one of it's [components](#components). The following docs describe common build configurations. For a full set of configuration options and capabilities see the homepages of the component buildpacks.
  
## Table of Contents
- [Java Native Image Buildpack](#java-native-image-buildpack)
  - [Table of Contents](#table-of-contents)
  - [About the Examples](#about-the-examples)
  - [Supported Applications](#supported-applications)
  - [Building From Source](#building-from-source)
  - [Building from an Executable JAR](#building-from-an-executable-jar)
  - [About the Native Image](#about-the-native-image)
      - [Inspecting the JVM Version](#inspecting-the-jvm-version)
      - [Configuring the JVM Version](#configuring-the-jvm-version)
  - [Spring Boot Applications](#spring-boot-applications)
  - [Selecting a Process](#selecting-a-process)
    - [Providing Additional Arguments](#providing-additional-arguments)
  - [Components](#components)

## About the Examples
All Java Native Image Buildpack examples will use the Paketo [sample applications][samples].

Examples assume that the root of this repository is the working directory:
{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples
{{< /code/copyable >}}

The [pack CLI][pack] is used throughout the examples. `pack` is just one of several Cloud Native Buildpack [platforms][platforms] than can execute builds with the Java Native Image Buildpacks. For example, Spring Boot developers may want to explore the [Spring Boot Maven Plugin][spring boot maven plugin] or [Spring Boot Gradle Plugin][spring boot gradle plugin].

Examples assume that either the [Paketo Tiny][tiny builder] or [Paketo Base builder][base builder] is the default builder:
{{< code/copyable >}}
pack set-default-builder paketobuildpacks/builder:tiny
{{< /code/copyable >}}

All java native image example images should return `{"status":"UP"}` from the [actuator health endpoint][spring boot actuator endpoints].
{{< code/copyable >}}
docker run --rm --tty --publish 8080:8080 samples/java-native
curl -s http://localhost:8080/actuator/health | jq .
{{< /code/copyable >}}

## Supported Applications
The Java Native Image Buildpack currently only supports Spring Boot applications.

The version of [Spring GraalVM Native][spring graalvm native] declared by the application or added by the buildpack may restrict support to particular versions of Spring Boot. The Spring GraalVM Native [release notes][spring graalvm native releases] for supported Spring Boot versions.

For all native image builds, it is a requirement that `BP_BOOT_NATIVE_IMAGE` is set at build-time.

## Building From Source
The Java Native Image Buildpack supports the same [build tools and configuration options][java/building from source] as the [Java Buildpack][bp/java]. The build must produce an [executable jar][executable jar].

After compiling and packaging, the buildpack will replace provided application source code with the exploded JAR and proceed as described in [Building from an Executable Jar](#building-from-an-executable-jar).

**Example**: Building a Native image with Maven

The following command creates an image from source with `maven`.

{{< code/copyable >}}
pack build samples/java-native \
  --env BP_BOOT_NATIVE_IMAGE=true
  --path java/native-image
{{< /code/copyable >}}

## Building from an Executable JAR
An application developer may build an image from an exploded [executable JAR][executable jar]. Most platforms will automatically extract provided archives.

**Example**: Building a Native image from an Executable JAR

The following command uses Maven directly to compile an executable JAR and then uses the `pack` CLI to build an image from the JAR.

{{< code/copyable >}}
cd samples/java/native-image
./mvnw package
pack build samples/java-native \
  --env BP_BOOT_NATIVE_IMAGE=true
  --path java/native-image/target/demo-0.0.1-SNAPSHOT.jar
{{< /code/copyable >}}

The resulting application image will be identical to that built in the "Building a Native image with Maven" example.

## About the Native Image

The [GraalVM Buildpack][bp/graalvm] will provide the [GraalVM][graalvm] JDK, including the `native-image` utility (the [Native image builder][graalvm native image]), and the [Substrate VM][graalvm substrate vm].

The [Spring Boot Native Image Buildpack][bp/spring-boot-native-image] uses `native-image` to compile the Java bytecode into a standalone executable. The Spring Boot Native Image Buildpack relies on the [Spring GraalVM Native][spring graalvm native], a [GraalVM Feature][graalvm feature], to configure the native image build. If the application does not already include Spring GraalVM Native as a dependency, the buildpack will add it.

**Note**: The `native-image` build is a memory intensive process and may be slow if insufficient memory is provided. From the [prerequisites][spring graalvm native prerequisites] in the Spring GraalVM Native reference docs:


> "On Mac and Windows, it is recommended to increase the memory allocated to Docker to at least 8G (and potentially to add more CPUs as well) since native-image compiler is a heavy process. See this [Stackoverflow answer](https://stackoverflow.com/questions/44533319/how-to-assign-more-memory-to-docker-container/44533437#44533437) for more details. On Linux, Docker uses by default the resources available on the host so no configuration is needed."

#### Inspecting the JVM Version
The exact substrate VM version that was contributed to a given image can be read from the Bill-of-Materials.

**Example** Inspecting the JRE Version

Given an image named `samples/java-native` built from one of examples above, the following command will print the exact version of the installed substrate VM.
{{< code/copyable >}}
pack inspect-image samples/java-native --bom | jq '.local[] | select(.name=="native-image-svm") | .metadata.version'
{{< /code/copyable >}}

#### Configuring the JVM Version
The following environment variable configures the JVM version at build-time.
* `BP_JVM_VERSION`
    * Defaults to the latest LTS version at the time of release.
    * Configures a specific JVM version.
    * *Example*: Given `BP_JVM_VERSION=8` or `BP_JVM_VERSION=8.*` the buildpack will install the latest patch releases of the Java 8 JDK and JRE.


## Spring Boot Applications
The Java Native Image Buildpack contains the [Spring Boot Buildpack][bp/spring-boot] and provides the same Spring Boot [features][java/spring boot applications] as the Java Buildpack.

## Selecting a Process

The Java Native Image Buildpack will contribute a default process type that starts the application.

**Example**: Running the Default Process

Execute the following commands to start the default process type using a `samples/java-native` image built from any previous example command.
{{< code/copyable >}}
docker run  --rm --publish 8080:8080 samples/java-native
curl -s http://localhost:8080/actuator/health
{{< /code/copyable >}}

### Providing Additional Arguments

Additional arguments can be provided to the application using the container [`CMD`][oci config]. In Kubernetes set `CMD` using the `args` field on the [container][kubernetes container resource] resource.

**Example**: Setting the Server Port

Execute the following command passes an additional argument to application start command, setting the port to `8081`.
{{< code/copyable >}}
docker run --rm --publish 8081:8081 samples/java-native --server.port=8081
curl -s http://localhost:8081/actuator/health
{{< /code/copyable >}}

## Components
The following component buildpacks compose the Paketo Java Native Image Buildpack.

| Buildpack | Required/Optional | Responsibility
|-----------|----------|---------------
|[Paketo GraalVM Buildpack][bp/graalvm] | **Required**| Provides the GraalVM JDK and Native Image [Substrate VM](https://www.graalvm.org/reference-manual/native-image/SubstrateVM/).
|[Paketo Gradle Buildpack][bp/gradle] | Optional | Builds Gradle-based applications from source.
|[Paketo Leiningen Buildpack][bp/leiningen] | Optional | Builds Leiningen-based applications from source.
|[Paketo Maven Buildpack][bp/maven] | Optional | Builds Maven-based applications from source.
|[Paketo SBT Buildpack][bp/sbt] | Optional | Builds SBT-based applications from source.
|[Paketo Executable JAR Buildpack][bp/executable-jar] | Optional | Contributes a process Type that launches an executable JAR.
|[Paketo Spring Boot Buildpack][bp/spring-boot]| Optional | Contributes configuration and metadata to Spring Boot applications.
|[Paketo Spring Boot Native Image Buildpack][bp/spring-boot-native-image]| **Required** | Creates a native image from a Spring Boot application.
|[Paketo Procfile Buildpack][bp/procfile]| Optional | Allows the application to define or redefine process types with a [Procfile][procfiles]
|[Paketo Environment Variables Buildpack][bp/environment-variables]| Optional | Contributes arbitrary user-provided environment variables to the image.
|[Paketo Image Labels Buildpack][bp/image-labels]| Optional | Contributes OCI-specific and arbitrary user-provided labels to the image.

<!-- buildpacks -->
[bp/graalvm]:https://github.com/paketo-buildpacks/graalvm
[bp/environment-variables]:https://github.com/paketo-buildpacks/environment-variables
[bp/executable-jar]:https://github.com/paketo-buildpacks/executable-jar
[bp/gradle]:https://github.com/paketo-buildpacks/gradle
[bp/image-labels]:https://github.com/paketo-buildpacks/image-labels
[bp/java-native-image]:https://github.com/paketo-buildpacks/java-native-image]
[bp/java]:https://github.com/paketo-buildpacks/java]
[bp/leiningen]:https://github.com/paketo-buildpacks/leiningen
[bp/maven]:https://github.com/paketo-buildpacks/maven
[bp/procfile]:https://github.com/paketo-buildpacks/procfile
[bp/sbt]:https://github.com/paketo-buildpacks/sbt
[bp/spring-boot]:https://github.com/paketo-buildpacks/spring-boot
[bp/spring-boot-native-image]:https://github.com/paketo-buildpacks/spring-boot-native-image

[samples]:https://github.com/paketo-buildpacks/samples

<!-- cnb references -->
[pack]:https://github.com/buildpacks/pack
[platforms]:https://buildpacks.io/docs/concepts/components/platform/

<!-- paketo docs references -->
[base builder]:{{< ref "/docs/builders#base" >}}
[tiny builder]:{{< ref "/docs/builders#tiny" >}}
[bindings]:{{< ref "/docs/buildpacks/configuration#bindings" >}}
[composite buildpack]:{{< ref "/docs/buildpacks/language-family-buildpacks#composite-buildpacks" >}}
[procfiles]:{{< ref "/docs/buildpacks/configuration#procfiles" >}}
[java/building from source]:{{< ref "/docs/buildpacks/language-family-buildpacks/java#building-from-source" >}}
[java/spring boot applications]:{{< ref "/docs/buildpacks/language-family-buildpacks/java#spring-boot-applications" >}}

<!-- other references -->
[graalvm]:https://www.graalvm.org/docs/introduction/
[graalvm native image]:https://www.graalvm.org/reference-manual/native-image/
[graalvm substrate vm]:https://www.graalvm.org/reference-manual/native-image/SubstrateVM/
[graalvm feature]:https://www.graalvm.org/sdk/javadoc/org/graalvm/nativeimage/hosted/Feature.html
[executable jar]:https://en.wikipedia.org/wiki/JAR_(file_format)#Executable_JAR_files
[spring boot gradle plugin]:https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/html/#build-image
[spring boot maven plugin]:https://docs.spring.io/spring-boot/docs/current/maven-plugin/reference/html/#build-image
[spring graalvm native]:https://github.com/spring-projects-experimental/spring-graalvm-native
[spring graalvm native releases]:https://github.com/spring-projects-experimental/spring-graalvm-native/releases
[spring graalvm native prerequisites]:https://repo.spring.io/milestone/org/springframework/experimental/spring-graalvm-native-docs/0.8.1/spring-graalvm-native-docs-0.8.1.zip!/reference/index.html#_prerequisites
