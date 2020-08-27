---
title: "PHP Buildpack"
weight: 305
menu:
  main:
    parent: "buildpacks"
---

# PHP Buildpack

The [PHP CNB](//github.com/paketo-buildpacks/php) enables developers to build
PHP-based applications.

To build a sample app locally with this CNB using the `pack` CLI, run

```bash
$ git clone https://github.com/paketo-buildpacks/samples
$ cd samples/php/webserver
$ pack build my-app --buildpack gcr.io/paketo-buildpacks/php --builder gcr.io/paketo-buildpacks/builder:full
```

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/php/webserver)
for how to run the app.

## <a id="supported-dependencies"></a> Supported dependencies

See [PHP Buildpack releases](https://github.com/paketo-buildpacks/php/releases)
for a full list of dependencies that are used by the buildpack.

## <a id="specifying-php-version"></a> Specifying a PHP Version

The PHP Dist CNB allows you to specify a version of PHP to use during
deployment. This version can be specified in a number of ways, including
through `buildpack.yml` or `composer.json` files. When specifying a
version of PHP, you must choose a version that is available
within the buildpack.

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `buildpack.yml`, `composer.json`.

### <a id='buildpack-yml'></a> Using buildpack.yml

To configure the buildpack to use PHP version when deploying your app,
include the values like below in your `buildpack.yml` file. Any valid semver
constraints are acceptable.

```
---
php:
  version: 7.2.*
```

### <a id=''></a> Using composer.json

If your apps use `composer`, you can specify the PHP version your apps use
during deployment by configuring the `require` field in the `composer.json`
file. To configure the buildpack to use PHP v7.1 or greater when deploying your
app, include the values below in your `composer.json` file:

```
{
  "require": {
    "php": ">=7.1"
  }
}
```

If your app has a `composer.lock` file, the buildpack will use
the php version defined there.

## <a id="composer-configuration"></a> Composer Configuration

The following options are configurable in the app's `buildpack.yml`

```yaml
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
 ```
## <a id="web-server"></a> Web Server Configuration

The PHP buildpack supports the use of 3 different web servers:

 - PHP built-in Web Server
 - Apache HTTP Web Server
 - Nginx Web Server

You can configure the webserver using `buildpack.yml` as follows:

 ```yaml
 php:

  # options are: php-server, httpd, nginx. default: php-server
  webserver: php-server
 ```

 If you're using `httpd` or `nginx`, a suitable `httpd.conf` or `nginx.conf`
 will be generated for you by the buildpack.

 You can also provide additional configurations like follows:

 ```yaml
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
```

## <a id="vendoring-composer-packages"></a> Vendoring composer packages

If your php app that uses `composer` has a valid `vendor` directory, then
the buildpack will not download those packages. It will instead use the the
packages location in the `vendor` directory.

## <a id="environment-variables"></a> Buildpack-Set Environment Variables

The PHP CNB sets a number of environment variables during the `build` and
`launch` phases of the app lifecycle. The sections below describe each
environment variable and its impact on your app. 

### <a id="env-var-app-root"></a> APP_ROOT

* Set by: `httpd` buildpack
* Phases: `launch`
* Value: path of app source

### <a id="env-var-server-root"></a> SERVER_ROOT

* Set by: `httpd` buildpack
* Phases: `launch`
* Value: path of the httpd installation

### <a id="env-var-mibsdir"></a> MIBDIRS

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: See [php documentation](https://www.php.net/manual/en/snmp.installation.php)

### <a id="env-var-path"></a> PATH

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: path to the php executable

### <a id="env-var-phpapi"></a> PHP_API

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: internl api version (YYYYMMDD)

### <a id="env-var-phpextensiondir"></a> PHP_EXTENSION_DIR

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: location of directory with dynamic libraries for extensions

### <a id="env-var-phphome"></a> PHP_HOME

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: location of php installation
