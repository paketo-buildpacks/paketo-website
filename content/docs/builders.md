---
title: "Builders"
weight: 2
---

# Builders
In the Getting Started tutorial, you used the `pack` CLI and the Paketo base `builder` to create a runnable image with your application. This section explains what Paketo `builders` are, and how they fit into the Paketo ecosystem.

## What is a Paketo builder?
A Paketo `builder` is an image that contains three components:
* a set of Paketo `buildpacks`, which provide your app's dependencies,
* a Paketo `stack`, which provides the OS layer for your app image, and
* the [CNB lifecycle](https://buildpacks.io/docs/concepts/components/lifecycle/), which puts everything together to produce your final app image


For more information about `builders`, visit the [buildpacks.io docs](https://buildpacks.io/docs/concepts/components/builder/). More information about `stacks` and the `CNB lifecycle` can be found there as well.

#
## What Paketo builders are available?
The Paketo project releases several builder images to choose from depending on your application needs. The available options are:

#### Tiny
Builder based off of a Distroless `ubuntu:bionic` stack. Consists of buildpacks to build most **Go** and **Java** [GraalVM Native Image](https://www.graalvm.org/docs/reference-manual/native-image/) apps. It lives in [GCR](gcr.io/paketo-buildpacks/builder:tiny). To build your app with it, run:

```
$ pack build <image-name> --path <path/to/source> --builder gcr.io/paketo-buildpacks/builder:tiny
```

#### Base
Builder based off of the `ubuntu:bionic` stack. Consists of buildpacks to build most **Java, Node.js, Go, .NET Core, Ruby,** and **NGINX** apps _**without**_ common C libraries. It lives in [GCR](gcr.io/paketo-buildpacks/builder:base). To build your app with it, run:


```
$ pack build <image-name> --path <path/to/source> --builder gcr.io/paketo-buildpacks/builder:base
```
#### Full
Builder based off of the `ubuntu:bionic` stack. Consists of buildpacks to build most **PHP, Java, Node.js, Go, .NET Core, Ruby,** and **NGINX** apps _**with**_ common C libraries. It lives in [GCR](gcr.io/paketo-buildpacks/builder:full). To build your app with it, run:

```
$ pack build <image-name> --path <path/to/source> --builder gcr.io/paketo-buildpacks/builder:full
```
#
#### The Github repo for Paketo builders is [here](https://github.com/paketo-buildpacks/builder).
