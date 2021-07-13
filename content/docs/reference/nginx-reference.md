---
title: "NGINX Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: nginx-reference
    name: "NGINX Buildpack"
---

{{% reference_exec_summary bp_name="Paketo NGINX Buildpack" bp_repo="https://github.com/paketo-buildpacks/nginx" howto_docs_path="/docs/howto/web-servers/#nginx" %}}

The NGINX Paketo Buildpack supports the installation of the NGINX binary distribution onto
the `$PATH` inside a container. This makes it available to subsequent
buildpacks.

## Supported Dependencies

The NGINX Paketo Buildpack supports several versions of NGINX.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/nginx/releases).

## Behavior
When the NGINX Buildpack participates in a build, it will contribute in one of two ways:

1. When an `nginx.conf` file **is present** in your app's source code, the
   buildpack will set up an NGINX server with that config.

1. When the `nginx.conf` **is not present** in the app's source code, the
   buildpack simply provides the NGINX dependency to subsequent buildpacks
   without actually setting up a server.