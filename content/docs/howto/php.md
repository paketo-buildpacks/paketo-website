---
title: "How to Build PHP Apps with Paketo Buildpacks"
weight: 328
menu:
  main:
    parent: "howto"
    name: "PHP"
aliases:
  - /docs/buildpacks/language-family-buildpacks/php/
---

{{% howto_exec_summary bp_name="Paketo PHP Buildpack" bp_repo="https://github.com/paketo-buildpacks/php" reference_docs_path="/docs/reference/php-reference" %}}

## Build a Sample App
To build a sample app locally with this CNB using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/php/webserver
pack build my-app --buildpack paketo-buildpacks/php \
  --builder paketobuildpacks/builder:full
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/php/webserver)
for how to run the app.

**NOTE: The Paketo Full builder is required because PHP relies on operating
system libraries only present in the Full builder.**

## Configure PHP

### Install a Specific PHP Version

The [PHP Dist CNB][bp/php-dist] allows you to specify a version of PHP to use during
deployment. This version can be specified in a number of ways, including
through the `BP_PHP_VERSION` environment variable, `composer.lock`, or `composer.json` file. When specifying a
version of PHP, you must choose a version that is available
within the buildpack. The supported versions can be found on the Paketo PHP
Dist [releases page][release/php-dist].

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `BP_PHP_VERSION`, `composer.json`, `composer.lock`.

#### Set the version via `BP_PHP_VERSION`

