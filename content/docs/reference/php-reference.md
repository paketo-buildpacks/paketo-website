---
title: "PHP Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: php-reference
    name: "PHP Buildpack"
---

{{% reference_exec_summary bp_name="Paketo PHP Buildpack" bp_repo="https://github.com/paketo-buildpacks/php" howto_docs_path="/docs/howto/php" %}}

## Supported Dependencies

The Paketo PHP Buildpack supports several versions of PHP and Composer.
For more details on the specific versions supported in a given buildpack
version, see the [release notes][bp/php].

## Behavior
The Paketo PHP Buildpack is a [composite buildpack][paketo/composite-buildpack]
designed to build applications written in PHP.

### Package Management

With the PHP CNB, the only option for package management is
[Composer][external/composer].

The [Composer buildpack][bp/composer] will install `composer` as the package manager, and if a PHP
application contains a `composer.json` (and preferably a `composer.lock` file) packages
are installed by running `composer install` by the [Composer Install
buildpack][bp/composer-install]. Packages installed will be available in a
`vendor` directory in the application source directory, and will be cached for
rebuilds.

### Running With Webservers
The buildpacks within the PHP CNB will set up basic configuration for
FPM, HTTPD, Nginx, or the built-in PHP webserver. Web server
choice is set by the user via environment variable (see PHP How To
documentation), and user-provided configurations will be considered as outlined
below.

##  Software Bill of Materials
The PHP buildpack supports the full [software bill of materials]({{< ref
"docs/concepts/sbom" >}}) (SBOM) in [Syft][format/syft],
[CycloneDX][format/cyclonedx], [SPDX][format/spdx], and
[Paketo-specific][format/paketo] formats.

Apps built with the buildpack that use Composer as a a package manager contain
SBOM entries that provide a full picture of the packages on the final app image
that get installed.  Additionally, there are entries for the PHP version used,
the Composer version used. Check out the [Access the Software Bill of Materials
guide]({{< ref "docs/howto/sbom" >}}) for more information about how to
retrieve the SBOM for your app image.


## Buildpack Configurations

The buildpacks in the PHP language family set default configurations, as well
as include configurations from user-provided sources. The sections below
outline the various configurations the buildpacks provide during the build process, and
the various locations that will also be considered as configuration sources.

### [PHP Distribution Buildpack][bp/php-dist] Configuration
1. The [default PHP `ini` file][bp/php-dist-ini] found from the PHP
   Distribution itself, with no modifications. It can be found on the container
   inside the PHP Distribution Buildpack layer under `/etc/php.ini`.
2. [Buildpack-specific configuration][bp/php-cnb-ini] which can be found inside the PHP
   Distribution Buildpack layer under `/etc/buildpack.ini`. This includes
   confgurations specific to the buildpack's install process and app image file
   system, such as the path to PHP extensions (`extension_dir`), the include
   path to the PHP library directory.
3. User-provided configurations from the `<APP-ROOT>/.php.ini.d` directory.

Check out the [PHP_INI_SCAN_DIR documentation section]({{< ref
"docs/reference/php-reference#php_ini_scan_dir" >}}) for more information.

### [PHP FPM Buildpack][bp/fpm] Configuration
The configuration from the PHP FPM buildpack is considered in order of
precedence, from lowest to highest, with the highest precedence configuration
sources overriding conflicting settings from lower precedence sources.

1. The [default PHP FPM setting][bp/php-dist-fpm] found from the PHP
   Distribution itself under `$PHPRC/php-fpm.d/www.conf.default`.
2. [Buildpack-specific configuration][bp/php-cnb-fpm] which includes
   configurations specific to the buildpack's role in the build process. This
   includes settings such as the default listen directive, and other features
   to make FPM work well with web servers.
3. Configuration set by other buildpacks (such as the PHP Nginx
   Buildpack [FPM configuration][bp/nginx-fpm]), which can be located at
   `/workspace/.php.fpm.bp/*.conf`.
4. User-provided configurations located from `<APP-ROOT>/.php.fpm.d/*.conf`.

### [PHP Nginx Buildpack][bp/php-nginx] Configuration
The PHP Nginx Buildpack sets up two flavours of configuration.

1. Nginx-specific FPM settings (see FPM section above) is added to work with
   FPM.
2. [Basic Nginx configuration][bp/nginx-conf] is the `nginx.conf` file for
   running with PHP apps. See PHP how-to documentation for settings that can be
   configured via environment variables.
