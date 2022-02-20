---
title: "Java"
page_id: "getting-started-pack-java"
---

## Java
Let's use the `base` Paketo Builder and the **pack** CLI to build a Java app
as a runnable container image.

### Prerequisites
1. Install Docker by following this [guide][install-docker].
1. Install the pack CLI by following this [guide][install-pack].

### Build the App Image From Source Code
Clone the Paketo samples repository and navigate to the source code for the sample Java app.

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples \
&& cd samples/java/maven
{{< /code/copyable >}}

From the sample app directory, use the pack CLI to build an app image.

{{< code/copyable >}}
pack build paketo-demo-app --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
7 of 18 buildpacks participating
paketo-buildpacks/ca-certificates   2.3.2
paketo-buildpacks/bellsoft-liberica 8.2.0
paketo-buildpacks/maven             5.3.2
paketo-buildpacks/executable-jar    5.1.2
paketo-buildpacks/apache-tomcat     5.6.1
paketo-buildpacks/dist-zip          4.1.2
paketo-buildpacks/spring-boot       4.4.2
===> ANALYZING
Previous image with name "paketo-demo-app" not found
===> RESTORING
===> BUILDING

Paketo CA Certificates Buildpack 2.3.2
  https://github.com/paketo-buildpacks/ca-certificates
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_ca-certificates/helper/exec.d/ca-certificates-helper

Paketo BellSoft Liberica Buildpack 8.2.0
  https://github.com/paketo-buildpacks/bellsoft-liberica
  Build Configuration:
    $BP_JVM_VERSION              11              the Java version
  Launch Configuration:
    $BPL_JVM_HEAD_ROOM           0               the headroom in memory calculation
    $BPL_JVM_LOADED_CLASS_COUNT  35% of classes  the number of loaded classes in memory calculation
    $BPL_JVM_THREAD_COUNT        250             the number of threads in memory calculation
    $JAVA_TOOL_OPTIONS                           the JVM launch flags
  BellSoft Liberica JDK 11.0.12: Contributing to layer
    Downloading from https://github.com/bell-sw/Liberica/releases/download/11.0.12+7/bellsoft-jdk11.0.12+7-linux-amd64.tar.gz
    Verifying checksum
    Expanding to /layers/paketo-buildpacks_bellsoft-liberica/jdk
    Adding 129 container CA certificates to JVM truststore
    Writing env.build/JAVA_HOME.override
    Writing env.build/JDK_HOME.override
  BellSoft Liberica JRE 11.0.12: Contributing to layer
    Downloading from https://github.com/bell-sw/Liberica/releases/download/11.0.12+7/bellsoft-jre11.0.12+7-linux-amd64.tar.gz
    Verifying checksum
    Expanding to /layers/paketo-buildpacks_bellsoft-liberica/jre
    Adding 129 container CA certificates to JVM truststore
    Writing env.launch/BPI_APPLICATION_PATH.default
    Writing env.launch/BPI_JVM_CACERTS.default
    Writing env.launch/BPI_JVM_CLASS_COUNT.default
    Writing env.launch/BPI_JVM_SECURITY_PROVIDERS.default
    Writing env.launch/JAVA_HOME.default
    Writing env.launch/MALLOC_ARENA_MAX.default
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_bellsoft-liberica/helper/exec.d/active-processor-count
    Creating /layers/paketo-buildpacks_bellsoft-liberica/helper/exec.d/java-opts
    Creating /layers/paketo-buildpacks_bellsoft-liberica/helper/exec.d/link-local-dns
    Creating /layers/paketo-buildpacks_bellsoft-liberica/helper/exec.d/memory-calculator
    Creating /layers/paketo-buildpacks_bellsoft-liberica/helper/exec.d/openssl-certificate-loader
    Creating /layers/paketo-buildpacks_bellsoft-liberica/helper/exec.d/security-providers-configurer
    Creating /layers/paketo-buildpacks_bellsoft-liberica/helper/exec.d/security-providers-classpath-9
  JVMKill Agent 1.16.0: Contributing to layer
    Downloading from https://github.com/cloudfoundry/jvmkill/releases/download/v1.16.0.RELEASE/jvmkill-1.16.0-RELEASE.so
    Verifying checksum
    Copying to /layers/paketo-buildpacks_bellsoft-liberica/jvmkill
    Writing env.launch/JAVA_TOOL_OPTIONS.append
    Writing env.launch/JAVA_TOOL_OPTIONS.delim
  Java Security Properties: Contributing to layer
    Writing env.launch/JAVA_SECURITY_PROPERTIES.default
    Writing env.launch/JAVA_TOOL_OPTIONS.append
    Writing env.launch/JAVA_TOOL_OPTIONS.delim

