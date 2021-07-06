---
title: "Go Buildpack Reference"
weight: 300
menu:
  main:
    parent: Reference
    identifier: go-reference
    name: "Go Buildpack"
---

The [Go Paketo Buildpack](https://github.com/paketo-buildpacks/go) supports several popular
configurations for Go apps.

## Supported Dependencies

The Go Paketo Buildpack supports several versions of Go.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/go/releases).

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