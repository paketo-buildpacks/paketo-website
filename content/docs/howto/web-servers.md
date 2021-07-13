---
title: "How to Build Web Servers with Paketo Buildpacks"
weight: 308
menu:
  main:
    parent: "howto"
    name: "Web Servers"
aliases:
  - /docs/buildpacks/language-family-buildpacks/httpd/
  - /docs/buildpacks/language-family-buildpacks/nginx/
---

This documentation explains how to use Paketo buildpacks to build applications
that run web servers like HTTPD and NGINX. These docs focus on explaining
common user workflows. For more in-depth
description of the buildpacks' behavior and configuration, see the reference documentation
for each web server buildpack.

## HTTPD

The [Paketo HTTPD Buildpack](https://github.com/paketo-buildpacks/httpd) enables
users to build apps that run an Apache HTTPD server. The following are explanations
of common HTTPD Buildpack user workflows. For more in-depth
description of the buildpack's behavior and configuration, see the HTTPD Buildpack
reference [documentation](/docs/reference/httpd-reference).

### Build a Sample App
To build a sample app locally with this CNB using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/httpd
pack build my-app --buildpack gcr.io/paketo-buildpacks/httpd \
  --builder paketobuildpacks/builder:full
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/httpd)
for how to run the app.

**NOTE: The Paketo Full builder is required because HTTPD relies on operating
system libraries only present in the Full builder.**

### Install a Specific HTTPD Version

The HTTPD CNB (Cloud Native Buildpack) allows you to specify a version of the
Apache HTTP Server to use during deployment. This version can be specified
through the `BP_HTTPD_VERSION` environment variable. When specifying a version
of the Apache HTTP Server, you must choose a version that is available within the
buildpack. The supported versions can be found [here](https://github.com/paketo-buildpacks/httpd/releases)

Specifying a version of `httpd` is not required. In the case that it is not
specified, the buildpack will provide the default version listed in the release
notes.

#### Using BP_HTTPD_VERSION

To configure the buildpack to use HTTPD v2.4.46 when deploying your app, set the
following environment variable at build time, either directly (ex. `pack build
my-app --env BP_HTTPD_VERSION=2.4.*`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
BP_HTTPD_VERSION="2.4.46"
{{< /code/copyable >}}

#### Deprecated: Using buildpack.yml

Specifying the HTTP Server version through `buildpack.yml` configuration will
be deprecated in Apache HTTP Server Buildpack v1.0.0. To migrate from using
`buildpack.yml` please set the `$BP_HTTPD_VERSION` environment variable.

### Start an HTTPD Server at App Launch Time

Include an `httpd.conf` file in your application's source code. The HTTPD Paketo buildpack
will install the Apache HTTP Server binary _and_ configure it to start when the app image
launches.

## NGINX

The [Paketo NGINX Buildpack](https://github.com/paketo-buildpacks/nginx) enables
users to build apps that run an NGINX server. The following are explanations
of common NGINX Buildpack user workflows. For more in-depth
description of the buildpack's behavior and configuration see the NGINX Buildpack
reference [documentation](/docs/reference/nginx-reference).

### Build a Sample App
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

### Install a Specific NGINX Version

The NGINX CNB (Cloud Native Buildpack) allows you to specify a version of NGINX to use during
deployment. This version can be specified in a number of ways, including
through `buildpack.yml`. When specifying a
version of the NGINX engine, you must choose a version that is available
within the buildpack.

Specifying a version of `nginx` is not required. In the case that it is not
specified, the buildpack will provide the default version listed in the release
notes.

#### Using BP_NGINX_VERSION

To configure the buildpack to use NGINX v1.19.8 when deploying your app, set the
following environment variable at build time, either directly (ex. `pack build
my-app --env BP_NGINX_VERSION=1.19.8`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
BP_NGINX_VERSION="1.19.8"
{{< /code/copyable >}}


#### Deprecated: Using buildpack.yml

Specifying the NGINX version through `buildpack.yml` configuration will be
deprecated in NGINX Server Buildpack v1.0.0.  To migrate from using
`buildpack.yml` please set the `$BP_NGINX_VERSION` environment variable.

### Start an NGINX Server at App Launch Time

Include an `nginx.conf` file in your application's source code. The NGINX Paketo
buildpack will install the NGINX binary _and_ configure it to start when the app
image launches.

### Configure the NGINX Server with Launch-time Values

The NGINX buildpack supports data driven templates for nginx config. You can
use templated variables like `{{port}}`, `{{env "FOO"}}` and `{{module
"ngx_stream_module"}}` in your `nginx.conf` to use values known at launch time.

A usage example can be found in the [`samples` repository under the `nginx`
directory](https://github.com/paketo-buildpacks/samples/tree/main/nginx).

#### PORT

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

#### Environment Variables

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

### Use Dynamic Modules at App Launch Time

You can use templates to set the path to a dynamic module using the
`load_module` directive.

  To load a user-provided module named `ngx_foo_module`, provide a
  `modules/ngx_foo_module.so` file in your app directory and add the following
  to the top of your `nginx.conf` file:

{{< code/copyable >}}
{{module "ngx_foo_module"}}
{{< /code/copyable >}}

  To load a buildpack-provided module like `ngx_stream_module`, add the
  following to the top of your `nginx.conf` file. You do not need to provide an
  `ngx_stream_module.so` file:

{{< code/copyable >}}
{{module "ngx_stream_module"}}
{{< /code/copyable >}}

See the [NGINX
docs](https://nginx.org/en/docs/beginners_guide.html#conf_structure) for more
information about how to set up an `nginx.conf` file.