---
title: "Getting Started"
weight: 100
menu: "main"
aliases:
  - /docs/
  - /docs/buildpacks/language-family-buildpacks/
toc: false
---

These guides get you started with Paketo Buildpacks using Paketo [**Builders**][builders], the **pack** CLI, and **Docker**.

### [Java][java-guide]
### [Node.js][node-guide]
### [.NET Core][dotnet-guide]
### [Python][python-guide]

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


## Node.js
Let's use the `base` Paketo Builder and the **pack** CLI to build a Node.js app
as a runnable container image. 

### Prerequisites
1. Install Docker by following this [guide][install-docker].
1. Install the pack CLI by following this [guide][install-pack].

### Build the App Image From Source Code
Clone the Paketo samples repository and navigate to the source code for the sample Node.js app.

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples \
&& cd samples/demo-apps/app-source
{{< /code/copyable >}}

From the sample app directory, use the pack CLI to build an app image.

{{< code/copyable >}}
pack build paketo-demo-app --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
4 of 8 buildpacks participating
paketo-buildpacks/ca-certificates 2.3.2
paketo-buildpacks/node-engine     0.6.2
paketo-buildpacks/npm-install     0.4.0
paketo-buildpacks/npm-start       0.3.0
===> ANALYZING
Previous image with name "paketo-demo-app" not found
===> RESTORING
===> BUILDING

Paketo CA Certificates Buildpack 2.3.2
  https://github.com/paketo-buildpacks/ca-certificates
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_ca-certificates/helper/exec.d/ca-certificates-helper
Paketo Node Engine Buildpack 0.6.2
  Resolving Node Engine version
    Candidate version sources (in priority order):
      package.json -> ">10"
      <unknown>    -> ""

    Selected Node Engine version (using package.json): 16.6.2

  Executing build process
    Installing Node Engine 16.6.2
      Completed in 4.372s

  Configuring build environment
    NODE_ENV     -> "production"
    NODE_HOME    -> "/layers/paketo-buildpacks_node-engine/node"
    NODE_VERBOSE -> "false"

  Configuring launch environment
    NODE_ENV     -> "production"
    NODE_HOME    -> "/layers/paketo-buildpacks_node-engine/node"
    NODE_VERBOSE -> "false"

    Writing profile.d/0_memory_available.sh
      Calculates available memory based on container limits at launch time.
      Made available in the MEMORY_AVAILABLE environment variable.

Paketo NPM Install Buildpack 0.4.0
  Resolving installation process
    Process inputs:
      node_modules      -> "Not found"
      npm-cache         -> "Not found"
      package-lock.json -> "Not found"

    Selected NPM build process: 'npm install'

  Executing build process
    Running 'npm install --unsafe-perm --cache /layers/paketo-buildpacks_npm-install/npm-cache'
      Completed in 2.519s

  Configuring launch environment
    NPM_CONFIG_LOGLEVEL -> "error"

  Configuring environment shared by build and launch
    PATH -> "$PATH:/layers/paketo-buildpacks_npm-install/modules/node_modules/.bin"


Paketo NPM Start Buildpack 0.3.0
  Assigning launch processes
    web: node server.js

===> EXPORTING
Adding layer 'paketo-buildpacks/ca-certificates:helper'
Adding layer 'paketo-buildpacks/node-engine:node'
Adding layer 'paketo-buildpacks/npm-install:modules'
Adding layer 'paketo-buildpacks/npm-install:npm-cache'
Adding 1/1 app layer(s)
Adding layer 'launcher'
Adding layer 'config'
Adding layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
Saving paketo-demo-app...
*** Images (1a770ae9a065):
      paketo-demo-app
Reusing cache layer 'paketo-buildpacks/node-engine:node'
Reusing cache layer 'paketo-buildpacks/npm-install:modules'
Adding cache layer 'paketo-buildpacks/npm-install:npm-cache'
Successfully built image paketo-demo-app
{{< /code/output >}}

Once the build finishes, you'll see that the resulting image is on your Docker daemon.

### Run the App
Let's start an instance of our app and interact with it.

