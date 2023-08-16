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

## Supported Environment Variable Configuration

### BP_LIVE_RELOAD_ENABLED
Enables reloadable processes.

### BP_NGINX_VERSION
Allows you to specify the version of the NGINX Server that is installed.

### BP_WEB_SERVER
When the value is set to `nginx` the buildpack will generate a default `nginx.conf`.

### BP_WEB_SERVER_ROOT
Defaults to `public`, setting this allows you to modify the location of the
static files served by the web server with either an absolute file path or a
file path relative to `/workspace`.

### BP_WEB_SERVER_ENABLE_PUSH_STATE
Enables push state routing functionality.

### BP_WEB_SERVER_FORCE_HTTPS
Allows you to enforce HTTPS for server connections by redirecting all requests
to use the HTTPS protocol.

## Supported Service Bindings
The NGINX buildpack can be configured using [service bindings][service-binding].
####
| `type`                 | Required Files      | # Bindings of This Type Accepted |
|------------------------|---------------------|----------------------------------|
| [`htpasswd`][htpasswd] | `type`, `.htpasswd` | 0 or 1                           |

## Behavior
When the NGINX Buildpack participates in a build, it will contribute in one of two ways:

1. When an `nginx.conf` file **is present** in your app's source code, the
   buildpack will set up an NGINX server with that config.

1. When the `nginx.conf` **is not present** in the app's source code, the
   buildpack simply provides the NGINX dependency to subsequent buildpacks
   without actually setting up a server.

1. When the `BP_WEB_SERVER` **is set to `nginx`**, the buildpack will set up an
   NGINX server with a default configuration.

<!-- References -->
[service-binding]:{{< ref "docs/howto/configuration#bindings" >}}
[htpasswd]:{{< ref "docs/howto/web-servers#set-up-basic-authentication" >}}