3. User-provided configuration files located from
   `<APP-ROOT>/.nginx.conf.d/*-server.conf` and
   `<APP-ROOT>/.nginx.conf.d/*-http.conf`.

### [PHP HTTPD Buildpack][bp/php-httpd] Configuration
1. [Basic HTTPD configuration][bp/httpd-conf] is the `httpd.conf` file for
   running with PHP apps. See PHP how-to documentation for settings that can be
   configured via environment variables.
2. User-provided configuration files located from
   `<APP-ROOT>/.httpd.conf.d/*.conf`.

### [Composer Install Buildpack][bp/composer-install] Configuration
The Composer Install Buildpack sets up configuration to be used for running
`composer` commands.

1. A Composer PHP `.ini` file is created for usage during the buildpack build
   process ONLY. It will tell Composer where to find extensions when running
   `composer-install`.
2. Platform requirement `.ini` file available on the final image under
   `/workspace/.php.ini.d/composer-extensions.ini` which will be appended onto
   the `PHP_INI_SCAN_DIR`. It wil include any `composer.json` specified
   extensions that come from running the Composer `check-platform-reqs`
   command.

## Buildpack-Set Environment Variables

The buildpacks within the [Paketo PHP language family][bp/php] set a number of
environment variables during the `build` and `launch` phases of the app
lifecycle. The sections below describe each environment variable and its impact
on your app.

### PATH

* Set by: `php-dist` and `composer-install` (`build` phase only)
* Phases: `build` and `launch`
* Value: path to the PHP executable

### PHP_INI_SCAN_DIR
* Set by: `php-dist`, `php-redis-session-handler`, and `php-memcached-session-handler` buildpacks
* Phases: `build` and `launch`
* Value: directories where PHP `ini` configuration can be found.

### PHPRC

* Set by: `php-dist` and `composer-install` (`build` phase only)
* Phases: `build` and `launch`
* Value: path to the top-level official PHP Distribution-provided `php.ini`

### PHP_API

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: internal api version (YYYYMMDD)

### PHP_EXTENSION_DIR

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: location of directory with dynamic libraries for extensions

### PHP_HOME

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: location of PHP installation


### MIBDIRS

