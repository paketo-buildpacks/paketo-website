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

The Java Buildpack installs a component called the Memory Calculator which will configure JVM memory based on the resources available to the container at runtime. The calculated flags will be appended to `JAVA_TOOL_OPTIONS`.

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
| [Paketo Leiningen Buildpack][bp/leiningen]                                   | Optional          | Builds Leiningen-based applications from source.                                                |
| [Paketo Clojure Tools Buildpack][bp/clojure-tools]                           | Optional          | Builds Clojure applications from source.                                                        |
| [Paketo Gradle Buildpack][bp/gradle]                                         | Optional          | Builds Gradle-based applications from source.                                                   |
| [Paketo Maven Buildpack][bp/maven]                                           | Optional          | Builds Maven-based applications from source.                                                    |
| [Paketo SBT Buildpack][bp/sbt]                                               | Optional          | Builds SBT-based applications from source.                                                      |
| [Paketo Watchexec Buildpack][bp/watchexec]                                   | Optional          | Contributes the `watchexec` binary for process reloading.                                       |
| [Paketo Executable JAR Buildpack][bp/executable-jar]                         | Optional          | Contributes a process Type that launches an executable JAR.                                     |
| [Paketo Apache Tomcat Buildpack][bp/apache-tomcat]                           | Optional          | Contributes Apache Tomcat and a process type that launches a WAR with Tomcat.                   |
| [Paketo DistZip Buildpack][bp/dist-zip]                                      | Optional          | Contributes a process type that launches a DistZip-style application.                           |
| [Paketo Spring Boot Buildpack][bp/spring-boot]                               | Optional          | Contributes configuration and metadata to Spring Boot applications.                             |
| [Paketo Procfile Buildpack][bp/procfile]                                     | Optional          | Allows the application to define or redefine process types with a [Procfile][procfiles]         |
| [Paketo Azure Application Insights Buildpack][bp/azure-application-insights] | Optional          | Contributes the Application Insights Agent and configures it to connect to the service.         |
| [Paketo Google Stackdriver Buildpack][bp/google-stackdriver]                 | Optional          | Contributes Stackdriver agents and configures them to connect to the service.                   |
| [Paketo Encrypt At Rest Buildpack][bp/encrypt-at-rest]                       | Optional          | Encrypts an application layer and contributes a profile script that decrypts it at launch time. |
| [Paketo Environment Variables Buildpack][bp/environment-variables]           | Optional          | Contributes arbitrary user-provided environment variables to the image.                         |
| [Paketo Image Labels Buildpack][bp/image-labels]                             | Optional          | Contributes OCI-specific and arbitrary user-provided labels to the image.                       |

<!-- buildpacks -->
[bp/apache-tomcat]:https://github.com/paketo-buildpacks/apache-tomcat
[bp/azure-application-insights]:https://github.com/paketo-buildpacks/azure-application-insights
[bp/bellsoft-liberica]:https://github.com/paketo-buildpacks/bellsoft-liberica
[bp/amazon-corretto]:https://github.com/paketo-buildpacks/amazon-corretto
[bp/azul-zulu]:https://github.com/paketo-buildpacks/azul-zulu
[bp/clojure-tools]:https://github.com/paketo-buildpacks/clojure-tools
[bp/eclipse-openj9]:https://github.com/paketo-buildpacks/eclipse-openj9
[bp/graalvm]:https://github.com/paketo-buildpacks/graalvm
[bp/dragonwell]:https://github.com/paketo-buildpacks/graalvm
[bp/microsoft]:https://github.com/paketo-buildpacks/graalvm
[bp/sap-machine]:https://github.com/paketo-buildpacks/sap-machine
[bp/ca-certificates]:https://github.com/paketo-buildpacks/ca-certificates
[bp/dist-zip]:https://github.com/paketo-buildpacks/dist-zip
[bp/encrypt-at-rest]:https://github.com/paketo-buildpacks/encrypt-at-rest
[bp/environment-variables]:https://github.com/paketo-buildpacks/environment-variables
[bp/executable-jar]:https://github.com/paketo-buildpacks/executable-jar
[bp/google-stackdriver]:https://github.com/paketo-buildpacks/google-stackdriver
[bp/gradle]:https://github.com/paketo-buildpacks/gradle
[bp/image-labels]:https://github.com/paketo-buildpacks/image-labels
[bp/java]:https://github.com/paketo-buildpacks/java
[bp/leiningen]:https://github.com/paketo-buildpacks/leiningen
[bp/maven]:https://github.com/paketo-buildpacks/maven
[bp/procfile]:https://github.com/paketo-buildpacks/procfile
[bp/sbt]:https://github.com/paketo-buildpacks/sbt
[bp/spring-boot]:https://github.com/paketo-buildpacks/spring-boot
[bp/watchexec]:https://github.com/paketo-buildpacks/watchexec

<!-- other references -->
[liberica]:https://bell-sw.com/
[composite buildpack]:{{< ref "docs/concepts/buildpacks#component-buildpacks" >}}
