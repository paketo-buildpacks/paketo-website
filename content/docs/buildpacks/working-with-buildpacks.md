---
title: "Working With Paketo Buildpacks"
weight: 300
menu:
  main:
    parent: buildpacks
---

# Working with Paketo Buildpacks
- [Working with Paketo Buildpacks](#working-with-paketo-buildpacks)
  - [Types of Configuration](#types-of-configuration)
    - [Environment Variables](#environment-variables)
      - [Build](#build)
      - [Run](#run)
    - [buildpack.yml](#buildpackyml)
    - [Bindings](#bindings)
      - [Why bindings?](#why-bindings)
      - [What is a binding?](#what-is-a-binding)
      - [How to use bindings?](#how-to-use-bindings)
    - [Procfiles](#procfiles)
  - [Building Behind a Firewall](#building-behind-a-firewall)
    - [Proxy Configuration](#proxy-configuration)
    - [Dependency Mappings](#dependency-mappings)
  - [Running the App Image](#running-the-app-image)
    - [Providing Additional Arguments](#providing-additional-arguments)
    - [Executing a Custom Command](#executing-a-custom-command)
    - [Executing a Custom Command in the Buildpack-Provided Environment](#executing-a-custom-command-in-the-buildpack-provided-environment)
  - [About the Examples](#about-the-examples)

## Types of Configuration
Paketo buildpacks can be configured via the following mechanisms:

* [Environment Variables](#environment-variables) - used for generic configuration at both **build-time** and **runtime**.
* [buildpack.yml](#buildpackyml) - used for generic configuration at **build-time**.
* [Bindings](#bindings) - used for **secret** configuration at both **build-time** and **runtime**.
* [Procfiles](#procfiles) - used to provide custom **process types** at **build-time**.

### Environment Variables
#### Build
Users may configure the build by setting variables in the buildpack environment. The names of variables accepted by the Paketo buildpacks at build-time are either prefixed with `BP_` or have well-known conventional meanings outside of Paketo (e.g. `http_proxy`).

The following example uses an environment variable to configure the JVM version installed by the Java Buildpack.

```
pack build example/app --buildpack gcr.io/paketo-buildpacks/java -p samples/maven --env BP_JVM_VERSION=8
```

During the build process, a buildpack may invoke another tools that accepts configuration via the environment. Users may configure these tools as they would normally.

The example below configures the JVM memory settings for the JVM running Maven using `MAVEN_OPTS`.

```
cd java/maven
pack build example/java --buildpack gcr.io/paketo-buildpacks/java --env "MAVEN_OPTS=-Xms256m -Xmx512m"
```

#### Run
Users may configure runtime features of the app image by setting environment variables in the app container.  The names of variables accepted by buildpack-provided runtime components (e.g. profiles scripts, processes types) are prefixed with `BPL_` or have well-known conventional meanings outside of Paketo (e.g `JAVA_TOOL_OPTIONS`).

The following example uses `JAVA_TOOL_OPTIONS` to set the server port of the sample application:
{{< code/copyable >}}
docker run --rm --publish 8082:8082 --env "JAVA_TOOL_OPTIONS=-Dserver.port=8082" example/app
curl -s http://localhost:8082/actuator/health
{{< /code/copyable >}}

Programs invoked at startup, including the application will accept environment as they would normally.

### buildpack.yml

Many Paketo buildpacks accept configuration from a `buildpack.yml` file if one is present at the root of the application directory.

The following example uses a `buildpack.yml` file to configure the NodeJS version installed by the NodeJS Buildpack.

In the `nodejs/yarn` directory in the samples repo, write the following contents to a file named `buildpack.yml`
```
nodejs:
  version: 12.12.0
```
Next, execute the build as normal.
```
pack build example/nodejs --buildpack gcr.io/paketo-buildpacks/nodejs
```

### Bindings
#### Why bindings?
Some Paketo Buildpacks and components installed by the Paketo Buildpacks accept credentials and other secrets using bindings at build and runtime. Commonly, bindings provide the location and credentials needed to connect to an external services.

In addition, some components installed by the Paketo Buildpacks use bindings to accept typed secrets at runtime. For example, the Spring Boot Buildpack will install [Spring Cloud Bindings](https://github.com/spring-cloud/spring-cloud-bindings) which is capable of auto-configuring Spring Boot application configuration properties to connect the applicaiton to a variety of external services.

 Some examples of external services one might bind at build-time include:
 * Private artifact repositories.
 * SaaS security scanning tools.

For example, the Maven buildpack accepts the location and credentials need to connect to a private Maven repository in a binding.

 Some examples of external services one might bind at runtime include:
  * APM servers.
  * Data Services.
  * OAuth2 providers.

For example, the Spring Boot Buildpack will install [Spring Cloud Bindings](https://github.com/spring-cloud/spring-cloud-bindings) which is capable of auto-configuring Spring Boot application configuration properties to connect the applicaiton to a variety of external services, when a binding is provided at runtime.

#### What is a binding?
A Binding contains:
1. A **name**. Indentifies a particular binding. The name typically does not affect build or runtime behavior but may be uesd to reference a specific binding in output such as log messages.
1. A **type** or **kind**. Indicates what type of credentials the binding contains. For example, a binding of type `ApplicationInsights` contains the credentials needed to connect to Azure Application Insights.
2. An _optional_ **provider**. Indicates the source of the binding. For example, in a PaaS context, a specific service broker might provide the binding.
3. key-value pairs. These contain the configuration data. For example, an `ApplicationInsights` binding may contain a key-value pair with key `INSTRUMENTATIONKEY`.

Bindings must be presented to buildpacks as directories (typically volume mounted) on the container filesystem. The name of the directory provides the name of the binding. The contents of a binding can be provided using one of two specifications.
*  [Service Binding Specification for Kubernetes](https://github.com/k8s-service-bindings/spec). This specification should be preferred over the CNB Bindings Specification when supported by the platform.
*  [Cloud Native Buildpacks Bindings Specification](https://github.com/buildpacks/spec/blob/main/extensions/bindings.md). The original buildpacks bindings specification; this specification is en route to [deprecation](https://github.com/buildpacks/rfcs/blob/main/text/0055-deprecate-service-bindings.md)

Paketo Buildpacks will look for bindings in the `/platform/bindings` directories at build-time and in `$SERVICE_BINDING_ROOT` or `$CNB_BINDINGS` or at runtime.

**Example:** Maven Settings

The Java Buildpack accepts a binding with `type` equal to `maven` containing a key named `settings.xml` containing [Maven settings](http://maven.apache.org/settings.html).

In the build container the maven buildpack will use maven settings `settings.xml` if it finds either 
```
/platform
└── bindings
    └── <name>
        ├── settings.xml
        └── type
```
or
```
/platform
└── bindings
    └──<name>
        └── metadata
        |   └── kind
        └── secret
            └── settings.xml
```
on the filesystem, where either the `type` or `kind` file contains the string `maven`.


#### How to use bindings?
The workflow for creating a binding and providing it to a build will depend on the chosen platform. For example, `pack` users should use the `--volume` flag to mount a binding directory into the build or app containers. Users of the `kpack` platform should store key value pairs in a Kubernetes Secret and provide that secret and associated metadata to an Image as described in the [kpack documentation](https://github.com/pivotal/kpack/blob/master/docs/servicebindings.md#service-bindings).


**Example:**  Providing a Binding to `pack build`

Given a directory containing a build-time binding, `pack` users can provide this binding to a Paketo buildpack using the `--volume` flag.
```
pack build --volume <absolute-path-to-binding>:/platform/bindings/<binding-name> <image-name>
```

**Example:**  Providing a Binding to `docker run`

Given a directory containing a runtime binding, `docker` users can provide the binding to the app image using the `--volume` and `--env` flags
```
pack build --env SERVICE_BINDING_ROOT=/bindings --volume <absolute-path-to-binding>:/bindings/<binding-name> <image-name>
```

### Procfiles
Paketo users may override buildpack-provided types or augment the app-image with additional process types using a `Procfile`.  `Procfile`s are only accepted by composite buildpacks containing the [Paketo Procfile Buildpack](https://github.com/paketo-buildpacks/procfile). The Procfile Buildpack will search for a file named `Procfile` at the root of the application. `Procfiles` should adhere to the following schema:
```
<type>: <command>
```

**Example**: A Hello World Procfile
The following adds a process with `type` equal to `hello` and makes its the default process.
```
cd examples/maven
echo "hello: echo hello world" > Procfile
pack build examples/maven --default-process hello
docker run examples/maven # should print "hello world"
```

**Note**: A `Procfile` cannot currently define `direct=true` process.

## Building Behind a Firewall

### Proxy Configuration
Paketo Buildpacks can be configured to route traffic through a proxy using the `http_proxy`, `https_proxy`, and `no_proxy` environment variables. `pack` will set these environment variables in the build container if they are set in the host environment.

### Dependency Mappings
Paketo Buildpacks may download dependencies from the internet. For example, the Java Buildpack with download the BellSoft Liberica JRE will from the Liberica [github releases](https://github.com/bell-sw/Liberica/releases) by default.

If a dependency URI is inaccessible from the build environment, a [binding](#bindings) can be used to map a new URI to a given dependency. This allows organizations to upload a copies of vetted dependencies to an accessible location and provide developers and CI/CD pipelines with configuration pointing the buildpack at the accessible dependencies.

The URI mappings can be configured with one or more bindings of `type` `dependency-mapping`. Each key value pair in the binding should map the `sha256` of a dependency to a URI. Information about the dependencies a buildpack may download (including the `sha256` and the current default `uri`) can be found in the `buildpack.toml` of each component buildpack.

**Example** Mapping the JRE to an internal URI

For example, to make the Bellsoft Liberica JRE dependency accessible available to builds in an environment where Github is inaccessible, an operator should:
1. Find the `sha256` and default `uri` for the desired dependency in [buildpack.toml](https://github.com/paketo-buildpacks/bellsoft-liberica/blob/main/buildpack.toml) of the `paketo-buildpacks/bellsoft-liberica` buildpack. Example values:
    * `sha256`: `b4cb31162ff6d7926dd09e21551fa745fa3ae1758c25148b48dadcf78ab0c24c`
    * `uri`: `https://github.com/bell-sw/Liberica/releases/download/11.0.8+10/bellsoft-jre11.0.8+10-linux-amd64.tar.gz`
2. Download the dependency from the `uri` and upload it to a location on the internal network that is accessible during the build.
3. Create a binding with:
   * `type` equal to `dependency-mapping`
   * A key/value pair where the key is equal to the `sha256` of the dependency and the value is equal to the new URI.
4. Configure all builds with this binding.

## Running the App Image

Images created by the Java buildpack can be run just like any OCI image.

Execute the following commands to start a container using the `example/app` image (built with any of the example commands above).
{{< code/copyable >}}
docker run  --rm --publish 8080:8080 example/app
curl -s http://localhost:8080/actuator/health
{{< /code/copyable >}}

### Providing Additional Arguments

Additional arguments can be provided to the application using the container `CMD`.

Execute the following command passes an additional argument to application start command, setting the port to `8081`.
{{< code/copyable >}}
docker run --rm --publish 8081:8081 example/app --server.port=8081
curl -s http://localhost:8081/actuator/health
{{< /code/copyable >}}

In Kubernetes set `CMD` using the `args` field on the [container](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#container-v1-core) resource.

### Executing a Custom Command

To override the buildpack-provided start command with a custom command, set the container `ENTRYPOINT`

The following command runs Bash interactively:
{{< code/copyable >}}
docker run --rm --entrypoint bash example/app
{{< /code/copyable >}}

### Executing a Custom Command in the Buildpack-Provided Environment

Every CNB image contains an executable called the `launcher` which can be used to execute a custom command in an environment containing buildpack-provided environment variables. The `launcher` will execute any buildpack provided profile scripts before running to provided command, in order to set environment variables with values that should be calculated dynamically at runtime.

To run a custom start command in the buildpack-provided environment set the `ENTRYPOINT` to `launcher` and provide the command using the container `CMD`.

The following command will print value of `$JAVA_TOOL_OPTIONS` set by the buildpack:
{{< code/copyable >}}
docker run --rm --entrypoint launcher example/app echo 'JAVA_TOOL_OPTIONS: $JAVA_TOOL_OPTIONS'
{{< /code/copyable >}}

Each argument provided to the launcher will be evaluated by the shell prior to execution and the original tokenization will be preserved. Note that, in the example above `'JAVA_TOOL_OPTIONS: $JAVA_TOOL_OPTIONS'` is single quoted so that `$JAVA_TOOL_OPTIONS` is evaluated in the container, rather than by the host shell.


## About the Examples
Examples in these docs will use sample applications from https://github.com/paketo-buildpacks/samples. All Examples assume that the root of this repostitory is the working directory.

To pull the example applications:
{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples
{{< /code/copyable >}}

The [pack CLI](https://github.com/buildpacks/pack) is used throughout the examples for the ease of getting started and the explicitness of it's interface. `pack` is just one of several Cloud Native Buildpacks [platforms](https://buildpacks.io/docs/concepts/components/platform/) than can execute builds with Paketo buildpacks. For example, Spring Boot developers may want to explore the Spring Boot Maven Plugin or Spring Boot Gradle Plugin.
