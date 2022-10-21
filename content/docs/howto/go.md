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
pack build my-app --buildpack paketo-buildpacks/go \
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
pack build my-app --buildpack paketo-buildpacks/go \
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

## Configure the `go build` Command

The Paketo Go buildpack compiles Go source code with the `go build` command, with certain opinionated flags by default. (See reference [documentation]({{< ref "docs/reference/go-reference" >}}) for information about the default flagset.) It is possible to override or add to these defaults by setting the `BP_GO_BUILD_FLAGS` and `BP_GO_BUILD_LDFLAGS`
environment variables at build time.

###  Set `-ldflags` for `go build`
The Paketo Go buildpack has a dedicated environment variable for setting the value of `-ldflags`.

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_GO_BUILD_LDFLAGS` at build time with the `--env` flag. For example, to add `-ldflags="-X main.variable=some-value"` to the build flagset, set the environment variable as follows:
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/go \
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
pack build my-app --buildpack paketo-buildpacks/go \
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
pack build my-app --buildpack paketo-buildpacks/go \
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

### Build Multiple Packages In One App Image

The `BP_GO_TARGETS` environment variable can accept a colon-delimited list of
target packages. Each binary will be set as a [launch process][cnb/launch-process] of the same name in
the app image. The following examples will build _both_ the `first` and `second` packages in the same multi-package app directory as [above]({{< relref "#build-non-default-packages" >}}).

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_GO_TARGETS` at build time with the `--env` flag. 

{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/go \
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

## Import Private Go Modules
The Go buildpack can build apps that import private Go modules. Credentials to
access private Go modules are provided via a [service
binding][service-binding].

1. Set up a directory for the service binding:
{{< code/copyable >}}
mkdir /tmp/git-binding
echo "git-credentials" > /tmp/git-binding/type
touch /tmp/git-binding/credentials
{{< /code/copyable >}}

1. Add `git` credentials for accessing the private modules to
   `/tmp/git-binding/credentials`, following the [git credentials
   structure](https://git-scm.com/docs/git-credential#IOFMT).  For example, to
   access a private module `github.com/private-org/private-module` with a
   Github username and service account key, add the following to
   `/tmp/git-binding/credentials`:
<!-- spellchecker-disable -->
{{< code/copyable >}}
url=https://github.com
username=<USERNAME>
password=<SERVICE ACCOUNT KEY>
{{< /code/copyable >}}
<!-- spellchecker-enable -->

1. Provide the service binding and `$GOPRIVATE` environment variable at build
   time:
{{< code/copyable >}}
pack build myapp --buildpack paketo-buildpacks/go \
                 --env GOPRIVATE="github.com/private-org/private-module" \
                 --env SERVICE_BINDING_ROOT="/bindings" \
                 --volume /tmp/git-binding:/bindings/git-binding
{{< /code/copyable >}}

You'll see that the build successfully pulls your app's private dependencies.
The secrets stored in the service binding will **not** be stored in the built
app image.

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
pack build my-app --buildpack paketo-buildpacks/go \
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
pack build my-app --buildpack paketo-buildpacks/go \
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

## Enable Process Reloading
By default, your Go binary will be the only process running in your app
container at runtime. You can enable restarting the binary process
when files in the app's working directory change, which may facilitate a shorter
feedback loop for iterating on code changes. This feature may be used in conjunction with
a dev orchestrator like [Tilt][tilt].

### Using `BP_LIVE_RELOAD_ENABLED`

To enable reloadable processes, set the `$BP_LIVE_RELOAD_ENABLED` environment
variable at build time, either by passing a flag to the
[platform][definition/platform] or by
adding it to your `project.toml`. See the Cloud Native Buildpacks
[documentation][project-file] to learn more about `project.toml` files.

#### With a `pack build` flag
{{< code/copyable >}}
pack build myapp --env BP_LIVE_RELOAD_ENABLED=true
{{< /code/copyable >}}

#### In a `project.toml` file
{{< code/copyable >}}
[[ build.env ]]
  name = 'BP_LIVE_RELOAD_ENABLED'
  value = 'true'
{{< /code/copyable >}}

#### In a `Tiltfile` with the `pack` resource
You can use the Paketo Go buildpack with [Tilt][tilt]. This example
uses the [`pack` extension][tilt/pack] for Tilt, and shows how to configure watched files.
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack('my-app',
  buildpacks=["paketo-buildpacks/go"],
  path='./src',
  env_vars=["BP_LIVE_RELOAD_ENABLED=true"],
  deps=['./src/build'],
  live_update=[
    sync('./src/build', '/tmp/tilt')  ,      
    run('cp -rf /tmp/tilt/* /layers/paketo-buildpacks_go-build/targets/bin', trigger=['./src/build']),
  ])

# (Re)build locally when source code changes
local_resource('go-build',
  cmd='GOOS=linux GOARCH=amd64 go build -o ./build/ -buildmode pie .',
  deps=['./src'],
  ignore=['./src/build'],
  dir='./src'
)
{{< /code/copyable >}}
<!-- spellchecker-enable-->

##### Notes
- The Go Paketo buildpack works best with Tilt and hot reloading when all of
  your app's source code is in a subdirectory (`./src` in the above example). Use the `path`
  parameter of the `pack()` resource to specify the location of the source code.
- The Go Paketo buildpack will not recompile your source code inside the
  running app container. You must use a `local_resource` to rebuild your app
  when source code changes, and copy the built artifacts into the container with
  `sync` and `run` steps, as shown.
- The `cmd` that is run as part of the `go-build` local resource above matches
  the command that the Go buildpack runs to build the app, including cross-compiling
  the binary for the app container's operating system.

## Install a Custom CA Certificate
Go buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates]({{< ref "docs/howto/configuration#ca-certificates" >}})
section of our configuration docs.

## Override the Start Process Set by the Buildpack
Go buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles]({{< ref "docs/howto/configuration#procfiles" >}}) section
of our configuration docs.

