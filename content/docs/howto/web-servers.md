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

{{% howto_exec_summary bp_name="Paketo HTTPD Buildpack" bp_repo="https://github.com/paketo-buildpacks/httpd" reference_docs_path="/docs/reference/httpd-reference" %}}

### Build a Sample App
To build a sample app locally with this CNB using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/httpd
pack build my-app --buildpack paketo-buildpacks/httpd \
  --builder paketobuildpacks/builder:full
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/web-servers)
for how to run the app.

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

### Automatically Generate an `httpd.conf`

The Apache HTTPD Server Buildpack supports building static
applications that do not include an  `httpd.conf`. When the `BP_WEB_SERVER`
environment variable is set to `httpd`, the buildpack will generate an
`http.conf` during the build process.

{{< code/copyable >}}
BP_WEB_SERVER=httpd
{{< /code/copyable >}}

It is possible to configure the generated `httpd.conf` in several ways. Each
option is configurable with an environment variable or service binding, as seen
below.

#### Set the Root Directory for Static Files
The [`BP_WEB_SERVER_ROOT`][httpd/bp-web-server-root] variable allows you to
modify the location of the static files served by the web server. Its default
value is `/workspace/public`. Set the `BP_WEB_SERVER_ROOT` variable to an
absolute file path or a file path relative to `/workspace`. For example,
setting `BP_WEB_SERVER_ROOT=my-build-directory` changes the file path of served
files to `/workspace/my-build-directory`.

{{< code/copyable >}}
BP_WEB_SERVER_ROOT=htdocs
{{< /code/copyable >}}

#### Enable Push-State Routing
The `BP_WEB_SERVER_ENABLE_PUSH_STATE` variable enables push state routing
functionality. This is useful for single-page web applications.

{{< code/copyable >}}
BP_WEB_SERVER_ENABLE_PUSH_STATE=true
{{< /code/copyable >}}

#### Redirect HTTP Requests to HTTPS
The `BP_WEB_SERVER_FORCE_HTTPS` variable enables enforcing HTTPS for server
connections. HTTP requests will be redirected to the corresponding HTTPS
endpoint.

{{< code/copyable >}}
BP_WEB_SERVER_FORCE_HTTPS=true
{{< /code/copyable >}}

#### Set Up Basic Authentication
You are able to provide basic authentication credentials via a [service
binding][service-binding] of type `htpasswd` that specifies the contents of a
`.htpasswd` file. The service binding should have the following directory
structure:

```plain
binding
└── type
└── .htpasswd
```

### Start an HTTPD Server at App Launch Time

Include an `httpd.conf` file in your application's source code or set
`BP_WEB_SERVER=httpd` in the build environment to automatically generate one.
The HTTPD Paketo buildpack will install the Apache HTTP Server binary _and_
configure it to start when the app image launches.

## NGINX

{{% howto_exec_summary bp_name="Paketo NGINX Buildpack" bp_repo="https://github.com/paketo-buildpacks/nginx" reference_docs_path="/docs/reference/nginx-reference" %}}

### Build a Sample App
To build a sample app locally with this CNB using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/nginx
pack build my-app --buildpack paketo-buildpacks/nginx \
  --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/web-servers)
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

### Automatically Generate an `nginx.conf`

The NGINX Buildpack supports building static
applications that do not include an  `nginx.conf`. When the `BP_WEB_SERVER`
environment variable is set to `nginx`, the buildpack will generate an
`nginx.conf` during the build process.

{{< code/copyable >}}
BP_WEB_SERVER=nginx
{{< /code/copyable >}}

It is possible to configure the generated `nginx.conf` in several ways. Each
option is configurable with an environment variable or service binding, as seen
below.

#### Set the Root Directory for Static Files
The [`BP_WEB_SERVER_ROOT`][nginx/bp-web-server-root] variable allows you to
modify the location of the static files served by the web server. Its default
value is `/workspace/public`. Set the `BP_WEB_SERVER_ROOT` variable to an
absolute file path or a file path relative to `/workspace`. For example,
setting `BP_WEB_SERVER_ROOT=my-build-directory` changes the file path of served
files to `/workspace/my-build-directory`.

{{< code/copyable >}}
BP_WEB_SERVER_ROOT=htdocs
{{< /code/copyable >}}

#### Enable Push-State Routing
The `BP_WEB_SERVER_ENABLE_PUSH_STATE` variable enables push state routing
functionality. This is useful for single-page web applications.

{{< code/copyable >}}
BP_WEB_SERVER_ENABLE_PUSH_STATE=true
{{< /code/copyable >}}

#### Redirect HTTP Requests to HTTPS
The `BP_WEB_SERVER_FORCE_HTTPS` variable enables enforcing HTTPS for server
connections. HTTP requests will be redirected to the corresponding HTTPS
endpoint.

