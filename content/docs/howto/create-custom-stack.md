
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
stack we already provide**. It’s recommended to read the CNB documentation
regardless, because there are a lot of details and explanations there that
still apply.



## Create a custom stack image based off of a Paketo Stack

### Using `docker build`
This guide assumes you know the basics of stacks from the [stacks concept page][concepts/stacks].
1. Create a `Dockerfile` and define the `base` image as one of the Paketo stacks. For example:
{{< code/copyable >}}
FROM paketobuildpacks/build-jammy-tiny as base
{{< /code/copyable >}}

There are multiple stack variants to choose from (tiny, base, full). Check out
the stack's Github repository (for example,
[github.com/paketo-buildpacks/jammy-tiny-stack](https://github.com/paketo-buildpacks/jammy-tiny-stack)
for the Jammy Tiny Stack) `stack` directory to see the definitions for the
build and run images.

2. Add your desired custom stack change to the Dockerfile such as labels,
   environment variables, and/or packages. There are examples in the [CNB
   documentation](https://buildpacks.io/docs/operator-guide/create-a-stack/) .
   Note that the changes need to abide by the CNB spec. For example, setting
   the `CNB_USER_ID` to root isn’t allowed.

3. Build the stack image with  `docker build . -t <stack-name>-<run or
   build>:<tag> --target <target>` for both the build and run images.
4. Push the stack images to a registry with `docker push`


### Using `jam create-stack`

#### Prerequisites
You will need the following tools installed on your machine:
<!-- spellchecker-disable -->
- [jam](https://github.com/paketo-buildpacks/jam)
- [skopeo](https://github.com/containers/skopeo)
<!-- spellchecker-enable-->

1. Create a Dockerfile for the build and run stack images, as in steps 1 and 2 above.

2. Create a `stack.toml`, which should resemble the following:

<!-- spellchecker-disable -->

{{< code/copyable >}}
id = "io.buildpacks.stacks.jammy.tiny"

platforms = ["linux/amd64"]

[build] 
  dockerfile = "<path/to/build/Dockerfile>"
  gid = 1000
  shell = "/bin/bash"
  uid = 1000

  [build.args]
    sources = """
    deb http://archive.ubuntu.com/ubuntu jammy main universe multiverse
    deb http://archive.ubuntu.com/ubuntu jammy-updates main universe multiverse
    deb http://archive.ubuntu.com/ubuntu jammy-security main universe multiverse
    """

    # List of packages which should be included in the stack build image
    packages = """\
    <some-package> \
    <another-package> \
    """

[run]
  dockerfile = "<path/to/run/Dockerfile>"
  gid = 1000
  shell = "/sbin/nologin"
  uid = 1000

  [run.args]
    sources = """
    deb http://ports.ubuntu.com/ubuntu-ports/ jammy main universe multiverse
    deb http://ports.ubuntu.com/ubuntu-ports/ jammy-updates main universe multiverse
    deb http://ports.ubuntu.com/ubuntu-ports/ jammy-security main universe multiverse
    """

    # List of packages which should be included in the stack run image
    packages = """\
    <some-package> \
    <another-package> \
    """

[deprecated]
  legacy-sbom = true
  mixins = true
{{< /code/copyable >}}

<!-- spellchecker-enable-->



3. Create the stack with the `jam` CLI:
<!-- spellchecker-disable -->
{{< code/copyable >}}
jam create-stack --config stack.toml --build-output <name>.oci --run-output <name>.oci
{{< /code/copyable >}}
<!-- spellchecker-enable-->


4. Use `skopeo` to copy the OCI archives
   to the desired registry:

   To copy the archives to a remote registry:
<!-- spellchecker-disable -->
{{< code/copyable >}}
skopeo copy oci-archive:///<path/to/oci/archive/> docker://<registry-image-location>:<tag>
{{< /code/copyable >}}
<!-- spellchecker-enable-->

   To copy the archives to your local Docker daemon:
<!-- spellchecker-disable -->
{{< code/copyable >}}
skopeo copy oci-archive:///<path/to/oci/archive> docker-daemon:<stack-image-name>:<tag>
{{< /code/copyable >}}
<!-- spellchecker-enable-->


## Create a custom builder with the custom stack

Check out the [builder documentation][concepts/builders] for details on
builders.

1. Clone the builder you want to use, and modify the `builder.toml` file. For
   example, if you have built a custom stack based off of the Paketo Jammy Tiny
   stack, you will want to add it to the [Jammy Tiny
   builder](https://github.com/paketo-buildpacks/builder-jammy-tiny)
   builder.toml file. Modify the bottom `[stack]` section to point to the
   registry location of the build and run images you have pushed to a registry.
   The `id` should match the stack ID if you specified one in the Dockerfile,
   or in the base image you used. It will be something along the lines of
   `io.buildpacks.stacks.jammy` (or `io.buildpacks.stacks.jammy.tiny` if using
   Tiny stack). This ID implies compatibility with the official Paketo stack
   with that label.
2. Create the builder with the pack CLI.
{{< code/copyable >}}
pack builder create <builder-name> —config <path to builder.toml>
{{< /code/copyable >}}
3. Ensure the buildpacks of interest support the wildcard (“*”) stack or
   support the stack ID you provided in the `builder.toml` by checking the buildpack `stacks` section. For example, the
   [node-engine
   buildpack](https://github.com/paketo-buildpacks/node-engine/blob/cfa6fe4d837aeb457d15b08716edb38297199460/buildpack.toml#L72)
   supports both stacks with ID `io.buildpacks.stacks.jammy` and `*`.
4. Perform builds with the newly created builder image, which uses the custom stack images.


<!-- References -->

[concepts/stacks]:{{< ref "docs/concepts/stacks" >}}
[concepts/builders]:{{< ref "docs/concepts/stacks" >}}