## Set Environment Variables for App Launch Time
Go buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Add Custom Labels to the App Image
Go buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels]({{< ref "docs/howto/configuration#applying-custom-labels" >}})
section of our configuration docs.

## Extract Go Module Information From A Build
The Go buildpack produces a software bill of materials (SBOM) for the
dependencies installed in the app image during a build. It is possible
to extract information about the Go modules used in the build using the
build-time SBOM.

### With pack and a Command-Line Flag
1. When building with the pack CLI, use the flag `--sbom-output-dir` to extract
   SBOMs from the build:
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/go \
                  --sbom-output-dir /tmp/sbom-output
{{< /code/copyable >}}
<!-- spellchecker-enable -->
2. To view the Go modules used in the build, inspect one of the SBOMs generated
   by the Go Mod Vendor buildpack. For instance, to view the SBOM as
   [CycloneDX][format/cyclonedx] JSON:

## Enable `DEBUG` logging
Users of the Go buildpack can access extra debug logs during the image build process by setting the `BP_LOG_LEVEL`
environment variable to `DEBUG` at build time. Additional debug logs will
appear in build logs if the relevant buildpacks have debug log lines.
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/go \
  --env BP_LOG_LEVEL=DEBUG
{{< /code/copyable >}}

<!-- spellchecker-disable -->
{{< code/copyable >}}
cat /tmp/sbom-output/build/paketo-buildpacks_go-mod-vendor/sbom.cdx.json
{{< /code/copyable >}}
<!-- spellchecker-enable -->

<!-- References -->
[cnb/launch-process]:https://buildpacks.io/docs/app-developer-guide/run-an-app/

[cnb/project-file]:https://buildpacks.io/docs/app-developer-guide/using-project-descriptor
[format/cyclonedx]:https://cyclonedx.org/

[bp/releases]:https://github.com/paketo-buildpacks/go/releases/latest
[tilt]:https://tilt.dev/
[tilt/pack]:https://github.com/tilt-dev/tilt-extensions/tree/master/pack
[definition/platform]:https://buildpacks.io/docs/concepts/components/platform
[project-file]:https://buildpacks.io/docs/app-developer-guide/using-project-descriptor/
[service-binding]:{{< ref "/docs/howto/configuration#bindings" >}}