Paketo Maven Buildpack 5.3.2
  https://github.com/paketo-buildpacks/maven
  Build Configuration:
    $BP_MAVEN_BUILD_ARGUMENTS  -Dmaven.test.skip=true package  the arguments to pass to Maven
    $BP_MAVEN_BUILT_ARTIFACT   target/*.[jw]ar                 the built application artifact explicitly.  Supersedes $BP_MAVEN_BUILT_MODULE
    $BP_MAVEN_BUILT_MODULE                                     the module to find application artifact in
    Creating cache directory /home/cnb/.m2
  Compiled Application: Contributing to layer
    Executing mvnw --batch-mode -Dmaven.test.skip=true package
[INFO] Scanning for projects...
[INFO] Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-parent/2.5.3/spring-boot-starter-parent-2.5.3.pom
[INFO] Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-parent/2.5.3/spring-boot-starter-parent-2.5.3.pom (8.6 kB at 19 kB/s)
[INFO] Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-dependencies/2.5.3/spring-boot-dependencies-2.5.3.pom
...
[INFO] Replacing main artifact with repackaged archive
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  01:32 min
[INFO] Finished at: 2021-08-12T18:22:25Z
[INFO] ------------------------------------------------------------------------
  Removing source code
Paketo Executable JAR Buildpack 5.1.2
  https://github.com/paketo-buildpacks/executable-jar
  Class Path: Contributing to layer
    Writing env/CLASSPATH.delim
    Writing env/CLASSPATH.prepend
  Process types:
    executable-jar: java org.springframework.boot.loader.JarLauncher (direct)
    task:           java org.springframework.boot.loader.JarLauncher (direct)
    web:            java org.springframework.boot.loader.JarLauncher (direct)

Paketo Spring Boot Buildpack 4.4.2
  https://github.com/paketo-buildpacks/spring-boot
  Creating slices from layers index
    dependencies
    spring-boot-loader
    snapshot-dependencies
    application
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_spring-boot/helper/exec.d/spring-cloud-bindings
  Spring Cloud Bindings 1.7.1: Contributing to layer
    Downloading from https://repo.spring.io/release/org/springframework/cloud/spring-cloud-bindings/1.7.1/spring-cloud-bindings-1.7.1.jar
    Verifying checksum
    Copying to /layers/paketo-buildpacks_spring-boot/spring-cloud-bindings
  Web Application Type: Contributing to layer
    Reactive web application detected
    Writing env.launch/BPL_JVM_THREAD_COUNT.default
  4 application slices
  Image labels:
    org.opencontainers.image.title
    org.opencontainers.image.version
    org.springframework.boot.version
===> EXPORTING
Adding layer 'paketo-buildpacks/ca-certificates:helper'
Adding layer 'paketo-buildpacks/bellsoft-liberica:helper'
Adding layer 'paketo-buildpacks/bellsoft-liberica:java-security-properties'
Adding layer 'paketo-buildpacks/bellsoft-liberica:jre'
Adding layer 'paketo-buildpacks/bellsoft-liberica:jvmkill'
Adding layer 'paketo-buildpacks/executable-jar:classpath'
Adding layer 'paketo-buildpacks/spring-boot:helper'
Adding layer 'paketo-buildpacks/spring-boot:spring-cloud-bindings'
Adding layer 'paketo-buildpacks/spring-boot:web-application-type'
Adding 5/5 app layer(s)
Adding layer 'launcher'
Adding layer 'config'
Adding layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Adding label 'org.opencontainers.image.title'
Adding label 'org.opencontainers.image.version'
Adding label 'org.springframework.boot.version'
Setting default process type 'web'
Saving paketo-demo-app...
*** Images (b18bb0f43aca):
      paketo-demo-app
Adding cache layer 'paketo-buildpacks/bellsoft-liberica:jdk'
Adding cache layer 'paketo-buildpacks/maven:application'
Adding cache layer 'paketo-buildpacks/maven:cache'
Successfully built image paketo-demo-app
{{< /code/output >}}

### Run the App
Let's start an instance of our app and interact with it.

Run the app image with Docker. It will receive incoming requests on `localhost:8080`.

{{< code/copyable >}}
docker run -d -p 8080:8080 -e PORT=8080 paketo-demo-app
{{< /code/copyable >}}

Wait a few moments for the app to start. Then, use `curl` to check the status of the app.

{{< code/copyable >}}
curl -s http://localhost:8080/actuator/health | jq .
{{< /code/copyable >}}

{{< code/output >}}
{
  "status": "UP"
}
{{< /code/output >}}

You've done it! As you can see, Paketo buildpacks do most of the hard work for you.

Check out more [sample apps](https://github.com/paketo-buildpacks/samples) that work with Paketo Buildpacks.

Keep reading to learn about Paketo Builders, the Cloud Native Buildpack API, and what Paketo Buildpacks are doing under the hood to make it easy to build your apps.

[install-docker]:https://docs.docker.com/get-docker/
[install-pack]:https://buildpacks.io/docs/install-pack/
