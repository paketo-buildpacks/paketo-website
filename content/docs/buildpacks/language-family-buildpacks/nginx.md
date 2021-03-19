---
title: "NGINX Buildpack"
weight: 306
menu:
  main:
    parent: "language-family-buildpacks"
---

# NGINX Buildpack

The [NGINX Paketo Buildpack](https://github.com/paketo-buildpacks/nginx) supports the installation of the NGINX binary distribution onto
the `$PATH` inside a container. This makes it available to subsequent
buildpacks.

To build a sample app locally with this CNB using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/nginx
pack build my-app --buildpack gcr.io/paketo-buildpacks/nginx \
  --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/nginx)
for how to run the app.

**NOTE: Though the example above uses the Paketo Base builder, this buildpack is
also compatible with the Paketo Full builder.**

{{< table_of_contents >}}

## Supported Dependencies

The NGINX Paketo Buildpack supports several versions of NGINX.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/nginx/releases).

## Specifying an NGINX Version

The NGINX CNB (Cloud Native Buildpack) allows you to specify a version of NGINX to use during
deployment. This version can be specified in a number of ways, including
through `buildpack.yml`. When specifying a
version of the NGINX engine, you must choose a version that is available
within the buildpack.

Specifying a version of `nginx` is not required. In the case that it is not
specified, the buildpack will provide the default version listed in the release
notes.

### Using buildpack.yml

To configure the buildpack to use NGINX v1.17.9 when deploying your app, for example,
include the values below in your `buildpack.yml` file:

{{< code/copyable >}}
nginx:
  # this allows you to specify a version constraint for the `NGINX` dependency
  # any valid semver constaints (e.g. 1.* and 1.17.*) are also acceptable
  #
  # you can also specify "mainline" or "stable"
  version: 1.17.9
{{< /code/copyable >}}

## Configurations
The NGINX buildpack supports two app configurations:

1. When an `nginx.conf` file **is present** in your app's source code, the
   buildpack will set up an NGINX server with that config.

1. When the `nginx.conf` **is not present** in the app's source code, the
   buildpack simply provides the NGINX dependency to subsequent buildpacks
   without actually setting up a server.

## Data driven templates

The NGINX buildpack supports data driven templates for nginx config. You can
use templated variables like `{{port}}`, `{{env "FOO"}}` and `{{module
"ngx_stream_module"}}` in your `nginx.conf` to use values known at launch time.

A usage example can be found in the [`samples` repository under the `nginx`
directory](https://github.com/paketo-buildpacks/samples/tree/main/nginx).

### PORT

Use `{{port}}` to dynamically set the port at which the server will accepts requests. At launch time, the buildpack will read the value of `$PORT` to set the value of `{{port}}`.

For example, to set an NGINX server to listen on `$PORT`, use the following in your `nginx.conf` file:

{{< code/copyable >}}
server {
  listen {{port}};
}
{{< /code/copyable >}}

Then run the built image using the `PORT` variable set as follows:

{{< code/copyable >}}
docker run --tty --env PORT=8080 --publish 8080:8080 my-nginx-image
{{< /code/copyable >}}

### Environment Variables

This is a generic case of the `{{port}}` directive described ealier. To use the
value of any environment variable `$FOOVAR` available at launch time, use the
directive `{{env "FOOVAR"}}` in your `nginx.conf`.

For example, include the following in your `nginx.conf` file to enable or
disable gzipping of responses based on the value of `GZIP_DOWNLOADS`:

{{< code/copyable >}}
gzip {{env "GZIP_DOWNLOADS"}};
{{< /code/copyable >}}

Then run the built image using the `GZIP_DOWNLOADS` variable set as follows:

{{< code/copyable >}}
docker run --tty --env PORT=8080 --env GZIP_DOWNLOADS=off --publish 8080:8080 my-nginx-image
{{< /code/copyable >}}

### Loading dynamic modules

You can use templates to set the path to a dynamic module using the
`load_module` directive.

* To load a user-provided module named `ngx_foo_module`, provide a
  `modules/ngx_foo_module.so` file in your app directory and add the following
  to the top of your `nginx.conf` file:

{{< code/copyable >}}
{{module "ngx_foo_module"}}
{{< /code/copyable >}}

* To load a buildpack-provided module like `ngx_stream_module`, add the
  following to the top of your `nginx.conf` file. You do not need to provide an
  `ngx_stream_module.so` file:

{{< code/copyable >}}
{{module "ngx_stream_module"}}
{{< /code/copyable >}}

See the [NGINX
docs](https://nginx.org/en/docs/beginners_guide.html#conf_structure) for more
information about how to set up an `nginx.conf` file.
