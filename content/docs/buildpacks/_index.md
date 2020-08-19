---
title: "Buildpacks"
weight: 300
menu:
  main:
    identifier: "buildpacks"
---

# Buildpacks
If you recall from the Getting Started tutorial, you ran a `pack build` command against the `paketo-sample-app`. This resulted in some output similar to this block:

```
===> CREATING
[creator] ---> DETECTING
[creator] paketo-buildpacks/node-engine 0.0.178
[creator] paketo-buildpacks/npm         0.1.11
...
...
[creator] ---> BUILDING
[creator] Node Engine Buildpack 0.0.178
...
[creator] NPM Buildpack 0.1.11
...
```

In this section, we will make sense of this output and explain how the buildpacks detect your app's dependencies and build them into the final runnable app image.

## What are Buildpacks?
Buildpacks examine your app source code, identify and gather dependencies, and output OCI compliant app and dependency layers. **Paketo buildpacks provide language runtime support for your favorite languages.**

Each buildpack is a modular unit, responsible for providing a single dependency. Multiple implementation buildpacks come together to provide all of your app's dependencies.

A buildpack operates on your source code in two phases: **detect** and **build**.

### Detect Phase
In the `detect` phase, the buildpack looks for indicators in your source code to determine whether or not it's needed to build your app.

In the Getting Started guide, you can see in the output that `paketo-buildpacks/npm` is used. This is because the npm buildpack's detection criteria looks for a `package.json` file in the app source code. Since it's present in the sample app we used, detection passes.

Different buildpacks have different detection criteria according to the dependencies they are responsible for. Once detection has passed for a buildpack, the buildpack returns a contract of what it requires, and what it will provide to the subsequent `build` phase.

### Build Phase
In the `build` phase, the buildpack contributes to the final app image, fulfilling the contract given by the `detect` phase. These contributions could be adding an image layer containing a dependency binary (like the Node.js engine) or could be as simple as a running a command (like `npm install`).

In the Getting Started guide, the `pack build` output contains a section in the build phase for the npm buildpack under a "BUILDING" header. You can see that the buildpack runs `npm install` to install the app's dependencies and sets the start command to `npm start`.

The image below illustrates how buildpacks contribute layers to the final runnable app image:
![Final app image](/images/docs-buildpacks-app-image.png)


For more information about buildpacks, visit [buildpacks.io](https://buildpacks.io/docs/concepts/components/buildpack/)

## How do Paketo buildpacks work together?
The Paketo project provides language family buildpacks, which combine multiple buildpacks into ordered groupings. The groupings satisfy each buildpack's requirements (mentioned in the  `detect` section). The language family buildpacks provide language runtime support for the most popular languages and app configurations.

Keep reading to learn more about the specifics for each language family Paketo Buildpack.