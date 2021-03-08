---
title: "Stacks"
weight: 400
menu: "main"
---

# Stacks
In the Getting Started tutorial, you used the Paketo builder to build a Node.js app. One of the core pieces to Buildpacks and Builders are Stack Images. Stacks provide the buildpack lifecycle with build-time and run-time environments in the form of images.

{{< table_of_contents >}}

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
{{< code/copyable >}}
gcr.io/paketo-buildpacks/run:tiny-cnb
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
{{< code/copyable >}}
gcr.io/paketo-buildpacks/run:base-cnb
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
{{< code/copyable >}}
gcr.io/paketo-buildpacks/run:full-cnb
{{< /code/copyable >}}

#### Contains:
* Build: ubuntu:bionic + many common C libraries and utilities
* Run: ubuntu:bionic + many common libraries and utilities

## When are Paketo stacks updated?

Stacks are rebuilt whenever a package is patched to fix a CVE.
For more information about CVEs, see [Common Vulnerabilities and Exposures (CVE)](https://cve.mitre.org/).
Stacks are also rebuilt weekly to ensure packages without CVEs are also up to date.

We aim to release stack updates that fix High and Critical CVEs within 48 hours of the patch release. For stack updates fixing Low and Medium CVEs, we aim to release within two weeks.

**Note:** Security scanning tools might report vulnerabilities in apps even when using the latest stack. This can occur when a CVE patch is not yet available upstream or if Canonical determines that the vulnerability is not severe enough to fix.

Stacks are backwards compatible. A stack can safely be upgraded to the most recent version within the major version line. If for some reason backwards compatibility is broken, it happens when a new major version is released.

## What security and hardening features do Paketo stacks offer?

* By using Ubuntu 18.04 as the base image for our stacks, we benefit from all of the security provided by Canonical and Ubuntu. For more information, see the [Canonical web site](https://ubuntu.com/security) and the [Ubuntu wiki](https://wiki.ubuntu.com/Security/Features).
* Our automatic monitoring and patching of CVEs means that our stacks are often updated within hours of Canonical's patches.
* The stack images are run as a dedicated non-root user when building and running applications.
* Each stack image has detailed metadata describing the image's components, such as the base operating system and packages.
* Each stack has separate images for building and running applications. The packages on the runtime image are curated to exclude compilers and other tools that might pose security risks.

[Github Repo](https://github.com/paketo-buildpacks/stacks)