{{< code/copyable >}}
BP_WEB_SERVER_FORCE_HTTPS=true
{{< /code/copyable >}}

#### Set Up Basic Authentication
You are able to provide basic authentication credentials via a [service
binding][service-binding] of type `htpasswd` that specifies the contents of a
`.htpasswd` file. The service binding should have the following directory
structure:

```plain
binding
└── type
└── .htpasswd
```

### Start an NGINX Server at App Launch Time

Include an `nginx.conf` file in your application's source code or set
`BP_WEB_SERVER=nginx` in the build environment to automatically generate one.
The NGINX Paketo buildpack will install the NGINX binary _and_ configure it to
start when the app image launches.

### Configure the NGINX Server with Launch-time Values

The NGINX buildpack supports data driven templates for nginx config. You can
use templated variables like `{{port}}`, `{{env "FOO"}}` and `{{module
"ngx_stream_module"}}` in your `nginx.conf` to use values known at launch time.

A usage example can be found in the [`samples` repository under the `web-servers/nginx-sample`
directory](https://github.com/paketo-buildpacks/samples/tree/main/web-servers/nginx-sample).

#### PORT

Use `{{port}}` to dynamically set the port at which the server will accepts
requests. At launch time, the buildpack will read the value of `$PORT` to set
the value of `{{port}}`.

For example, to set an NGINX server to listen on `$PORT`, use the following in
your `nginx.conf` file:

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

This is a generic case of the `{{port}}` directive described earlier. To use the
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

## Build and Serve a Frontend Framework App

The Paketo Web Servers buildpack combines buildpacks for Node.js with
buildpacks for Apache HTTP Server and NGINX. As a result, it can build
JavaScript source code into production-ready static assets, then automatically
configure a web server to serve those assets. Check the Paketo samples
repository for an example [React app][sample/javascript-frontend] with build
instructions.

1. Define a script under the `"scripts"` property of your `package.json` that
   builds your production-ready static assets. Most frameworks bootstrap this
   automatically. For React, it's `"build"`.

2. Find out where static assets are stored after the build script runs. It'll
   be a directory under the root of the app directory. For React, this is
   `./build` by default.

3. Select which web server to use: NGINX or HTTPD.

4. **[NGINX]** If you chose HTTPD, **skip to step 5**.  Use environment
   variables to configure the server. `BP_NODE_RUN_SCRIPTS` should be set to
   the name of the _build script_ from step 1. `BP_WEB_SERVER_ROOT` should be
   set to the build _output directory_ from step 2. To (optionally) further
   adjust the behaviour of the NGINX server, see the NGINX How-to
   [guides][nginx/configure].
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack build frontend-app --buildpack paketo-buildpacks/web-servers \
                          --env BP_NODE_RUN_SCRIPTS=build \
                          --env BP_WEB_SERVER=nginx \
                          --env BP_WEB_SERVER_ROOT=build
{{< /code/copyable >}}
<!-- spellchecker-enable -->

5. **[HTTPD]** If you chose NGINX, **skip to step 6**. Use environment
   variables to configure the server. `BP_NODE_RUN_SCRIPTS` should be set to
   the name of the _build script_ from step 1. `BP_WEB_SERVER_ROOT` should be
   set to the build _output directory_ from step 2. To (optionally) further
   adjust the behaviour of the HTTPD server, see the HTTPD How-to
   [guides][httpd/configure].
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack build frontend-app --buildpack paketo-buildpacks/web-servers \
                          --env BP_NODE_RUN_SCRIPTS=build \
                          --env BP_WEB_SERVER=httpd \
                          --env BP_WEB_SERVER_ROOT=build
{{< /code/copyable >}}
<!-- spellchecker-enable -->

6. You're done! You can run the resulting app container to serve your frontend app with
   an automatically generated server configuration using the following command:
{{< code/copyable >}}
docker run --tty --env PORT=8080 --publish 8080:8080 frontend-app
{{< /code/copyable >}}

<!-- spellchecker-disable -->
<!-- References -->
[httpd/bp-web-server-root]:{{< ref "docs/reference/httpd-reference#bp_web_server_root" >}}
[httpd/configure]:{{< ref "docs/howto/web-servers#automatically-generate-an-httpdconf" >}}

[nginx/bp-web-server-root]:{{< ref "docs/reference/nginx-reference#bp_web_server_root" >}}
[nginx/configure]:{{< ref "docs/howto/web-servers#automatically-generate-an-nginxconf" >}}

[sample/javascript-frontend]:https://github.com/paketo-buildpacks/samples/tree/main/web-servers/javascript-frontend-sample

[service-binding]:{{< ref "docs/howto/configuration#bindings" >}}
<!-- spellchecker-enable -->
