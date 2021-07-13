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

{{% howto_exec_summary bp_name="Paketo Go Buildpack" bp_repo="https://github.com/paketo-buildpacks/go" reference_docs_path="/docs/reference/go-reference" %}}


## Build a Sample Go Application

You can quickly build a sample Go app into a runnable OCI image on your
local machine with Paketo buildpacks.

*Prerequisites*
- docker CLI
- pack CLI

1. Clone the Paketo samples and navigate to a Go sample app.
{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/go/mod
{{< /code/copyable >}}

1. Use the pack CLI with the Paketo Go Buildpack to build the sample app.
{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

1. Run the app using instructions found in its `README`.

*Note: Though the example above uses the Paketo Base Builder, this buildpack is
also compatible with the Paketo Full Builder and Paketo Tiny Builder.*

## Override the Automatically Detected Go Version

The Paketo Go buildpack will attempt to automatically detect the correct version
of Go to install based on the version in your app's `go.mod`. It is possible to
override this version by setting the `BP_GO_VERSION` environment variable at build time.

`BP_GO_VERSION` can be set to any valid semver version or version constraint (e.g. `1.14.1`, `1.14.*`).
For the versions available in the buildpack, see the buildpack's [releases page](https://github.com/paketo-buildpacks/go-dist/releases/latest). Specifying a version of Go is not required. In the case that is not specified,
the buildpack will provide the default version, which can be seen in the
`buildpack.toml` file.

### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_GO_VERSION` at build time with the `--env` flag.
{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --env BP_GO_VERSION="1.14.1"
{{< /code/copyable >}}

### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml](https://buildpacks.io/docs/app-developer-guide/using-project-descriptor) file in your app directory that sets `BP_GO_VERSION` at build time.
{{< code/copyable >}}
# project.toml
[ build ]
  [[ build.env ]]
    name="BP_GO_VERSION"
    value="1.41.1"
{{< /code/copyable >}}


The pack CLI will automatically detect the project file at build time.

### Deprecated: With pack and a `buildpack.yml`
Please note that setting the Go version through a buildpack.yml file will be
deprecated in Go Dist Buildpack v1.0.0.

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
