---
title: "Go Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: go-reference
    name: "Go Buildpack"
---

{{% reference_exec_summary bp_name="Paketo Go Buildpack" bp_repo="https://github.com/paketo-buildpacks/go" howto_docs_path="/docs/howto/go" %}}

## Supported Dependencies

The Go Paketo Buildpack supports several versions of Go.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes][bp/go/releases].

## Behavior
The Paketo Go Buildpack is a [composite buildpack][paketo/composite-buildpack] designed to build applications written in Go.

### Package Management

With the Go CNB, there are three options for package management depending on
your application:
* The built-in [Go modules][Golang/modules] feature,
* The [Dep][Golang/dep] tool
* No package manager

Support for each of these package managers is mutually-exclusive. You can find
specific information for each option below.

#### Package Management with Go Modules

The buildpack will vendor dependencies using go modules if the app source
code contains a `go.mod` file. During the build phase, the `go-mod-vendor`
[buildpack][bp/go-mod-vendor] checks to see
if the application requires any external modules and if it does, runs the `go
mod vendor` command for your app. The resulting `vendor` directory will exist
in the app's root directory and will contain all packages required for the build.


#### Package Management with Dep

Dep is an alternative option to Go Modules for package management in Go apps. The buildpack will vendor dependencies using `dep` if the app source code
contains a `Gopkg.toml` file. (For more information about this file, see the `dep`
[documentation][Golang/dep/gopkg.toml]. There may be an optional `Gopkg.lock` file that outlines specific versions of the dependencies to be packaged. During its build
phase, the `dep-ensure`
[buildpack][bp/dep-ensure] runs the `dep
ensure` command. The resulting `vendor` directory will exist in
the app's root directory and will contain all the packages required for the build.

#### No Package Management

The buildpack also supports both self-vendored apps and simpler apps that do not
require third-party packages. In this case there is no vendoring step, and the
`go build` command is run on the app source code as it is provided.

### Compilation
The buildpack runs `go build` to compile Go source code into executables. By
default, it sets the flag `-buildmode=pie`. If there is a `go.mod` present in
the app's root directory, it also builds with `mod=vendor`. See the Go tool's [documentation][Golang/tool-docs] for details about build configuration.

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

## Components
| Name                                   | Required/Optional | Purpose                                               |
|----------------------------------------|-------------------|-------------------------------------------------------|
| [Paketo CA Certificates Buildpack][bp/ca-certs]       | Optional          | Installs custom CA certificates                       |
| [Paketo Go Dist Buildpack][bp/go-dist]               | Required          | Installs the Golang toolchain                         |
| [Paketo Go Mod Vendor Buildpack][bp/go-mod-vendor]         | Optional          | Installs app Go modules                               |
| [Paketo Dep Buildpack][bp/dep]                   | Optional          | Installs `dep`                                        |
| [Paketo Dep Ensure Buildpack][bp/dep-ensure]            | Optional          | Uses `dep` to install app dependencies                |
| [Paketo Go Build Buildpack][bp/go-build]              | Required          | Compiles source code                                  |
| [Paketo Procfile Buildpack][bp/procfile]              | Optional          | Sets a user-specified start command                   |
| [Paketo Environment Variables Buildpack][bp/env-vars] | Optional          | Sets user-specified launch-time environment variables |
| [Paketo Image Labels Buildpack][bp/image-labels]          | Optional          | Adds user-specified labels to app image metadata      |
| [Paketo Watchexec Buildpack][bp/watchexec]          | Optional          | Installs [`watchexec`][watchexec]       |
| [Paketo Git Buildpack][bp/git]          | Optional          | Enables `git` authentication and/or `git` metadata extraction during builds       |


##  Software Bill of Materials
The Go buildpack supports the full [software bill of materials][concepts/SBOM]
(SBOM) in [Syft][format/syft], [CycloneDX][format/cyclonedx], and
[SPDX][format/spdx] formats. For apps with a `go.mod`, this includes Go module
data.  See [Extract Go Module Information from a Build][howto/extract-modules]. The Go buildpack also
includes limited support for the [Paketo-specific][format/paketo] SBOM format.
This SBOM does not include Go module information.

<!-- References -->
<!-- spellchecker-disable -->
[Golang/tool-docs]:https://pkg.go.dev/cmd/go
[Golang/modules]:https://github.com/golang/go/wiki/Modules
[Golang/dep]:https://github.com/golang/dep
[Golang/dep/gopkg.toml]:https://golang.github.io/dep/docs/Gopkg.toml.html

[paketo/composite-buildpack]:{{< ref "docs/concepts/buildpacks#composite-buildpacks" >}}

[bp/ca-certs]:{{< bp_repo "ca-certificates" >}}
[bp/dep]:{{< bp_repo "dep" >}}
[bp/dep-ensure]:{{< bp_repo "dep-ensure" >}}
[bp/env-vars]:{{< bp_repo "environment-variables" >}}
[bp/go/releases]:{{< bp_repo "go" >}}/releases/latest
[bp/go-build]:{{< bp_repo "go-build" >}}
[bp/go-dist]:{{< bp_repo "go-dist" >}}
[bp/go-mod-vendor]:{{< bp_repo "go-mod-vendor" >}}
[bp/image-labels]:{{< bp_repo "image-labels" >}}
[bp/procfile]:{{< bp_repo "procfile" >}}
[bp/watchexec]:{{< bp_repo "watchexec" >}}
[bp/git]:{{< bp_repo "git" >}}

[concepts/SBOM]:{{< ref "docs/concepts/sbom" >}}
[howto/extract-modules]:{{< ref "docs/howto/go#extract-go-module-information-from-a-build" >}}

[format/cyclonedx]:https://cyclonedx.org/
[format/spdx]:https://spdx.dev/
[format/syft]:https://github.com/anchore/syft/tree/main/schema/json
[format/paketo]:{{< ref "docs/concepts/sbom#paketo-specific-sbom-format" >}}

[watchexec]:https://github.com/watchexec/watchexec
<!-- spellchecker-enable -->