* Set by: `php-dist` buildpack
* Phases: `build` and `launch`
* Value: See [PHP documentation](https://www.php.net/manual/en/snmp.installation.php)

### APP_ROOT

* Set by: `httpd` buildpack
* Phases: `launch`
* Value: path of app source

### SERVER_ROOT

* Set by: `httpd` buildpack
* Phases: `launch`
* Value: path of the httpd installation

### COMPOSER

* Set by: `composer-install` buildpack
* Phases: `build`
* Value: path to the `composer.json` file

### COMPOSER_HOME

* Set by: `composer-install` buildpack
* Phases: `build`
* Value: Composer home directory

### COMPOSER_VENDOR_DIRECTORY

* Set by: `composer-install` buildpack
* Phases: `build`
* Value: Composer packages vendor directory

### COMPOSER_NO_INTERACTION

* Set by: `composer-install` buildpack
* Phases: `build`
* Value: Pass the `--no-interaction` flag to Composer commands

### PHP_FPM_PATH

* Set by: `php-fpm` buildpack
* Phases: `build` and `launch`
* Value: path to the FPM configuration for usage in FPM start command

### PHP_HTTPD_PATH

* Set by: `php-httpd` buildpack
* Phases: `build` and `launch`
* Value: path to the HTTPD configuration for usage in server start command

### PHP_NGINX_PATH

* Set by: `php-nginx` buildpack
* Phases: `build` and `launch`
* Value: path to the Nginx configuration for usage in Nginx start command


## Components
| Name                                   | Required/Optional | Purpose                                               |
|----------------------------------------|-------------------|-------------------------------------------------------|
| [Paketo PHP Dist Buildpack][bp/php-dist]       | Required          | Installs the php distribution, making it available on the $PATH                       |
| [Paketo PHP FPM Buildpack][bp/fpm]            | Required          | Configures a `php-fpm.conf` config file for PHP FPM                        |
| [Paketo Composer Buildpack][bp/composer]            | Optional          | Installs the Composer tool onto the $PATH                         |
| [Paketo Composer Install Buildpack][bp/composer-install]            | Optional          | Runs `composer install`                         |
| [Paketo HTTPD Buildpack][bp/httpd]            | Optional          | Installs Apache HTTPD                         |
| [Paketo Nginx Buildpack][bp/nginx]            | Optional          | Installs Nginx                         |
| [Paketo PHP HTTPD Buildpack][bp/php-httpd]            | Optional          | Configures HTTPD to serve a PHP app                         |
| [Paketo PHP Nginx Buildpack][bp/php-nginx]            | Optional          | Configures Nginx to serve a PHP app                         |
| [Paketo PHP Builtin Server Buildpack][bp/php-builtin-server]            | Optional          | Sets a PHP built-in server start command                         |
| [Paketo PHP Redis Session Handler Buildpack][bp/redis]            | Optional          | Configures a PHP session handler for a Redis instance                         |
| [Paketo PHP Memcached Session Handler Buildpack][bp/memcached]            | Optional          | Configures a PHP session handler for a Memcached instance                        |
| [Paketo PHP Start Buildpack][bp/php-start]            | Optional          | Sets the start command to serve PHP apps with Nginx or HTTPD with FPM                         |
| [Paketo Procfile Buildpack][bp/procfile]              | Optional          | Sets a user-specified start command                   |
| [Paketo Environment Variables Buildpack][bp/env-vars] | Optional          | Sets user-specified launch-time environment variables |
| [Paketo Image Labels Buildpack][bp/image-labels]          | Optional          | Adds user-specified labels to app image metadata      |
| [Paketo CA Certificates Buildpack][bp/ca-certs]       | Optional          | Installs custom CA certificates                       |

<!-- References -->
[bp/php]:https://github.com/paketo-buildpacks/php
[bp/php-start]:https://github.com/paketo-buildpacks/php-start
[bp/fpm]:https://github.com/paketo-buildpacks/php-fpm
[bp/php-dist]:https://github.com/paketo-buildpacks/php-dist
[bp/composer-install]:https://github.com/paketo-buildpacks/composer-install
[bp/nginx]:https://github.com/paketo-buildpacks/nginx
[bp/httpd]:https://github.com/paketo-buildpacks/httpd
[bp/php-nginx]:https://github.com/paketo-buildpacks/php-nginx
[bp/php-httpd]:https://github.com/paketo-buildpacks/php-httpd
[bp/php-builtin-server]:https://github.com/paketo-buildpacks/php-builtin-server
[bp/redis]:https://github.com/paketo-buildpacks/php-redis-session-handler
[bp/memcached]:https://github.com/paketo-buildpacks/php-memcached-session-handler
[bp/composer]:https://github.com/paketo-buildpacks/composer
[bp/composer-install]:https://github.com/paketo-buildpacks/composer-install
[bp/procfile]:{{< bp_repo "procfile" >}}
[bp/image-labels]:{{< bp_repo "image-labels" >}}
[bp/env-vars]:{{< bp_repo "environment-variables" >}}
[bp/ca-certs]:{{< bp_repo "ca-certificates" >}}

[bp/php-dist-ini]:https://github.com/paketo-buildpacks/php-dist/blob/a33ea23adcb4dd0b4ae0d2a4746f570b13a1a75b/config/default.ini
[bp/php-cnb-ini]:https://github.com/paketo-buildpacks/php-dist/blob/a33ea23adcb4dd0b4ae0d2a4746f570b13a1a75b/config/buildpack.ini
[bp/php-dist-fpm]:https://github.com/paketo-buildpacks/php-fpm/blob/e605c742b1fdde7d30d67fc21360227f40fecb93/config/php-fpm-base.conf
[bp/php-cnb-fpm]:https://github.com/paketo-buildpacks/php-fpm/blob/e605c742b1fdde7d30d67fc21360227f40fecb93/config/php-fpm-buildpack.conf
[bp/nginx-fpm]:https://github.com/paketo-buildpacks/php-nginx/blob/d98ea729531efec03ede533c7e74e7093367fb33/config/nginx-fpm.conf
[bp/nginx-conf]:https://github.com/paketo-buildpacks/php-nginx/blob/d98ea729531efec03ede533c7e74e7093367fb33/config/nginx.conf
[bp/httpd-conf]:https://github.com/paketo-buildpacks/php-httpd/blob/d7be88d8def441d2fdbc03fd52773d3558ae8e14/config/httpd.conf

[paketo/composite-buildpack]:{{< ref "docs/concepts/buildpacks#composite-buildpacks" >}}

[external/composer]:https://getcomposer.org/

[format/cyclonedx]:https://cyclonedx.org/
[format/spdx]:https://spdx.dev/
[format/syft]:https://github.com/anchore/syft/tree/main/schema/json
[format/paketo]:{{< ref "docs/concepts/sbom#paketo-specific-sbom-format" >}}
