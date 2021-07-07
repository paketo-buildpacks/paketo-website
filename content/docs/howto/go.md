---
title: "How to Build Go Apps with Paketo Buildpacks"
weight: 304
menu:
  main:
    parent: "howto"
    name: "Go"
aliases:
  - /docs/buildpacks/language-family-buildpacks/go
---

## Build a Sample Go Application
To build a sample app locally with this buildpack using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/go/mod
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/go/mod)
for how to run the app.

**NOTE: Though the example above uses the Paketo Base builder, this buildpack is
also compatible with the Paketo Full builder and Paketo Tiny builder.**

## Install a Specific Go Version
 
The Go CNB (Cloud Native Buildpack) allows you to specify a version of Go to
use during deployment. This version can be specified via the `BP_GO_VERSION`
environment variable or `go.mod`. When specifying a version of Go, you must
choose a version that is available within the buildpack. The supported versions
can be found
[here](https://github.com/paketo-buildpacks/go-dist/releases/latest).

Please note that setting the Go version through a buildpack.yml file will be
deprecated in Go Dist Buildpack v1.0.0.

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `BP_GO_VERSION`, `go.mod`.

Specifying a version of Go is not required. In the case that is not specified,
the buildpack will provide the default version, which can be seen in the
`buildpack.toml` file.

### Using BP_GO_VERSION

To configure the buildpack to use Go v1.14.6 when deploying your app, set the
following environment variable at build time, either directly (ex. `pack build
my-app --env BP_GO_VERSION=1.14.6`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
BP_GO_VERSION="1.14.6"
{{< /code/copyable >}}

### Deprecated: Using buildpack.yml
Specifying the Go version through buildpack.yml configuration will be
deprecated in Go Dist Buildpack v1.0.0. To migrate from using buildpack.yml
please set the` $BP_GO_VERSION` environment variable.

## Configure the `go build` Command

The `go build` command supports a number of flags that allow users to override
defaults for more control over build configurations. By default, the buildpack
sets the following build flags:

* `-buildmode=pie`
* `-mod=vendor` (if there is a go.mod file in the app source code)

### BP_GO_BUILD_FLAGS
To set custom values for your build flags or override the defaults, assign a
list of flags to the `BP_GO_BUILD_FLAGS` environment variable at build time, either directly (ex. `pack build
my-app --env BP_GO_BUILD_FLAGS="-buildmode=some-build-mode -tags=paketo,production"`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
[[ build.env ]]
  name = 'BP_GO_BUILD_FLAGS'
  value = '-buildmode=some-build-mode -tags=paketo,production'
{{< /code/copyable >}}

### BP_GO_BUILD_LDFLAGS
The Go CNB also allows users to configure the value of `-ldflags` for the `go build`
command by setting the `BP_GO_BUILD_LDFLAGS` environment variable at build time, either directly (ex. `pack build
my-app --env BP_GO_BUILD_LDFLAGS="-X main.variable=some-value"`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
[[ build.env ]]
  name = 'BP_GO_BUILD_LDFLAGS'
  value = '-X main.variable=some-value'
{{< /code/copyable >}}

### Deprecated: Using buildpack.yml
Specifying the Go Build flags through buildpack.yml configuration will be
deprecated in Go Build Buildpack v1.0.0. To migrate from using buildpack.yml
please set the `$BP_GO_BUILD_FLAGS` environment variable.

## Build Multiple Binaries In An App Image
The Go CNB allows users to specify multiple targets for `go build`. This will
result in multiples binaries being built.Targets must be a list of paths
relative to the root directory of the source code.

To set custom targets for your build assign a list of targets to the
`BP_GO_TARGETS` environment variable as shown below:

{{< code/copyable >}}
BP_GO_TARGETS=./some-target:./other-target
{{< /code/copyable >}}

### Deprecated: Using buildpack.yml
Specifying the Go Build targets through buildpack.yml configuration will be
deprecated in Go Build Buildpack v1.0.0. To migrate from using buildpack.yml
please set the `$BP_GO_TARGETS` environment variable.

## Configure Module Import Paths

If you are building a $GOPATH application that imports its own sub-packages,
you will need to specify the import paths for those sub-packages. The Go CNB
supports setting these import paths via the `$BP_GO_BUILD_IMPORT_PATH`
environment variable:

{{< code/copyable >}}
BP_GO_BUILD_IMPORT_PATH=example.com/some-app
{{< /code/copyable >}}

### Deprecated: Using buildpack.yml
Specifying the Go Build import path through buildpack.yml configuration will be
deprecated in Go Build Buildpack v1.0.0. To migrate from using buildpack.yml
please set the `$BP_GO_BUILD_IMPORT_PATH` environment variable.

## Keep Specific Files in the App Image

The Go CNB by defaults deletes the contents of your app root once it has
compiled your app in an effort to optimize the size the final image. However
sometimes there are static assets that you would like to appear in the final
image. To have these files or directories persist set the `BP_KEEP_FILES`
environment variable, which can be passed to `pack build`:
{{< code/copyable >}}
BP_KEEP_FILES=assets/*:public/*
{{< /code/copyable >}}

## Install a Custom CA Certificate
Go Buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates](https://paketo.io/docs/buildpacks/configuration/#ca-certificates)
section of our configuration docs.

## Override the Start Process Set by the Buildpack
Go Buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles](https://paketo.io/docs/buildpacks/configuration/#procfiles) section
of our configuration docs.

## Set Environment Variables for App Launch Time
Go Buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Add Custom Labels to the App Image
Go Buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels](https://paketo.io/docs/buildpacks/configuration/#applying-custom-labels)
section of our configuration docs.
