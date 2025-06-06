---
title: "Java Native Image Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: java-native-image-reference
    name: "Java Native Image Buildpack"
---

{{% reference_exec_summary bp_name="Paketo Java Native Image Buildpack" bp_repo="https://github.com/paketo-buildpacks/java-native-image" howto_docs_path="/docs/howto/java/#build-an-app-as-a-graalvm-native-image-application" %}}

The [Paketo Java Native Image Buildpack][bp/java-native-image] allows users to create an image containing a [GraalVM][graalvm] [native image][graalvm native image] application. The Java Native Image Buildpack supports the same [build tools and configuration options][java/building from source] as the [Java Buildpack][bp/java]. The build must produce an [executable jar][executable jar].

## Supported Applications

For all native image builds, it is required that:

* `BP_NATIVE_IMAGE` is set at build time.

For Spring Boot applications, it is required that:

* The application declares a dependency on [Spring Native][spring native].
* The version of [Spring Native][spring native] declared by the application may require a specific version of Spring Boot. See the Spring Native [release notes][spring native releases] for supported Spring Boot versions.

## Components

The following component buildpacks compose the Paketo Java Native Image Buildpack.

| Buildpack                                                          | Required/Optional | Responsibility                                                                                                    |
| ------------------------------------------------------------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| [Paketo CA Certificates Buildpack][bp/ca-certificates]             | Optional          | Adds CA certificates to the system truststore at build and runtime.                                               |
| [Paketo GraalVM Buildpack][bp/graalvm]                             | **Required**      | Provides the GraalVM JDK and Native Image [Substrate VM](https://www.graalvm.org/reference-manual/native-image/). |
| [Paketo Gradle Buildpack][bp/gradle]                               | Optional          | Builds Gradle-based applications from source.                                                                     |
| [Paketo Leiningen Buildpack][bp/leiningen]                         | Optional          | Builds Leiningen-based applications from source.                                                                  |
| [Paketo Maven Buildpack][bp/maven]                                 | Optional          | Builds Maven-based applications from source.                                                                      |
| [Paketo SBT Buildpack][bp/sbt]                                     | Optional          | Builds SBT-based applications from source.                                                                        |
| [Paketo Executable JAR Buildpack][bp/executable-jar]               | Optional          | Contributes a process Type that launches an executable JAR.                                                       |
| [Paketo Spring Boot Buildpack][bp/spring-boot]                     | Optional          | Contributes configuration and metadata to Spring Boot applications.                                               |
| [Paketo Native Image Buildpack][bp/native-image]                   | **Required**      | Creates a native image from a JVM application.                                                                    |
| [Paketo Procfile Buildpack][bp/procfile]                           | Optional          | Allows the application to define or redefine process types with a [Procfile][procfiles]                           |
| [Paketo Environment Variables Buildpack][bp/environment-variables] | Optional          | Contributes arbitrary user-provided environment variables to the image.                                           |
| [Paketo Image Labels Buildpack][bp/image-labels]                   | Optional          | Contributes OCI-specific and arbitrary user-provided labels to the image.                                         |

<!-- buildpacks -->
[bp/ca-certificates]:https://github.com/paketo-buildpacks/ca-certificates
[bp/graalvm]:https://github.com/paketo-buildpacks/graalvm
[bp/environment-variables]:https://github.com/paketo-buildpacks/environment-variables
[bp/executable-jar]:https://github.com/paketo-buildpacks/executable-jar
[bp/gradle]:https://github.com/paketo-buildpacks/gradle
[bp/image-labels]:https://github.com/paketo-buildpacks/image-labels
[bp/java]:https://github.com/paketo-buildpacks/java
[bp/leiningen]:https://github.com/paketo-buildpacks/leiningen
[bp/maven]:https://github.com/paketo-buildpacks/maven
[bp/procfile]:https://github.com/paketo-buildpacks/procfile
[bp/sbt]:https://github.com/paketo-buildpacks/sbt
[bp/spring-boot]:https://github.com/paketo-buildpacks/spring-boot
[bp/native-image]:https://github.com/paketo-buildpacks/spring-boot-native-image
[bp/java-native-image]:https://github.com/paketo-buildpacks/java-native-image

[samples]:https://github.com/paketo-buildpacks/samples

<!-- cnb references -->
[platforms]:https://buildpacks.io/docs/concepts/components/platform/

<!-- paketo docs references -->
[procfiles]:{{< ref "/docs/howto/configuration#procfiles" >}}
[java/building from source]:{{< ref "/docs/howto/java#build-from-source" >}}

<!-- other references -->
[graalvm]:https://www.graalvm.org/docs/introduction/
[graalvm native image]:https://www.graalvm.org/reference-manual/native-image/
[executable jar]:https://en.wikipedia.org/wiki/JAR_(file_format)#Executable_JAR_files
[spring native]:https://github.com/spring-projects-experimental/spring-native
[spring native releases]:https://github.com/spring-projects-experimental/spring-native/releases
