---
title: "How to Build HTTPD Apps with Paketo Buildpacks"
weight: 308
menu:
  main:
    parent: "howto"
    name: "HTTPD"
aliases:
  - /docs/buildpacks/language-family-buildpacks/httpd/
---

## Build a sample app
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

## Install a Specific HTTPD Version

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

## Start an HTTPD Server at App Launch Time

Include an `httpd.conf` file in your application's source code. The HTTPD Paketo buildpack
will install the Apache HTTP Server binary _and_ configure it to start when the app image
launches.
