---
title: "HTTPD Buildpack Reference"
weight: 300
menu:
  main:
    parent: reference
    identifier: httpd-reference
    name: "HTTPD Buildpack"
---

{{% reference_exec_summary bp_name="Paketo HTTPD Buildpack" bp_repo="https://github.com/paketo-buildpacks/httpd" howto_docs_path="/docs/howto/web-servers/#httpd" %}}

The HTTPD Paketo Buildpack supports the installation of the
Apache HTTP Server binary distribution
onto the `$PATH` inside a container. This makes it available to subsequent
buildpacks.

## Supported Dependencies

The HTTPD Paketo Buildpack supports several versions of Apache HTTP Server.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/httpd/releases).

## Behavior
When the HTTPD Buildpack participates in a build, it will contribute in one of three ways:

1. When an `httpd.conf` file **is present** in your app's source code, the
   buildpack will set up an Apache HTTP server with that config.

1. When the `httpd.conf` **is not present** in the app's source code, the
   buildpack simply provides the Apache HTTP Server dependency to subsequent
   buildpacks without actually setting up a server.

1. When the `BP_WEB_SERVER` **is set to `httpd`**, the buildpack will set up an
   Apache HTTP server with a default configuration.
