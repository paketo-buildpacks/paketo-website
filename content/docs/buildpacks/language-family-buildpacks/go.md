---
title: "Go Buildpack"
weight: 302
menu:
  main:
    parent: "language-family-buildpacks"
---

# Go Buildpack

The [Go Paketo Buildpack](https://github.com/paketo-buildpacks/go) supports several popular
configurations for Go apps.

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

## Supported Dependencies

The Go Paketo Buildpack supports several versions of Go.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/go/releases).

## Specifying a Go Version

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

## Configuring Build Flags

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

## Configuring Targets

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

## Configuring Import Paths

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

## Configuring File Removal

The Go CNB by defaults deletes the contents of your app root once it has
compiled your app in an effort to optimize the size the final image. However
sometimes there are static assets that you would like to appear in the final
image. To have these files or directories persist set the `BP_KEEP_FILES`
environment variable, which can be passed to `pack build`:
{{< code/copyable >}}
BP_KEEP_FILES=assets/*:public/*
{{< /code/copyable >}}

## Package Management Options

With the Go CNB, there are three options for package management depending on
your application:
* The built-in [Go modules](https://github.com/golang/go/wiki/Modules) feature,
* The [Dep](https://github.com/golang/dep) tool
* No package manager

Support for each of these package managers is mutually-exclusive. You can find
specific information for each option below.

### Package Management with Go Modules

Many Go apps require third-party libraries to perform common tasks and
behaviors. Go modules are a built-in option for managing these third-party
dependencies that the Go CNB fully supports. Including a `go.mod` file in your
app source code instructs the buildpack to vendor your dependencies using Go
modules. During the build phase, the `go-mod-vendor`
[buildpack](https://github.com/paketo-buildpacks/go-mod-vendor) checks to see
if the application requires any external modules and if it does, runs the `go
mod vendor` command for your app. The resulting `vendor` directory will exist
in the app's root directory and will contain all the packages needed to build
your Go app.


### Package Management with Dep

Dep is an alternative option to Go Modules for package management in Go apps.
Including a `Gopkg.toml` file (more information about this
[here](https://golang.github.io/dep/docs/Gopkg.toml.html)) in your app source
code instructs the buildpack to download the `dep` package, and then vendor
your dependencies using it. There may be an optional `Gopkg.lock` file that
outlines specific versions of the dependencies to be packaged. During its build
phase, the `dep-ensure`
[buildpack](https://github.com/paketo-buildpacks/dep-ensure) runs the `dep
ensure` command for your app. The resulting `vendor` directory will exist in
the app's root directory and will contain all the packages needed to build your
Go app.

### No Package Management

The Go CNB also supports both self-vendored apps and simpler apps that do not
require third-party packages. In this case there is no vendoring step, and the
`go build` command is run on the app source code as it is provided.

## Buildpack-Set Environment Variables

The Go CNB sets a few environment variables during the `build` and `launch`
phases of the app lifecycle. The sections below describe each environment
variable and its impact on your app.

### `GOPATH`

The `GOPATH` environment variable tells Go where to look for artifacts such as
source code and binaries. The Go CNB takes care of setting the `GOPATH` for
you, depending on your app and which package management option your app uses.

* Set by: `go-mod-vendor`, `dep-ensure` and `go-build`
* Phases: `build`
* Value: path to Go workspace

#### Go Modules

When using Go modules, the Go CNB sets the `GOPATH` to a cached module layer in
the image so that between builds of the app, the dependencies don't have to be
redownloaded. Essentially, the `GOPATH` is being used to tell the `go mod
vendor` command where to look for dependencies. It's worth noting that in this
case, the `GOPATH` isn't persisted beyond vendoring the dependencies and gets
overwritten by a subsequent buildpack.

#### Dep

When using the Dep tool, the Go CNB sets the `GOPATH` to a temporary directory.
The app source code gets copied into the `GOPATH` location so that the `dep
ensure` command knows where to look for the source code, as well as where to
put the `vendor` directory. The `vendor` directory that is created is then
copied to the original source code directory. The `GOPATH` in this case is used
to run `dep ensure`, but does not persist beyond that step.

#### Build

The `go-build` buildpack participates in the Go CNB in every case, regardless
of which package management option is used. The `GOPATH` is set to a temporary
directory which includes the app source code and local sub-packages. The
`GOPATH` is utilized in running `go build` to compile your app.

### `GOCACHE`

The `GOCACHE` variable specifies where build outputs are stored for reuse in
subsequent builds. It gets set to a cached layer in  the image by the
`go-build` buildpack, so that it is persisted between builds.

* Set by: `go-build`
* Phases: `build`
* Value: Go Cache layer path

### `DEPCACHEDIR`

`DEPCACHEDIR` specifies where upstream dependency source code is stored for use
by the Dep tool. The `dep-ensure` buildpack sets this variable to the path of a
cache layer in the app image.

* Set by: `dep-ensure`
* Phases: `build`
* Value: Dep Cache layer path

## Using CA Certificates
Go Buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates](https://paketo.io/docs/buildpacks/configuration/#ca-certificates)
section of our configuration docs.

## Setting Custom Start Processes
Go Buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles](https://paketo.io/docs/buildpacks/configuration/#procfiles) section
of our configuration docs.

## Setting Environment Variables in the App Image
Go Buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Adding Custom Labels to the App Image
Go Buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels](https://paketo.io/docs/buildpacks/configuration/#applying-custom-labels)
section of our configuration docs.
