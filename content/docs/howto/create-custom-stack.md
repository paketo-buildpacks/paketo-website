
---
title: "How to Create a Custom Stack"
weight: 345
menu:
  main:
    parent: "howto"
    name: "Create a Custom Stack"
---

## Preface
This documentation explains how to create a custom stack based off of the
existing Paketo stacks. Check out the [stacks concept page][concepts/stacks]
for more information about what a stack is and the Paketo offerings. 

**It's recommended to use an existent Paketo stack offering, over creating a custom
stack** in order to leverage the full range of Paketo security patching
and compliance standards.

In some cases, a custom stack image may be useful for users who may need an
extra system library or user ID, for example. The Cloud Native Buildpacks
project already has documentation for [**creating a stack from
scratch**](https://buildpacks.io/docs/operator-guide/create-a-stack/), but for
some Paketo users **it may be simpler and less error-prone to build upon the
stack we already provide**. It’s still recommended to read the CNB documentation
regardless, because there are a lot of details and explanations there that
still apply.

## Create a custom stack image based off of a Paketo Stack

This guide assumes you know the basics of stacks from the [stacks concept page][concepts/stacks].
1. Create a `Dockerfile` and define the `base` image as one of the Paketo stacks. For example:
{{< code/copyable >}}
FROM paketobuildpacks:full-cnb as base
{{< /code/copyable >}}

There are two different options for each of the three (tiny, base, full) stacks you can use.
- The first option is the stack without the `-cnb` suffix, which can be used as a base image
without any CNB metadata added at all. Ex. `docker.io/paketobuildpacks/run:full`
 - The second option is to use the stack with the `-cnb` suffix at the end.
   This will be the stack that contains [buildpack specific
   metadata](https://github.com/buildpacks/spec/blob/main/platform.md#stacks)
   already added, and is based off of the non-CNB stack image. Ex.
   `docker.io/paketobuildpacks/run:full-cnb`

Check out the `bionic` and `tiny` directories in
[github.com/paketo-buildpacks/stacks](https://github.com/paketo-buildpacks/stacks)
repo to view the Dockerfiles we have defined for both the base image and CNB images.

2. Add your desired custom stack change to the Dockerfile such as labels,
   environment variables, and/or packages. There are examples in the [CNB
   documentation](https://buildpacks.io/docs/operator-guide/create-a-stack/) .
   Note that the changes need to abide by the CNB spec. For example, setting
   the `CNB_USER_ID` to root isn’t allowed.

3. Build the stack image with  `docker build . -t <stack-name>-<run or
   build>:<tag> --target <target>` for both the build and run images.
4. Push the stack images to a registry with `docker push`
5. Create a custom builder with the stack you want to use. Check out the [builder
   documentation][concepts/builders] for details on builders. This can be
   achieved by cloning the builder you want to use, and modifying the
   `builder.toml` file. For example, if you have built a custom stack based off
   of the Paketo Full stack, you will want to add it to the [Full
   builder](https://github.com/paketo-buildpacks/full-builder) builder.toml
   file. Modify the bottom `[stack]` section to point to the registry location
   of the build and run images you have pushed to a registry. The `id` should
   match the stack ID if you specified one in the Dockerfile, or in the base
   image you used. It will be `io.buildpacks.stacks.bionic` if your base image
   was one of the CNB stack images. This ID implies compatibility with the
   official `io.buildpacks.stacks.bionic` stack.
6. Create the builder with the pack CLI.
{{< code/copyable >}}
pack builder create <builder-name> —config <path to builder.toml>
{{< /code/copyable >}}
7. Ensure the buildpacks of interest support the wildcard (“*”) stack or
   support the stack ID you provided in the `builder.toml` by checking the buildpack `stacks` section. For example, the
   [node-engine
   buildpack](https://github.com/paketo-buildpacks/node-engine/blob/8f9743093c6696c365baf1739622889c61280bff/buildpack.toml#L129-L130)
   only supports stacks with ID `io.buildpacks.stacks.bionic`. If you build
   upon one of the Paketo `-cnb` stacks, your custom stack will be
   compatible already, since part of the CNB metadata added is the ID.
8. Perform builds with the newly created builder image, which uses the custom stack images.

<!-- References -->

[concepts/stacks]:{{< ref "docs/concepts/stacks" >}}
[concepts/builders]:{{< ref "docs/concepts/stacks" >}}
