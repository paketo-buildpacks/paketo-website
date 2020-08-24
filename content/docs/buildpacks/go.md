---
title: "Go Buildpack"
weight: 320
menu:
  main:
    parent: "buildpacks"
---
TODO:
- Flesh out the dep ensure and go mod vendor process sections
  - Explain briefly what goes on under the hood
- Env variables section
# Go Buildpack

The [Go CNB](https://github.com/paketo-buildpacks/go) supports several popular configurations for Go apps.

To build your app locally with this CNB using the `pack` CLI, run
```
pack build my-app --buildpack gcr.io/paketo-buildpacks/go
```

## <a id="specifying-go-version"></a> Specifying a Go Version

The Go CNB allows you to specify a version of Go to use during
deployment. This version can be specified via `buildpack.yml`.

Specifying a version of Go is not required. In the case that is not specified,
the buildpack will provide the default version, which can
be seen in the buildpack.toml file.

### <a id='buildpack-yml'></a> Using buildpack.yml

To configure the buildpack to use Go v1.14.6 when deploying your app,
include the values below in your `buildpack.yml` file:

```
---
go:
  version: 1.14.6
```


## <a id="package-management-options"></a> Package Management Options

With the Go CNB, there are three options for package management depending on your application:
* The built-in [Go modules](https://github.com/golang/go/wiki/Modules) feature,
* The [Dep](https://github.com/golang/dep) tool
* No package manager

Support for each of these package managers is mutually-exclusive. You can find specific information for each option below.

## <a id="package-management-with-go-modules"></a> Package Management with Go Modules

Many Go apps require third-party libraries to perform common tasks and
behaviors. Go modules are a built-in option for managing these third-party
dependencies that the Go CNB fully supports. Including a `go.mod` file in your
app source code instructs the buildpack to vendor your dependencies
using Go modules. The resulting `vendor` directory will exist in the app's root directory and will contain all the packages needed to build your Go app.


## <a id="package-management-with-dep"></a> Package Management with Dep

Dep is an alternative option to Go Modules for package management in Go apps. Including a `Gopkg.toml` file (more information about this [here](https://golang.github.io/dep/docs/Gopkg.toml.html)) in your app source code instructs the buildpack to download the `dep` package, and then vendor your dependencies using it. There may be an optional `Gopkg.lock` file that outlines specific versions of the dependencies to be packaged. The resulting `vendor` directory will exist in the app's root directory and will contain all the packages needed to build your Go app. 

## <a id="no-package-manager"></a> No Package Management

The Go CNB also supports both self-vendored apps and simpler apps that do not require third-party packages. In this case there is no vendoring step, and the `go build` command is run on the app source code as it is provided.


## <a id="environment-variables"></a> Buildpack-Set Environment Variables

The Go CNB sets a few environment variables during the `build` and
`launch` phases of the app lifecycle. The sections below describe each
environment variable and its impact on your app. 
