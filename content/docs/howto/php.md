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

## Install a Specific PHP Version

The PHP Dist CNB allows you to specify a version of PHP to use during
deployment. This version can be specified in a number of ways, including
through `buildpack.yml` or `composer.json` files. When specifying a
version of PHP, you must choose a version that is available
within the buildpack.

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `buildpack.yml`, `composer.json`.

### Using buildpack.yml

To configure the buildpack to use PHP version when deploying your app,
include the values like below in your `buildpack.yml` file. Any valid semver
constraints are acceptable.

{{< code/copyable >}}
---
php:
  version: 7.2.*
{{< /code/copyable >}}

### Using composer.json

If your apps use `composer`, you can specify the PHP version your apps use
during deployment by configuring the `require` field in the `composer.json`
file. To configure the buildpack to use PHP v7.1 or greater when deploying your
app, include the values below in your `composer.json` file:

{{< code/copyable >}}
{
  "require": {
    "php": ">=7.1"
  }
}
{{< /code/copyable >}}

If your app has a `composer.lock` file, the buildpack will use
the php version defined there.

## Configure Composer

The following options are configurable in the app's `buildpack.yml`

{{< code/copyable >}}
composer:
  # this allows you to specify a version constaint for composer
  # any valid semver constaints (e.g. 1.* and 1.10.*) are also acceptable
  version: 1.10.x

  # a list of command line install options for composer
  # default: ["--no-dev"]
  install_options: ["--no-dev"]

  # default: vendor
  vendor_directory: vendor

  # directory where composer.json can be found
  # default is app root
  json_path: composer

  # if included, will run `composer global` with specified arguments
  install_global: ["list", "of", "install", "options"]
{{< /code/copyable >}}

## Select a Web Server

The PHP buildpack supports the use of 3 different web servers:

 - PHP built-in Web Server
 - Apache HTTP Web Server
 - Nginx Web Server

You can configure the webserver using `buildpack.yml` as follows:

{{< code/copyable >}}
php:
  # options are: php-server, httpd, nginx. default: php-server
  webserver: php-server
{{< /code/copyable >}}

 If you're using `httpd` or `nginx`, a suitable `httpd.conf` or `nginx.conf`
 will be generated for you by the buildpack.

 You can also provide additional configurations like follows:

{{< code/copyable >}}
# buildpack.yml
php:
  # directory where web app code is stored
  # default: htdocs
  webdirectory: htdocs

  # directory where library code is stored
  # default: lib
  libdirectory: lib

  # cli script to use
  # no default
  script:

  # default: admin@localhost
  serveradmin: admin@localhost
{{< /code/copyable >}}

## Vendor composer packages

If your php app that uses `composer` has a valid `vendor` directory, then
the buildpack will not download those packages. It will instead use the
packages location in the `vendor` directory.

## Configure custom .ini files

If you like to configure custom .ini files in addition to the `php.ini`
provided by the buildpack, you can create a directory named `.php.ini.d` at the
root of your app and put your custom ini files there. See
[`PHP_INI_SCAN_DIR`]({{< ref "docs/reference/php-reference#php_ini_scan_dir" >}})
in the Variables section below.

## Install a Custom CA Certificate
PHP buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates]({{< ref "/docs/howto/configuration#ca-certificates" >}})
section of our configuration docs.

## Override the Start Process Set by the Buildpack
PHP buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles]({{< ref "/docs/howto/configuration#procfiles" >}}) section
of our configuration docs.

## Set Environment Variables for App Launch Time
PHP buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Add Custom Labels to the App Image
PHP buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels]({{< ref "/docs/howto/configuration#applying-custom-labels" >}})
section of our configuration docs.
