---
title: "Paketo Builders Reference"
menu:
  main:
    parent: reference
    identifier: builders-reference
    name: "Builders"
---
This reference documentation enumerates and briefly describes the available Paketo builders. For
explanations of how to use the builders for several common use-cases, see the
Paketo Builders How To [documentation][howto/builders].


## Available Paketo Builders
| Name                             | Stack                | Use cases                                                                                            | DockerHub Distribution                        | Github Repository                                              |
|----------------------------------|----------------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------|
| Jammy Full Builder               | Ubuntu 22.04         | PHP, Java, Node.js, Go, Python, .NET Core, Ruby, NGINX, and HTTPD buildpacks and common C libraries. | `paketobuildpacks/builder-jammy-full`         | https://github.com/paketo-buildpacks/builder-jammy-full        |
| Buildpackless Jammy Full Builder | Ubuntu 22.04         | No buildpacks included. Compatible with the same buildpacks as the Jammy Full Builder.               | `paketobuildpacks/builder-jammy-buildpackless-full`         | https://github.com/paketo-buildpacks/builder-jammy-buildpackless-full |
| Jammy Base Builder               | Ubuntu 22.04         | Java, Node.js, Go, Python, .NET Core, Ruby, and NGINX buildpacks without common C libraries.         | `paketobuildpacks/builder-jammy-base`         |  https://github.com/paketo-buildpacks/builder-jammy-base                                        |
| Buildpackless Jammy Base Builder | Ubuntu 22.04         | No buildpacks included. Compatible with the same buildpacks as the Jammy Base Builder.               | `paketobuildpacks/builder-jammy-buildpackless-base`         | https://github.com/paketo-buildpacks/builder-jammy-buildpackless-base |
| Jammy Tiny Builder               | Ubuntu 22.04, scratch | Consists of buildpacks to build most Go and Java GraalVM Native Image apps.                          | `paketobuildpacks/builder-jammy-tiny`         |  https://github.com/paketo-buildpacks/builder-jammy-tiny                                        |
| Buildpackless Jammy Tiny Builder | Ubuntu 22.04, scratch | No buildpacks included. Compatible with the same buildpacks as the Jammy Tiny Builder.               | `paketobuildpacks/builder-jammy-buildpackless-tiny`         | https://github.com/paketo-buildpacks/builder-jammy-buildpackless-tiny |
| UBI8 Builder                     | RHEL 8               | Java, Node.js buildpacks and extensions to install rpms.                                             | `paketobuildpacks/builder-ubi8-base`         | https://github.com/paketo-buildpacks/builder-ubi8-base         |


<!-- References -->
[howto/builders]:{{< ref "/docs/howto/builders" >}}

