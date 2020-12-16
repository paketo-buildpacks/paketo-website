---
title: "HTTPD Buildpack"
weight: 303
menu:
  main:
    parent: "language-family-buildpacks"
---

# HTTPD Buildpack

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
Apache HTTP Server to use during deployment. This version can be specified in a
number of ways, including through `buildpack.yml`. When specifying a version of
the Apache HTTP Server, you must choose a version that is available within the
buildpack.

Specifying a version of `httpd` is not required. In the case that it is not
specified, the buildpack will provide the default version listed in the release
notes.

### Using buildpack.yml

To configure the buildpack to use Apache HTTP Server v2.4.43 when deploying
your app, for example, include the values below in your `buildpack.yml` file:

{{< code/copyable >}}
httpd:
  # this allows you to specify a version constraint for the httpd dependency
  # any valid semver constaints (e.g. 2.* and 2.4.*) are also acceptable
  #
  version: 2.4.43
{{< /code/copyable >}}

## Configurations
The HTTPD buildpack supports two app configurations:

1. When an `httpd.conf` file **is present** in your app's source code, the
   buildpack will set up an Apache HTTP server with that config.

1. When the `httpd.conf` **is not present** in the app's source code, the
   buildpack simply provides the Apache HTTP Server dependency to subsequent
   buildpacks without actually setting up a server.
