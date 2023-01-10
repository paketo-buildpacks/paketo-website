---
title: "Builders"
weight: 420
menu:
  main:
    parent: "concepts"
aliases:
  - /docs/builders/
---

In the Getting Started tutorial, you used the `pack` CLI and the base `builder`
to create a runnable image with your application. This section explains what
`builders` are and what builders are released by the Paketo project.

## What is a builder?
A `builder` is an image that contains three components:
* a set of `buildpacks`, which provide your app's dependencies
* a `stack`, which provides the OS layer for your app image
* the [CNB
  lifecycle](https://buildpacks.io/docs/concepts/components/lifecycle/), which
  puts everything together to produce your final app image

For more information about `builders`, see
[buildpacks.io](https://buildpacks.io/docs/concepts/components/builder/).

## What Paketo builders are available?
The Paketo project releases several builder images to choose from depending on
your application needs. See the Builders reference
[documentation][reference/builders] for a complete list of available Paketo
builders.

<!-- References -->
[reference/builders]:{{< ref "/docs/reference/builders-reference" >}}

