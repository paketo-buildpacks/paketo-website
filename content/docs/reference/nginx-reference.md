---
title: "NGINX Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: nginx-reference
    name: "NGINX Buildpack"
---

The [NGINX Paketo Buildpack](https://github.com/paketo-buildpacks/nginx) supports the installation of the NGINX binary distribution onto
the `$PATH` inside a container. This makes it available to subsequent
buildpacks.

## Supported Dependencies

The NGINX Paketo Buildpack supports several versions of NGINX.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/nginx/releases).

## Configurations
The NGINX buildpack supports two app configurations:

1. When an `nginx.conf` file **is present** in your app's source code, the
   buildpack will set up an NGINX server with that config.

1. When the `nginx.conf` **is not present** in the app's source code, the
   buildpack simply provides the NGINX dependency to subsequent buildpacks
   without actually setting up a server.