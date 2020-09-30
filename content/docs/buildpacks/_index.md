---
title: "Buildpacks"
weight: 300
menu:
  main:
    identifier: "buildpacks"
---

# Buildpacks
In the Getting Started tutorial, you ran a `pack build` command to build a sample app. This resulted in some output similar to this block:

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

In this section, we will make sense of this output and explain how the
buildpacks detect what dependencies are needed by your app to build it into a runnable app image.

## What are Buildpacks?  
Buildpacks examine your app source code, identify and gather dependencies, and output OCI compliant app and dependency layers.

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
`paketo-buildpacks/npm-install` is used. This is because the NPM Install Buildpack's detection
criteria looks for a `package.json` file in the app source code. Since it's
present in the sample app we used, detection passes on the NPM Install Buildpack.

Different buildpacks have different detection criteria according to the
dependencies they are responsible for. Once detection has passed for a
buildpack, the buildpack returns a contract of what it requires, and what it
will provide to the subsequent `build` phase.

### Build Phase 
In the `build` phase, the buildpack contributes to the final
app image, fulfilling the contract given by the `detect` phase. These
contributions could be adding an image layer containing a dependency binary
(like the Node.js engine) or could be as simple as a running a command (like
`npm install`).

In the Getting Started tutorial, the `pack build` output contains a section in the
build phase for the NPM Install Buildpack under a "BUILDING" header. You can
see that the buildpack runs `npm install` to install the app's dependencies.
Subsequently, the NPM Start Buildpack sets the start command to `node server.js`.

The image below illustrates how buildpacks contribute layers to the final
runnable app image:

![Final app image](/images/docs-buildpacks-app-image.png)

For more information about buildpacks, visit
[buildpacks.io](https://buildpacks.io/docs/concepts/components/buildpack/)

## How do Paketo Buildpacks work together?  
The Paketo project provides language family buildpacks, which combine multiple buildpacks into ordered groupings. The groupings satisfy each buildpack's requirements (mentioned in the  `detect` section). The language family buildpacks provide language runtime support for the most popular languages and app configurations.

Keep reading to learn more about the specifics for each language family Paketo
Buildpack.

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

