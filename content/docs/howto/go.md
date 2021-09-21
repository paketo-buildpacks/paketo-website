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

## Override the Detected Go Version

The Paketo Go buildpack will attempt to automatically detect the correct version
of Go to install based on the version in your app's `go.mod`. It is possible to
override this version by setting the `BP_GO_VERSION` environment variable at build time.

`BP_GO_VERSION` can be set to any valid semver version or version constraint (e.g. `1.14.1`, `1.14.*`).
For the versions available in the buildpack, see the buildpack's [releases page][bp/releases]. Specifying a version of Go is not required. In the case that is not specified,
the buildpack will provide the default version, which can be seen in the
`buildpack.toml` file.

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_GO_VERSION` at build time with the `--env` flag.
{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --env BP_GO_VERSION="1.14.1"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file in your app directory that sets `BP_GO_VERSION` at build time.
{{< code/copyable >}}
# project.toml
[ build ]
  [[ build.env ]]
    name="BP_GO_VERSION"
    value="1.41.1"
{{< /code/copyable >}}


The pack CLI will automatically detect the project file at build time.

#### Deprecated: With pack and a `buildpack.yml`
Please note that setting the Go version through a buildpack.yml file will be
deprecated in Go Dist Buildpack v1.0.0.

## Configure the `go build` Command

The Paketo Go buildpack compiles Go source code with the `go build` command, with certain opinionated flags by default. (See reference [documentation]({{< ref "docs/reference/go-reference" >}}) for information about the default flagset.) It is possible to override or add to these defaults by setting the `BP_GO_BUILD_FLAGS` and `BP_GO_BUILD_LDFLAGS`
environment variables at build time.

###  Set `-ldflags` for `go build`
The Paketo Go buildpack has a dedicated environment variable for setting the value of `-ldflags`.

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_GO_BUILD_LDFLAGS` at build time with the `--env` flag. For example, to add `-ldflags="-X main.variable=some-value"` to the build flagset, set the environment variable as follows:
{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --env BP_GO_BUILD_LDFLAGS="-X main.variable=some-value"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file in your app directory that sets `BP_GO_BUILD_LDFLAGS` at build time. For example, to add `-ldflags="-X main.variable=some-value"` to the build flagset, set the environment variable as follows:
{{< code/copyable >}}
# project.toml
[ build ]
  [[ build.env ]]
    name="BP_GO_BUILD_LDFLAGS"
    value="-X main.variable=some-value"
{{< /code/copyable >}}

The pack CLI will automatically detect the project file at build time.

###  Set Other Flags for `go build`
Setting `BP_GO_BUILD_FLAGS` will add to the Paketo Go buildpack's default flagset. Any value that you set for a given flag will override the value set by the buildpack. See reference [documentation]({{< ref "/docs/reference/go-reference" >}}) for information about default configuration.

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_GO_BUILD_FLAGS` at build time with the `--env` flag. For example, to add `-buildmode=default -tags=paketo` to the build flagset, set the environment variable as follows:
{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --env BP_GO_BUILD_FLAGS="-buildmode=default -tags=paketo"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file in your app directory that sets `BP_GO_BUILD_FLAGS` at build time. For example, to add `-buildmode=default -tags=paketo` to the build flagset, set the environment variable as follows:
{{< code/copyable >}}
# project.toml
[ build ]
  [[ build.env ]]
    name="BP_GO_BUILD_FLAGS"
    value="-buildmode=default -tags=paketo"
{{< /code/copyable >}}

#### Deprecated: With buildpack.yml
Specifying the Go Build flags through buildpack.yml configuration will be
deprecated in Go Build Buildpack v1.0.0. To migrate from using buildpack.yml
please set the `$BP_GO_BUILD_FLAGS` environment variable.

The pack CLI will automatically detect the project file at build time.

## Build Non-Default Package(s)
The Paketo Go Buildpack will compile the package in the app's root directory
by default. It is possible to build a non-default package (or packages) by
setting the `BP_GO_TARGETS` environment variable at build time.

The following examples will build the `second` package in an app source directory with the structure:
```
app-directory
├── first
│   └── main.go
├── second
│   └── main.go
└── third
    └── main.go
```

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_GO_TARGETS` at build time with the `--env` flag. 

{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --env BP_GO_TARGETS="./second"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file in your app directory that sets `BP_GO_TARGETS` at build time.
{{< code/copyable >}}
# project.toml
[ build ]
  [[ build.env ]]
    name="BP_GO_TARGETS"
    value="./second"
{{< /code/copyable >}}

The pack CLI will automatically detect the project file at build time.

#### Deprecated: With buildpack.yml
Specifying the Go Build targets through buildpack.yml configuration will be
deprecated in Go Build Buildpack v1.0.0. To migrate from using buildpack.yml
please set the `$BP_GO_TARGETS` environment variable.

### Build Multiple Packages In One App Image

The `BP_GO_TARGETS` evironment variable can accept a colon-delimited list of
target packages. Each binary will be set as a [launch process][cnb/launch-process] of the same name in
the app image. The following examples will build _both_ the `first` and `second` packages in the same multi-package app directory as [above]({{< relref "#build-non-default-packages" >}}).

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_GO_TARGETS` at build time with the `--env` flag. 

{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --env BP_GO_TARGETS="./first:./second"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file in your app directory that sets `BP_GO_TARGETS` at build time.
{{< code/copyable >}}
# project.toml
[ build ]
  [[ build.env ]]
    name="BP_GO_TARGETS"
    value="./first:./second"
{{< /code/copyable >}}

#### Deprecated: With buildpack.yml
Specifying the Go Build targets through buildpack.yml configuration will be
deprecated in Go Build Buildpack v1.0.0. To migrate from using buildpack.yml
please set the `$BP_GO_TARGETS` environment variable.


## Build an App that Imports Its Own Sub-Packages

If you are building a `$GOPATH` application that imports its own sub-packages,
you will need to specify the import paths for those sub-packages. The Paketo Go Buildpack supports setting these import paths with the `$BP_GO_BUILD_IMPORT_PATH`
environment variable at build time.

The following examples will configure the buildpack to build an app whose
directory structure looks like:
```
app-directory
├── handlers
│   └── details.go
└── main.go
```
and whose `main.go` imports:
```go
import (
	"github.com/app-developer/app-directory/handlers"
)
```

#### With pack and a Command-Line Flag
When building with the pack CLI, set `$BP_GO_BUILD_IMPORT_PATH` at build time with the `--env` flag. 

{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --env BP_GO_BUILD_IMPORT_PATH="github.com/app-developer/app-directory"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file in your app directory that sets `$BP_GO_BUILD_IMPORT_PATH` at build time.
{{< code/copyable >}}
# project.toml
[ build ]
  [[ build.env ]]
    name="BP_GO_BUILD_IMPORT_PATH"
    value="github.com/app-developer/app-directory"
{{< /code/copyable >}}

#### Deprecated: With buildpack.yml
Specifying the Go Build import path through buildpack.yml configuration will be
deprecated in Go Build Buildpack v1.0.0. To migrate from using buildpack.yml
please set the `$BP_GO_BUILD_IMPORT_PATH` environment variable.

## Prevent Source Files From Being Deleted

By default, the Paketo Go Buildpack deletes the contents of your app source directory (except for built artifacts). To preserve certain static assets that
are needed in the app image, you can set the `BP_KEEP_FILES` environment
variable at build time.

The following examples configure the buildpack to prevent the `assets/` and
`public/` directories from being removed in the app image.

#### With pack and a Command-Line Flag
When building with the pack CLI, set `$BP_KEEP_FILES` at build time with the
`--env` flag. 

{{< code/copyable >}}
pack build my-app --buildpack gcr.io/paketo-buildpacks/go \
  --env BP_KEEP_FILES="assets/*:public/*"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file in your app directory that sets `$BP_KEEP_FILES` at build time.
{{< code/copyable >}}
# project.toml
[ build ]
  [[ build.env ]]
    name="BP_KEEP_FILES"
    value="assets/*:public/*"
{{< /code/copyable >}}

## Install a Custom CA Certificate
Go buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates]({{< ref "docs/reference/configuration#ca-certificates" >}})
section of our configuration docs.

## Override the Start Process Set by the Buildpack
Go buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles]({{< ref "docs/reference/configuration#procfiles" >}}) section
of our configuration docs.

## Set Environment Variables for App Launch Time
Go buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Add Custom Labels to the App Image
Go buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels]({{< ref "docs/reference/configuration#applying-custom-labels" >}})
section of our configuration docs.

<!-- References -->
[cnb/launch-process]:https://buildpacks.io/docs/app-developer-guide/run-an-app/

[cnb/project-file]:https://buildpacks.io/docs/app-developer-guide/using-project-descriptor

[bp/releases]:https://github.com/paketo-buildpacks/go/releases/latest