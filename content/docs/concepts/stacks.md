---
title: "Stacks"
weight: 430
menu:
  main:
    parent: "concepts"
aliases:
  - /docs/stacks/
---

In the Getting Started tutorial, you used the Paketo builder to build a Node.js app. One of the core pieces to Buildpacks and Builders are Stack Images. Stacks provide the buildpack lifecycle with build-time and run-time environments in the form of images.

## What is a stack?
A `stack` consists of two images:
* `build image`: the environment in which your app is built
* `run image`: the OS layer on which your app runs

To learn more about the concept of`stacks`, see
[buildpacks.io](https://buildpacks.io/docs/concepts/components/stack/).

## What Paketo stacks are available?
The Paketo project releases several stacks. We currently support two Ubuntu
distributions: 18.04 Bionic Beaver and 22.04 Jammy Jellyfish. Tiny, Base, and
Full stack variants differ in the number of packages installed in the OS layer.
The available stacks, _**from smallest to largest**_, are:
- [Bionic Tiny](https://github.com/paketo-buildpacks/bionic-tiny-stack):
  - Build image based on Ubuntu 18.04 Bionic Beaver; run image comparable to [distroless](https://github.com/GoogleContainerTools/distroless)
  - Ideal for most Golang apps, Java
    [GraalVM Native
    Images](https://www.graalvm.org/docs/reference-manual/native-image/)
- [Jammy Tiny](https://github.com/paketo-buildpacks/jammy-tiny-stack)
  - Build image based on Ubuntu 22.04 Jammy Jellyfish; run image comparable to [distroless](https://github.com/GoogleContainerTools/distroless)
  - Ideal for most Golang apps, Java
    [GraalVM Native
    Images](https://www.graalvm.org/docs/reference-manual/native-image/)
- [Bionic Base](https://github.com/paketo-buildpacks/bionic-base-stack)
  - Based on Ubuntu 18.04 Bionic Beaver
  - Ideal for Java and .NET Core apps, Golang apps that require C libraries,
    Node.js, Python, Ruby, and JavaScript front end apps without many native
    extensions
- [Jammy Base](https://github.com/paketo-buildpacks/jammy-base-stack)
  - Based on Ubuntu 22.04 Jammy Jellyfish
  - Ideal for Java and .NET Core apps, Golang apps that require C libraries,
    Node.js, Python, Ruby, and JavaScript front end apps without many native
    extensions
- [Bionic Full](https://github.com/paketo-buildpacks/bionic-full-stack)
  - Based on Ubuntu 18.04 Bionic Beaver
  - Ideal for PHP apps, Node.js, Python, Ruby, and JavaScript front end apps with native extensions
- [Jammy Full](https://github.com/paketo-buildpacks/jammy-full-stack)
  - Based on Ubuntu 22.04 Jammy Jellyfish
  - Ideal for PHP apps, Node.js, Python, Ruby, and JavaScript front end apps with native extensions

In general, it is a best practice to select the smallest stack that supports
the apps you are trying to build.

## How are Paketo stacks used?
Paketo stacks are distributed in [builders][docs/builders], which are necessary
for buildpack builds. (See the [Builders][docs/builders] concepts page for more
information.) You can also create your own builder based on a Paketo stack. See
the Cloud Native Buildpacks [Create a
builder](https://buildpacks.io/docs/operator-guide/create-a-builder/)
documentation for a step by step guide.

## When are Paketo stacks updated?

Stacks are rebuilt whenever a package is patched to fix a CVE.
For more information about CVEs, see [Common Vulnerabilities and Exposures (CVE)](https://cve.mitre.org/).
Stacks are also rebuilt weekly to ensure packages without CVEs are also up to date.

We aim to release stack updates that fix High and Critical CVEs within 48 hours
of the patch release. For stack updates fixing Low and Medium CVEs, we aim to
release within two weeks.

**Note:** Security scanning tools might report vulnerabilities in apps even
when using the latest stack. This can occur when a CVE patch is not yet
available upstream or if Canonical determines that the vulnerability is not
severe enough to fix.

Stacks are backwards compatible. A stack can safely be upgraded to the most recent version within the major version line. If for some reason backwards compatibility is broken, it happens when a new major version is released.

## What security and hardening features do Paketo stacks offer?

* By using Ubuntu 18.04 and 22.04 as the base images for our stacks, we benefit
  from all of the security provided by Canonical and Ubuntu. For more
  information, see the [Canonical web site](https://ubuntu.com/security) and
  the [Ubuntu wiki](https://wiki.ubuntu.com/Security/Features).
* Our automatic monitoring and patching of CVEs means that our stacks are often
  updated within hours of Canonical's patches.
* The stack images are run as a dedicated non-root user when building and
  running applications.
* Each stack image has detailed metadata describing the image's components,
  such as the base operating system and packages.
* Each stack has separate images for building and running applications. The
  packages on the runtime image are curated to exclude compilers and other
  tools that might pose security risks.
* (For Jammy stacks) The build and run images have different user IDs. This
  means that sensitive files and dependencies installed at build-time cannot be
  corrupted at run-time by malicious app code.

<!-- References -->
[docs/builders]:{{< ref "docs/concepts/builders" >}}
