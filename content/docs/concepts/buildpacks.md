---
title: "Buildpacks"
weight: 400
menu:
  main:
    parent: "concepts"
aliases:
  - /docs/buildpacks/
---
In this section, we will use the results of the [Getting started tutorial](https://paketo.io/docs/) with `Node.js` where a simple app is built using the `pack build` command.

This resulted in some output similar to this block:

```
...
===> DETECTING
paketo-buildpacks/node-engine 0.1.1
paketo-buildpacks/npm-install 0.2.0
paketo-buildpacks/npm-start   0.0.2
...
===> BUILDING
Paketo Node Engine Buildpack 0.1.1
...
Paketo NPM Install Buildpack 0.2.0
...
Paketo NPM Start Buildpack 0.0.2
...
```

Here we will make sense of this output and explain how the
buildpacks detect what dependencies are needed by your app to build it into a runnable app image.

## What are Buildpacks?
Buildpacks examine your app source code, identify and gather dependencies, and
output OCI compliant app and dependency layers.

**Paketo buildpacks provide language runtime support for your favorite
languages.**

Each buildpack is a modular unit, responsible for providing a single
dependency. Multiple implementation buildpacks come together to provide all of
your app's dependencies.

A buildpack operates on your source code in two phases: **detect** and
**build**.

### Detect Phase
In the `detect` phase, the buildpack looks for indicators in
your source code to determine whether or not it needs to be included to build your app.

In the Getting Started tutorial, you can see in the output that
`paketo-buildpacks/npm-install` is used. This is because the NPM Install
Buildpack's detection criteria looks for a `package.json` file in the app
source code. Since it's present in the sample app we used, detection passes on
the NPM Install Buildpack.

Different buildpacks have different detection criteria according to the
dependencies they are responsible for. Once detection has passed for a
buildpack, the buildpack returns a contract of what it requires, and what it
will provide to the subsequent `build` phase.

### Build Phase
In the `build` phase, the buildpack contributes to the final
app image, fulfilling the contract given by the `detect` phase. These
contributions could be adding an image layer containing a dependency binary
(like the Node.js engine) or could be as simple as running a command (like
`npm install`).

In the tutorial, the `pack build` output contains a section in the
build phase for the NPM Install Buildpack under a "BUILDING" header. You can
see that the buildpack runs `npm install` to install the app's dependencies.
Subsequently, the NPM Start Buildpack sets the start command to `node server.js`.

The image below illustrates how buildpacks contribute layers to the final
runnable app image:

![Final app image](/images/docs-buildpacks-app-image.png)

For more information about buildpacks, visit
[buildpacks.io](https://buildpacks.io/docs/concepts/components/buildpack/)

### Component Buildpacks
Paketo provides many component buildpacks, each with a well-defined
responsibility. Component buildpacks may require contributions from upstream
buildpacks and/or provide required components to downstream buildpacks.

For example, the Gradle Buildpack is a component buildpack, responsible for
installing Gradle in the build container and using Gradle to compile and
package a JVM application. It requires an upstream component to provide a
JDK. It provides a compiled JVM application to downstream buildpacks.

### Composite Buildpacks

Component buildpacks can be combined to compose higher-level composite
buildpacks. Composite buildpacks contain an ordered list of component
buildpacks. Some buildpacks in the ordering may be optional, participating only
when they detect that they are needed.

## How do Paketo Buildpacks work together?
The Paketo language family buildpacks are [composite
buildpacks]({{< relref "#composite-buildpacks" >}}) that provide easy out-of-the-box support the
most popular language runtimes and app configurations. These buildpacks combine
multiple component buildpacks into ordered groupings. The groupings satisfy
each buildpack's requirements (mentioned in the  `detect` section).

## How do Paketo Buildpacks relate to the Cloud Native Buildpacks project?

Paketo Buildpacks implement the Buildpack API described in the [Cloud Native Buildpacks
Specification](https://github.com/buildpacks/spec). The `build` and `detect`
phases of Paketo Buildpacks are designed to be run by the [CNB
lifecycle](https://buildpacks.io/docs/concepts/components/lifecycle/).

## How are Paketo Buildpacks different from Cloud Foundry Buildpacks?

| Paketo Buildpacks | CF Buildpacks |
| ------------------- | -------------- |
| Produce OCI images that can be **deployed anywhere** | Produce droplets that must be deployed with CF |
| Each language buildpack is made up of **small, composable components** | Each language buildpack is one monolithic codebase |
| **Easy to add features** by writing your own buildpack | Must fork a buildpack to extend features |

