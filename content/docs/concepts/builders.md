---
title: "Builders"
weight: 420
menu:
  main:
    parent: "Concepts"
aliases:
  - /docs/builders/
---

In the Getting Started tutorial, you used the `pack` CLI and the base `builder` to create a runnable image with your application. This section explains what `builders` are and what builders are released by the Paketo project.


## What is a builder?
A `builder` is an image that contains three components:
* a set of `buildpacks`, which provide your app's dependencies
* a `stack`, which provides the OS layer for your app image
* the [CNB lifecycle](https://buildpacks.io/docs/concepts/components/lifecycle/), which puts everything together to produce your final app image


For more information about `builders`, see [buildpacks.io](https://buildpacks.io/docs/concepts/components/builder/).

#
## What Paketo builders are available?
The Paketo project releases several builder images to choose from depending on your application needs. These are:

### Full
Builder based off of the `ubuntu:bionic` stack. Consists of buildpacks to build most **PHP, Java, Node.js, Go, .NET Core, Ruby, NGINX,** and **HTTPD** apps _**with**_ common C libraries. To build your app with it locally using `pack`, run:

{{< code/copyable >}}
pack build my-app-image --builder paketobuildpacks/builder:full
{{< /code/copyable >}}

Paketo Full Builder [Github Repo](https://github.com/paketo-buildpacks/full-builder)

### Base
Builder based off of the `ubuntu:bionic` stack. Consists of buildpacks to build most **Java, Node.js, Go, .NET Core, Ruby,** and **NGINX** apps _**without**_ common C libraries. To build your app with it locally using `pack`, run:

{{< code/copyable >}}
pack build my-app-image --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

Paketo Base Builder [Github Repo](https://github.com/paketo-buildpacks/base-builder)

### Tiny
Builder based off of a Distroless `ubuntu:bionic` stack. Consists of buildpacks to build most **Go** and **Java** [GraalVM Native Image](https://www.graalvm.org/docs/reference-manual/native-image/) apps. To build your app with it locally using `pack`, run:

{{< code/copyable >}}
pack build my-app-image --builder paketobuildpacks/builder:tiny
{{< /code/copyable >}}

Paketo Tiny Builder [Github Repo](https://github.com/paketo-buildpacks/tiny-builder)
