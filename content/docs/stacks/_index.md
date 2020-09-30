---
title: "Stacks"
weight: 400
menu: "main"
---

# Stacks
In the Getting Started tutorial, you used the Paketo builder to build a Node.js app. One of the core pieces to Buildpacks and Builders are Stack Images. Stacks provide the buildpack lifecycle with build-time and run-time environments in the form of images.

## What is a stack?
A `stack` consists of two images:
* `build image`: the environment in which your app is built
* `run image`: the OS layer for your app image

For more information about `stacks`, see [buildpacks.io](https://buildpacks.io/docs/concepts/components/stack/).

## What Paketo stacks are available?
The Paketo project releases several stacks. These are:

### Tiny

#### Build Image
{{< code/copyable >}}
index.docker.io/paketobuildpacks/build:tiny-cnb
{{< /code/copyable >}}

#### Run Images
{{< code/copyable >}}
index.docker.io/paketobuildpacks/run:tiny-cnb
{{< /code/copyable >}}

#### Contains:
* Build: ubuntu:bionic + openssl + CA certs + compilers + shell utilities
* Run: distroless-like bionic + glibc + openssl + CA certs

### Base
#### Build Image
{{< code/copyable >}}
index.docker.io/paketobuildpacks/build:base-cnb
{{< /code/copyable >}}

#### Run Images
{{< code/copyable >}}
index.docker.io/paketobuildpacks/run:base-cnb
{{< /code/copyable >}}

#### Contains:
* Build: ubuntu:bionic + openssl + CA certs + compilers + shell utilities
* Run: ubuntu:bionic + openssl + CA certs

### Full
#### Build Image
{{< code/copyable >}}
index.docker.io/paketobuildpacks/build:full-cnb
{{< /code/copyable >}}

#### Run Images
{{< code/copyable >}}
index.docker.io/paketobuildpacks/run:full-cnb
{{< /code/copyable >}}

#### Contains:
* Build: ubuntu:bionic + many common C libraries and utilities
* Run: ubuntu:bionic + many common libraries and utilities

[Github Repo](https://github.com/paketo-buildpacks/stacks)