To configure the buildpack to use a specific PHP version when deploying your app, set the
following environment variable at build time, either directly (ex. `pack build
my-app --env BP_PHP_VERSION=8.0.0`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
BP_PHP_VERSION="8.0.0"
{{< /code/copyable >}}

#### Set the version via a `composer.json` file

If your apps use `composer`, you can specify the PHP version your apps use
during deployment by configuring the `require` field in the `composer.json`
file. To configure the buildpack to use PHP v8.0 or greater when deploying your
app, include the values below in your `composer.json` file:

{{< code/copyable >}}
{
  "require": {
    "php": ">=8.0"
  }
}
{{< /code/copyable >}}

If your app has a `composer.lock` file, the buildpack will use
the php version defined there.

#### Unsupported: Using buildpack.yml

Specifying the PHP version through `buildpack.yml`  has been
removed as of PHP language family buildpack v1.0.0.  To migrate from using
`buildpack.yml` please set the `$BP_PHP_VERSION` environment variable.

### Configure the PHP library directory

To add directories to the [`include_path`](https://www.php.net/manual/en/ini.core.php#ini.include-path) set in the default `php.ini`, buildpack users can set the
`BP_PHP_LIB_DIR` environment variable at build-time.
{{< code/copyable >}}
  pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_PHP_LIB_DIR=some-lib-directory
{{< /code/copyable >}}

### Configure PHP with a custom `.ini` file
If you'd like to configure custom `.ini` files in addition to the default
`php.ini` provided by the [PHP Dist buildpack][bp/php-dist], you can provide
your own configuration file in the application source directory under a
directory named `.php.ini.d/`.  The path to the configuration you add will be
appended onto the `PHP_INI_SCAN_DIR` during the build process, for use by PHP
at runtime. Check out the reference docs about the
[`PHP_INI_SCAN_DIR`]({{< ref "docs/reference/php-reference#php_ini_scan_dir"
>}}) for more information about defaults. In short, if unset, the
`PHP_INI_SCAN_DIR` will include the path to default PHP `.ini` configuration
set by the PHP dist buildpack, in addition to configuration added by session
handler buildpacks if applicable.

### Use Extensions
There are two ways to enable extensions when using the Paketo PHP Buildpack.
The only extensions available for usage at this time are the ones that come
with the distribution of PHP.

#### Enable extensions through a custom `.ini` snippet
An `.ini` snippet is a valid PHP configuration file. The buildpacks will look
for any user-provided snippets under `<APP-ROOT>/.php.ini.d/*.ini`, as
mentioned in the [Configure PHP with a custom `.ini` file section]({{< ref
"docs/reference/php-reference#configure-php-with-a-custom-ini-file">}}).

An example snippet could look like:
{{< code/copyable >}}
extension=bz2.so
extension=curl.so
{{< /code/copyable >}}

#### Enable extensions through a `composer.json`
If you are using Composer (see section below on how to do this) as a package
manager, you can specify extensions through the `composer.json` file.

An example of a `composer.json` file with extensions specified would look like:
{{< code/copyable >}}
{
    "require": {
        "php": ">=7.1",
        "ext-bz2": "*",
        "ext-curl": "*",
    },
}
{{< /code/copyable >}}

## Configure Composer
The [Composer][bp/composer] and [Composer Install][bp/composer-install]
buildpacks allow for user-set configuration options for Composer.


### Set the Composer version
To define a version of Composer to use, set `BP_COMPOSER_VERSION` at build
time. A supported version must be selected. The supported versions can be found
on the Paketo Composer [releases page][release/composer]. With the `pack` CLI
this looks like
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_COMPOSER_VERSION="2.3.1"
{{< /code/copyable >}}

### Set install options
To define a command line option for `composer install` to run, set the
`BP_COMPOSER_INSTALL_OPTIONS` environment variable at build-time to a
space-separated list of flags.

{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_COMPOSER_INSTALL_OPTIONS="--no-dev --prefer-install=auto"
{{< /code/copyable >}}

To define **global** `composer install` configurations, set the
`BP_COMPOSER_INSTALL_GLOBAL` environment variable at build-time to a
space-separated list of global installation options.

{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_COMPOSER_INSTALL_GLOBAL="friendsofphp/php-cs-fixer squizlabs/php_codesniffer=*"
{{< /code/copyable >}}

### Set a custom Composer vendor directory
To define a custom vendoring location for Composer packages, users can set the
`COMPOSER_VENDOR_DIR` environment variable at build-time. It is a
[Composer-native environment
variable](https://getcomposer.org/doc/03-cli.md#composer-vendor-dir) setting.
It must be set as a relative path under the application source directory root.

{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/php \
  --env COMPOSER_VENDOR_DIR="vendor"
{{< /code/copyable >}}

### Set the `composer.json` path
To define a custom `composer.json` path, users can set [Composer-native
environment variable
`COMPOSER`](https://getcomposer.org/doc/03-cli.md#composer) at build-time. The
path must be relative to the project root.

{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/php \
  --env COMPOSER="some-other-composer.json"
{{< /code/copyable >}}

### Set Composer authentication
To set up authentication for Composer, the Composer-native environment variable
`COMPOSER_AUTH` can be set as a JSON-formatted object containing objects
defined in the [Composer
docs](https://getcomposer.org/doc/03-cli.md#composer-auth).

{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/php \
  --env COMPOSER_AUTH='{"http-basic": <some-creds>}'
{{< /code/copyable >}}

## Select a web server

The PHP buildpack supports the use of 3 different web servers:

 - PHP Built-in Web Server (default)
 - Apache HTTPD Web Server
 - Nginx Web Server

You can configure which web server to use by setting the `BP_PHP_SERVER`
environment variable at build-time.  The setting options are `php-server`,
`httpd`, `nginx`, with the default value of `php-server` if unset. The PHP
Built-in Server buildpack will only pass detection if there is a `*.php` file
in the web directory of the application.

{{< code/copyable >}}
  pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_PHP_SERVER="php-server"
{{< /code/copyable >}}

#### Unsupported: Using buildpack.yml

Specifying the PHP version through `buildpack.yml` configuration has been
removed as of PHP language family buildpack v1.0.0.  To migrate from using
`buildpack.yml` please set the environment variable equivalents instead.

## Set server configuration
If you're using `httpd` or `nginx`, a suitable `httpd.conf` or `nginx.conf`
will be generated for you by the buildpack and made available in a layer.
Check out the [PHP Reference documentation]({{< ref
"docs/reference/php-reference" >}}) for an enumeration of the defaults set for
`httpd` and `nginx`.

Additional configuration can also be provided via environment variables.

### Provide your own web server configuration file
If either `httpd` or `nginx` are the selected web server via the
`BP_PHP_SERVER` environment variable, users can provide their own
configurations in the form of a server-specific configuration file.

#### Provide `httpd` specific configuration
To provide your own HTTPD configuration, place `*.conf` files in your
application source directory under `<app-directory>/.httpd.conf.d/*.conf`. This
is helpful in the event that you want to set custom settings that are not
configurable via environment variables in the PHP HTTPD buildpack.

#### Provide `nginx` specific configuration
To provide your own NGINX configuration, place configuration files in your
application source directory under `<app-directory>/.nginx.conf.d/`.
Server-specific configuration should be inside a file named  `*-server.conf`,
and HTTP configuration should be inside a file with the naming structure
`*-http.conf`. This is helpful in the event that you want to set custom
settings that are not configurable via environment variables in the PHP Nginx
buildpack. Check out [Nginx documentation][external/nginx-conf-docs] for what
settings can be applied to server and HTTP blocks.


### Configure FPM settings
The PHP buildpack includes support for the [PHP FastCGI Process
Manager][external/fpm] (FPM) when used in conjunction with a web server. In
this case, the [PHP FPM buildpack][bp/fpm] will generate FPM configuration for
you to work with the web server of choice. On top of setting up FPM
configuration, the buildpack will consider configuration from user provided
sources (see `Override Default FPM Configuration` section below)

Check out the [PHP Reference documentation]({{< ref
"docs/reference/php-reference" >}}) for an enumeration of the defaults set for
FPM.

#### Override Default FPM Configuration
Users can provide FPM configuration by providing a configuration file in the
application source directory under `<app-directory>/.php.fpm.d/*.conf`.

User-provided configuration will be considered the highest precedence source of
configuration, and should be provided in an `.ini` compliant format in order to
be considered by PHP FPM.

### Configure the web directory
The top-level directory where a web server finds files to serve is
the _web directory_.  In the PHP buildpack, when the web server is 
HTTPD or NGINX, the web directory defaults to `htdocs.` When the web server is
the PHP built-in server, the web directory defaults to `/workspace`.

In all cases, the default web directory can be overridden by setting the
`BP_PHP_WEB_DIR` environment variable at build-time. The value
provided should be a path relative to the application root.

Note: The PHP built-in server will only pass
detection if a `*.php` file is found inside of the web directory.

{{< code/copyable >}}
  pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_PHP_WEB_DIR="some-web-dir"
{{< /code/copyable >}}

### Enable/disable HTTPS Redirect
The HTTPS redirect feature is enabled by default in the `nginx` and `httpd`
cases. It can be disabled by setting the
`BP_PHP_ENABLE_HTTPS_REDIRECT` environment variable to `false` at build-time.
When this feature is enabled, the server will redirect HTTP requests to HTTPS.
Check out server-provided documentation for details on what this entails for
each case.

{{< code/copyable >}}
  pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_PHP_ENABLE_HTTPS_REDIRECT=false
{{< /code/copyable >}}

### Configure server admin for HTTPD
The server admin in the `httpd` case can be overridden from the default of
`admin@localhost` via the `BP_PHP_SERVER_ADMIN` environment variable at
build-time.

{{< code/copyable >}}
  pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_PHP_SERVER_ADMIN=some-admin@localhost
{{< /code/copyable >}}

### Override the start process
By default, the buildpacks will determine the right start command to run
depending on the server that is being used. A user can override the start
command by using the [Paketo Procfile buildpack][bp/procfile]. Check out the
[Procfiles]({{< ref "/docs/howto/configuration#procfiles" >}}) section
of our configuration docs for details on how to use the buildpack.

## Enable a session handler via service bindings
The PHP Buildpack supports using session handlers for
[Memcached](https://memcached.org/) and [Redis](https://redis.io/) instances
via the [PHP Memcached Session Handler Buildpack][bp/memcached] and the [PHP
Redis Session Handler Buildpack][bp/redis].
Check out the [PHP session handler documentation][external/php-session-handler]
for more information on what a PHP session handler is. 

In order to configure a session handler for either Redis or Memcached the user
must provide a [service binding]({{< ref "/docs/howto/configuration#bindings"
>}}).

### Enable the session handler for Redis
To configure a Redis instance session handler, the provided service binding
should contain the following:

| Binding File | Value |  Required | Description |
| -------- | -------- | -------- | ----------- |
| `type`   | `php-redis-session` | yes     | Binding type
| `host` or `hostname`   | Default: 127.0.0.1 | no     | Redis instance IP address
| `port`  | Default: 6379 | no     | Redis instance port
| `password` | Omitted if unset | no     | Redis instance password


When performing a build with the `pack` CLI, passing the service binding will look like the following:

{{< code/copyable >}}
  pack build my-app --buildpack paketo-buildpacks/php \
  --env SERVICE_BINDING_ROOT=/bindings \
  --volume <absolute-path-to-binding>:/bindings/php-redis-session
{{< /code/copyable >}}

### Enable the session handler for Memcached
To configure a Memcached instance session handler, the provided service binding
should contain the following:

| Binding File | Value |  Required | Description |
| -------- | -------- | -------- | ----------- |
| `type`   | `php-memcached-session` | yes     | Binding type
| `servers`   | Default: 127.0.0.1 | no     | Memcached instance IP address
| `username`  | Omitted if unset | no     | Memcached instance username
| `password` | Omitted if unset | no     | Memcached instance password


When performing a build with the `pack` CLI, passing the service binding will
look like the following:

{{< code/copyable >}}
  pack build my-app --buildpack paketo-buildpacks/php \
  --env SERVICE_BINDING_ROOT=/bindings \
  --volume <absolute-path-to-binding>:/bindings/php-memcached-session
{{< /code/copyable >}}




## Install a custom CA certificate
Users of the PHP buildpack can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates]({{< ref "/docs/howto/configuration#ca-certificates" >}})
section of our configuration docs.

## Set environment variables for app launch time
PHP buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Add custom labels to the app image
PHP buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels]({{< ref "/docs/howto/configuration#applying-custom-labels" >}})
section of our configuration docs.

## Run a build with `DEBUG` logging
Users of the PHP buildpack can access extra debug logs during the image build process by setting the `BP_LOG_LEVEL`
environment variable to `DEBUG` at build-time.
{{< code/copyable >}}
  pack build my-app --buildpack paketo-buildpacks/php \
  --env BP_LOG_LEVEL=DEBUG
{{< /code/copyable >}}

## Access the software bill of materials
The PHP buildpack includes support for the software bill of materials (SBOM).
Check out the [SBOM how-to documentation]({{< ref "/docs/howto/sbom" >}}) for
details on how to access the SBOM supplied by the buildpacks.

<!-- buildpacks -->
[bp/php-dist]:https://github.com/paketo-buildpacks/php-dist
[bp/composer]:https://github.com/paketo-buildpacks/composer
[bp/fpm]:https://github.com/paketo-buildpacks/php-fpm
[bp/procfile]:https://github.com/paketo-buildpacks/procfile
[bp/composer-install]:https://github.com/paketo-buildpacks/composer-install
[bp/memcached]:https://github.com/paketo-buildpacks/php-memcached-session-handler
[bp/redis]:https://github.com/paketo-buildpacks/php-redis-session-handler
<!-- releases -->
[release/php-dist]:https://github.com/paketo-buildpacks/php-dist/releases
[release/composer]:https://github.com/paketo-buildpacks/composer/releases
<!-- external -->
[external/fpm]:https://www.php.net/manual/en/install.fpm.php
[external/php-session-handler]:https://www.php.net/manual/en/class.sessionhandler.php
[external/nginx-conf-docs]:https://www.nginx.com/resources/wiki/start/topics/examples/full/
