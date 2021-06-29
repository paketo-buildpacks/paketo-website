---
title: "HTTPD Buildpack"
weight: 303
menu:
  main:
    parent: "language-family-buildpacks"
---

The [HTTPD Paketo Buildpack](https://github.com/paketo-buildpacks/httpd)
supports the installation of the Apache HTTP Server binary distribution
onto the `$PATH` inside a container. This makes it available to subsequent
buildpacks.

To build a sample app locally with this CNB using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/httpd
pack build my-app --buildpack gcr.io/paketo-buildpacks/httpd \
  --builder paketobuildpacks/builder:full
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/httpd)
for how to run the app.

**NOTE: The Paketo Full builder is required because HTTPD relies on operating
system libraries only present in the Full builder.**

## Supported Dependencies

The HTTPD Paketo Buildpack supports several versions of Apache HTTP Server.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/httpd/releases).

## Specifying an HTTPD Version

The HTTPD CNB (Cloud Native Buildpack) allows you to specify a version of the
Apache HTTP Server to use during deployment. This version can be specified
through the `BP_HTTPD_VERSION` environment variable. When specifying a version
of the Apache HTTP Server, you must choose a version that is available within the
buildpack. The supported versions can be found [here](https://github.com/paketo-buildpacks/httpd/releases)

Specifying a version of `httpd` is not required. In the case that it is not
specified, the buildpack will provide the default version listed in the release
notes.

### Using BP_HTTPD_VERSION

To configure the buildpack to use HTTPD v2.4.46 when deploying your app, set the
following environment variable at build time, either directly (ex. `pack build
my-app --env BP_HTTPD_VERSION=2.4.*`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
BP_HTTPD_VERSION="2.4.46"
{{< /code/copyable >}}

### Deprecated: Using buildpack.yml

Specifying the HTTP Server version through `buildpack.yml` configuration will
be deprecated in Apache HTTP Server Buildpack v1.0.0. To migrate from using
`buildpack.yml` please set the `$BP_HTTPD_VERSION` environment variable.


## Configurations
The HTTPD buildpack supports two app configurations:

1. When an `httpd.conf` file **is present** in your app's source code, the
   buildpack will set up an Apache HTTP server with that config.

1. When the `httpd.conf` **is not present** in the app's source code, the
   buildpack simply provides the Apache HTTP Server dependency to subsequent
   buildpacks without actually setting up a server.