Run the app image with Docker. It will receive incoming requests on `localhost:8080`.

{{< code/copyable >}}
docker run -d -p 8080:8080 -e PORT=8080 paketo-demo-app
{{< /code/copyable >}}

Wait a few moments for the app to start. Then, use `curl` to make a request.

{{< code/copyable >}}
curl http://localhost:8080/greeting
{{< /code/copyable >}}

{{< code/output >}}
Hello from your application image
{{< /code/output >}}

You've done it! As you can see, Paketo buildpacks do most of the hard work for you.

Check out more [sample apps](https://github.com/paketo-buildpacks/samples) that work with Paketo Buildpacks.

Keep reading to learn about Paketo Builders, the Cloud Native Buildpack API, and what Paketo Buildpacks are doing under the hood to make it easy to build your apps.

## .NET Core

Let's use the `base` Paketo Builder and the **pack** CLI to build an ASP.NET app
as a runnable container image. 
### Prerequisites
1. Install Docker by following this [guide][install-docker].
1. Install the pack CLI by following this [guide][install-pack].

### Build the App Image From Source Code
Clone the Paketo samples repository and navigate to the source code for the sample ASP.NET app.

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples \
&& cd samples/dotnet-core/aspnet
{{< /code/copyable >}}

From the sample app directory, use the pack CLI to build an app image.

{{< code/copyable >}}
pack build paketo-demo-app --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
7 of 11 buildpacks participating
paketo-buildpacks/ca-certificates     2.3.2
paketo-buildpacks/dotnet-core-runtime 0.1.12
paketo-buildpacks/dotnet-core-aspnet  0.1.12
paketo-buildpacks/dotnet-core-sdk     0.1.10
paketo-buildpacks/icu                 0.0.102
paketo-buildpacks/dotnet-publish      0.3.0
paketo-buildpacks/dotnet-execute      0.4.0
===> ANALYZING
Previous image with name "paketo-demo-app" not found
===> RESTORING
===> BUILDING

Paketo CA Certificates Buildpack 2.3.2
  https://github.com/paketo-buildpacks/ca-certificates
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_ca-certificates/helper/exec.d/ca-certificates-helper
Paketo .NET Core Runtime Buildpack 0.1.12
  Resolving Dotnet Core Runtime version
    Candidate version sources (in priority order):
      aspnet.csproj -> "3.1.0"
      <unknown>     -> ""

    No exact version match found; attempting version roll-forward

    Selected dotnet-runtime version (using aspnet.csproj): 3.1.16

  Executing build process
    Installing Dotnet Core Runtime 3.1.16
      Completed in 7.304s

  Configuring environment for build and launch
    DOTNET_ROOT -> "/workspace/.dotnet_root"

  Configuring environment for build
    RUNTIME_VERSION -> "3.1.16"

Paketo ASP.NET Core Buildpack 0.1.12
  Resolving Dotnet Core ASPNet version
    Candidate version sources (in priority order):
      RUNTIME_VERSION -> "3.1.16"
      aspnet.csproj   -> "3.1.0"
      <unknown>       -> ""

    Selected dotnet-aspnetcore version (using RUNTIME_VERSION): 3.1.16

  Executing build process
    Installing Dotnet Core ASPNet 3.1.16
      Completed in 2.582s

  Configuring environment
    DOTNET_ROOT -> "/workspace/.dotnet_root"

Paketo .NET Core SDK Buildpack 0.1.10
  Resolving .NET Core SDK version
    Candidate version sources (in priority order):
      RUNTIME_VERSION -> "3.1.410"
      <unknown>       -> "*"
      aspnet.csproj   -> "3.1.*"

    Selected .NET Core SDK version (using RUNTIME_VERSION): 3.1.410

  Executing build process
    Installing .NET Core SDK 3.1.410
      Completed in 14.08s

  Configuring environment
    DOTNET_ROOT -> "/workspace/.dotnet_root"
    PATH        -> "/workspace/.dotnet_root:$PATH"

Paketo ICU Buildpack 0.0.102
  Executing build process
    Installing ICU
      Completed in 2.56s

Paketo .NET Publish Buildpack 0.3.0
  Executing build process
    Running 'dotnet publish /workspace --configuration Release --runtime ubuntu.18.04-x64 --self-contained false --output /tmp/dotnet-publish-output295991778'
      Completed in 5.2121426s

  Removing source code

Paketo .NET Execute Buildpack 0.4.0
  Assigning launch processes
    web: /workspace/aspnet --urls http://0.0.0.0:${PORT:-8080}

===> EXPORTING
Adding layer 'paketo-buildpacks/ca-certificates:helper'
Adding layer 'paketo-buildpacks/dotnet-core-runtime:dotnet-core-runtime'
Adding layer 'paketo-buildpacks/dotnet-core-aspnet:dotnet-core-aspnet'
Adding layer 'paketo-buildpacks/dotnet-core-sdk:dotnet-env-var'
Adding layer 'paketo-buildpacks/icu:icu'
Adding 1/1 app layer(s)
Adding layer 'launcher'
Adding layer 'config'
Adding layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
Saving paketo-demo-app...
*** Images (4c1b1f739e63):
      paketo-demo-app
Adding cache layer 'paketo-buildpacks/dotnet-core-runtime:dotnet-core-runtime'
Adding cache layer 'paketo-buildpacks/dotnet-core-aspnet:dotnet-core-aspnet'
Adding cache layer 'paketo-buildpacks/dotnet-core-sdk:dotnet-core-sdk'
Adding cache layer 'paketo-buildpacks/icu:icu'
Successfully built image paketo-demo-app
{{< /code/output >}}

Once the build finishes, you'll see that the resulting image is on your Docker daemon.

### Run the App
Let's start an instance of our app and interact with it.

Run the app image with Docker. It will receive incoming requests on `localhost:8080`.

{{< code/copyable >}}
docker run -d -p 8080:8080 -e PORT=8080 paketo-demo-app
{{< /code/copyable >}}

Wait a few moments for the app to start. Then, use `curl` to make a request.

{{< code/copyable >}}
curl http://localhost:8080
{{< /code/copyable >}}

{{< code/output >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Paketo Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://paketo.io/images/paketo-logo-full-color.png"></img>
  </body>
</html>%
{{< /code/output >}}

You can also visit `http://localhost:8080` with your browser to see the app's homepage.

You've done it! As you can see, Paketo buildpacks do most of the hard work for you.

Check out more [sample apps](https://github.com/paketo-buildpacks/samples) that work with Paketo Buildpacks.

Keep reading to learn about Paketo Builders, the Cloud Native Buildpack API, and what Paketo Buildpacks are doing under the hood to make it easy to build your apps.

## Python
Let's use the `base` Paketo Builder and the **pack** CLI to build a Python app
as a runnable container image.

### Prerequisites
1. Install Docker by following this [guide][install-docker].
1. Install the pack CLI by following this [guide][install-pack].

### Build the App Image From Source Code
Clone the Paketo samples repository and navigate to the source code for the sample Python app.

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples \
&& cd samples/python/pipenv
{{< /code/copyable >}}

From the sample app directory, use the pack CLI to build an app image.

{{< code/copyable >}}
pack build paketo-demo-app --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
7 of 9 buildpacks participating
paketo-buildpacks/ca-certificates 2.4.0
paketo-buildpacks/cpython         0.7.2
paketo-buildpacks/pip             0.5.1
paketo-buildpacks/pipenv          0.2.1
paketo-buildpacks/pipenv-install  0.2.3
paketo-buildpacks/python-start    0.6.2
paketo-buildpacks/procfile        4.3.0
===> ANALYZING
Previous image with name "paketo-demo-app" not found
===> RESTORING
===> BUILDING

Paketo CA Certificates Buildpack 2.4.0
  https://github.com/paketo-buildpacks/ca-certificates
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_ca-certificates/helper/exec.d/ca-certificates-helper
Paketo CPython Buildpack 0.7.2
  Resolving CPython version
    Candidate version sources (in priority order):
                -> ""
      <unknown> -> ""

    Selected CPython version (using ): 3.8.12

  Executing build process
    Installing CPython 3.8.12
      Completed in 2.884s

  Configuring environment
    PYTHONPATH -> "/layers/paketo-buildpacks_cpython/cpython"

Paketo Pip Buildpack 0.5.1
  Resolving Pip version
    Candidate version sources (in priority order):
       -> ""

    Selected Pip version (using ): 21.2.4

  Executing build process
    Installing Pip 21.2.4
      Completed in 7.743s

  Configuring environment
    PYTHONPATH -> "/layers/paketo-buildpacks_pip/pip/lib/python3.8/site-packages:$PYTHONPATH"

Paketo Pipenv Buildpack 0.2.1
  Resolving Pipenv version
    Candidate version sources (in priority order):
       -> ""

    Selected Pipenv version (using ): 2021.5.29

  Executing build process
    Installing Pipenv 2021.5.29
      Completed in 5.895s

  Configuring environment
    PYTHONPATH -> "/layers/paketo-buildpacks_pipenv/pipenv/lib/python3.8/site-packages:$PYTHONPATH"

Paketo Pipenv Install Buildpack 0.2.3
  Executing build process
    Running 'pipenv install --deploy'
    Running 'pipenv clean'
  Configuring environment
    PATH           -> "/layers/paketo-buildpacks_pipenv-install/packages/workspace-dqq3IVyd/bin:$PATH"
    PYTHONUSERBASE -> "/layers/paketo-buildpacks_pipenv-install/packages/workspace-dqq3IVyd"

      Completed in 5.511s

Paketo Python Start Buildpack 0.6.2
  Assigning launch process
    web: python

Paketo Procfile Buildpack 4.3.0
  https://github.com/paketo-buildpacks/procfile
  Process types:
    web: gunicorn server:app
===> EXPORTING
Adding layer 'paketo-buildpacks/ca-certificates:helper'
Adding layer 'paketo-buildpacks/cpython:cpython'
Adding layer 'paketo-buildpacks/pipenv-install:packages'
Adding 1/1 app layer(s)
Adding layer 'launcher'
Adding layer 'config'
Adding layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
Saving paketo-demo-app...
*** Images (2aa4026c4df4):
      paketo-demo-app
Adding cache layer 'paketo-buildpacks/cpython:cpython'
Adding cache layer 'paketo-buildpacks/pip:pip'
Adding cache layer 'paketo-buildpacks/pipenv:pipenv'
Adding cache layer 'paketo-buildpacks/pipenv-install:cache'
Adding cache layer 'paketo-buildpacks/pipenv-install:packages'
Successfully built image 'paketo-demo-app'
{{< /code/output >}}

Once the build finishes, you'll see that the resulting image is on your Docker daemon.

### Run the App
Let's start an instance of our app and interact with it.

Run the app image with Docker. It will receive incoming requests on `localhost:8080`.

{{< code/copyable >}}
docker run -d -p 8080:8080 -e PORT=8080 paketo-demo-app
{{< /code/copyable >}}

Wait a few moments for the app to start. Then, use `curl` to make a request.

{{< code/copyable >}}
curl http://localhost:8080/
{{< /code/copyable >}}

{{< code/output >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Paketo Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://paketo.io/images/paketo-logo-full-color.png"></img>
  </body>
</html>
{{< /code/output >}}

You can also visit `http://localhost:8080` with your browser to see the app's homepage.

You've done it! As you can see, Paketo buildpacks do most of the hard work for you.

Check out more [sample apps](https://github.com/paketo-buildpacks/samples) that work with Paketo Buildpacks.

Keep reading to learn about Paketo Builders, the Cloud Native Buildpack API, and what Paketo Buildpacks are doing under the hood to make it easy to build your apps.

<!-- References -->
[java-guide]:{{< relref "#java" >}}
[node-guide]:{{< relref "#nodejs" >}}
[dotnet-guide]:{{< relref "#net-core" >}}
[python-guide]:{{< relref "#python" >}}
[builders]:{{< ref "docs/concepts/builders" >}}

[install-docker]:https://docs.docker.com/get-docker/
[install-pack]:https://buildpacks.io/docs/install-pack/
