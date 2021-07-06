---
title: "PHP Buildpack"
weight: 328
menu:
  main:
    parent: "howto"
aliases:
  - /docs/buildpacks/language-family-buildpacks/php/
---

The [PHP Paketo Buildpack](https://github.com/paketo-buildpacks/php) enables developers to build
PHP-based applications.

To build a sample app locally with this CNB using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/php/webserver
pack build my-app --buildpack gcr.io/paketo-buildpacks/php \
  --builder paketobuildpacks/builder:full
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/php/webserver)
for how to run the app.

**NOTE: The Paketo Full builder is required because PHP relies on operating
system libraries only present in the Full builder.**


## Supported Dependencies

The PHP Paketo Buildpack supports several versions of PHP.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/php/releases).

## Specifying a PHP Version

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

## Composer Configuration

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

  # if included, will run `composer global` with with specified arguments
  install_global: ["list", "of", "install", "options"]
{{< /code/copyable >}}

## Web Server Configuration

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

## Vendoring composer packages

If your php app that uses `composer` has a valid `vendor` directory, then
the buildpack will not download those packages. It will instead use the the
packages location in the `vendor` directory.

## Configuring custom .ini files

If you like to configure custom .ini files in addition to the `php.ini`
provided by the buildpack, you can create a directory named `.php.ini.d` at the
root of your app and put your custom ini files there. See
[`PHP_INI_SCAN_DIR`](https://paketo.io/docs/buildpacks/language-family-buildpacks/php/#php_ini_scan_dir)
in the Variables section below.

## Buildpack-Set Environment Variables

The PHP CNB sets a number of environment variables during the `build` and
`launch` phases of the app lifecycle. The sections below describe each
environment variable and its impact on your app.

### APP_ROOT

* Set by: `httpd` buildpack
* Phases: `launch`
* Value: path of app source

### SERVER_ROOT

* Set by: `httpd` buildpack
* Phases: `launch`
* Value: path of the httpd installation

### MIBDIRS

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: See [php documentation](https://www.php.net/manual/en/snmp.installation.php)

### PATH

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: path to the php executable

### PHP_API

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: internl api version (YYYYMMDD)

### PHP_EXTENSION_DIR

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: location of directory with dynamic libraries for extensions

### PHP_HOME

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: location of php installation

### PHP_INI_SCAN_DIR

* Set by: `php-web` buildpack
* Phases: `build` and `launch`
* Value: `<APP-ROOT>/.php.ini.d`
