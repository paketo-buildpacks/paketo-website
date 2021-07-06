---
title: "Ruby Buildpack"
weight: 332
menu:
  main:
    parent: "howto"
    name: "Ruby"
aliases:
  - /docs/buildpacks/language-family-buildpacks/ruby/
---

The [Paketo Ruby Buildpack](https://github.com/paketo-buildpacks/ruby) supports
several popular configurations for Ruby apps.

To build a sample app locally with this buildpack using the `pack` CLI, run

{{< code/copyable >}}
git clone <https://github.com/paketo-buildpacks/samples>
cd samples/ruby/puma
pack build my-app --buildpack gcr.io/paketo-buildpacks/ruby \
  --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/ruby/thin)
for how to run the app.

**NOTE: Though the example above uses the Paketo Base builder, this buildpack is
also compatible with the Paketo Full builder.**

## Supported Dependencies

The Ruby Paketo Buildpack supports several versions of
[MRI](https://www.ruby-lang.org), [Bundler](https://bundler.io/), and common
Ruby webservers and task runners.  For more details on the specific versions
supported in a given buildpack version, see the [release
notes](https://github.com/paketo-buildpacks/ruby/releases/latest).

## Specifying a Ruby Version

The Ruby Buildpack allows you to specify a version of Ruby to use during
deployment. This version can be specified via the `BP_MRI_VERSION` environment
variable or a `Gemfile`. When specifying a version of Ruby, you must choose a version that is available
within the buildpack. The supported versions can be found
[here](https://github.com/paketo-buildpacks/mri/releases/latest).

Please note that setting the Ruby version through a `buildpack.yml` file will
be deprecated in MRI Buildpack v1.0.0.

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `BP_MRI_VERSION`, `Gemfile`.

Specifying a version of Ruby is not required. In the case that is not
specified, the buildpack will provide the default version, which can be seen in
the [`buildpack.toml`
](https://github.com/paketo-buildpacks/mri/blob/main/buildpack.toml) file.

### Using BP_MRI_VERSION

To configure the buildpack to use Ruby v2.7.1 when deploying your app, set the
following environment variable at build time, either directly (ex. `pack build
my-app --env BP_MRI_VERSION=2.7.1`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
BP_MRI_VERSION="2.7.1"
{{< /code/copyable >}}

### Using a Gemfile

To configure the buildpack to use Ruby v2.7.1 when deploying your app, include
the values below in your `Gemfile`:

{{< code/copyable >}}
source 'https://rubygems.org'

ruby '~> 2.7.1'
{{< /code/copyable >}}

### Deprecated: Using buildpack.yml

Specifying the Ruby version through `buildpack.yml` configuration will be deprecated in MRI Buildpack v1.0.0.
To migrate from using `buildpack.yml` please set the `$BP_MRI_VERSION` environment variable.

## Package Management

The Ruby Buildpack uses [Bundler](https://bundler.io/) to install and manage
the gems needed to run your application. Including a `Gemfile` in your app
source code instructs the [`bundle-install`
buildpack](https://github.com/paketo-buildpacks/bundle-install) to vendor your
dependencies using `bundle install`.

## Specifying a Bundler Version

The Ruby Buildpack allows you to specify a version of Bundler to use during
deployment. This version can be specified via the `BP_BUNDLER_VERSION`
environment variable or a `Gemfile.lock` created during dependency vendoring.
When specifying a version of Bundler, you must choose a version that is
available within the buildpack.  The supported versions can be found
[here](https://github.com/paketo-buildpacks/bundler/releases/latest).

Please note that setting the Bundler version through a `buildpack.yml` file
will be deprecated in Bundler Buildpack v1.0.0.

The buildpack prioritizes the versions specified in each possible configuration
location with the following precedence, from
highest to lowest: `BP_BUNDLER_VERSION`, `Gemfile.lock`.

Specifying a version of Bundler is not required. In the case that is not
specified, the buildpack will provide the default version, which can be seen in
the [`buildpack.toml`
](https://github.com/paketo-buildpacks/bundler/blob/main/buildpack.toml) file.

### Using BP_BUNDLER_VERSION

To configure the buildpack to use Bundler v2.1.4 when deploying your app, set
the following environment variable at build time, either directly (ex. `pack
build my-app --env BP_BUNDLER_VERSION=2.1.4`) or through a
[project.toml](https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md)
file:

{{< code/copyable >}}
BP_BUNDLER_VERSION="2.1.4"
{{< /code/copyable >}}

### Using a Gemfile.lock

To configure the buildpack to use Bundler v2.1.4 when deploying your app, run
`bundle install` on your application source code using v2.1.4 of Bundler. This
will result in a `Gemfile.lock` that includes the following snippet:

{{< code/copyable >}}
BUNDLED WITH
   2.1.4
{{< /code/copyable >}}

### Deprecated: Using buildpack.yml

Specifying the Bundler version through `buildpack.yml` configuration will be deprecated in Bundler Buildpack v1.0.0.
To migrate from using `buildpack.yml` please set the `$BP_BUNDLER_VERSION` environment variable.

## Vendored Packages

In order to build apps in an offline environment, the app will need to have the
`.gem` files located in the `cache_path`. Bundler will copy the required gems
into this location, typically `vendor/cache` when running the `bundle package`
command. During the `bundle install` process, the buildpack will instruct
Bundler to prefer gems in this cache over those on the RubyGems index by
running `bundle install --local`.

## Webservers & Task Runners

The Ruby Buildpack supports a number of webservers and task runners that are
useful for running Ruby applications. If your application uses one of these
tools, it will be automatically detected and a start command for your
applicatin will be assigned when building your application container.

### Webservers

* [Passenger](http://github.com/paketo-buildpacks/passenger)
* [Puma](http://github.com/paketo-buildpacks/puma)
* [Rackup](http://github.com/paketo-buildpacks/rackup)
* [Thin](http://github.com/paketo-buildpacks/thin)
* [Unicorn](http://github.com/paketo-buildpacks/unicorn)

### Task Runners

* [Rake](http://github.com/paketo-buildpacks/rake)

## Rails Asset Pipeline

The [Rails Assets buildpack](http://github.com/paketo-buildpacks/rails-assets)
supports Rails apps (Rails version >= 5.0) that need asset precompilation.

To use this buildpack, your app must contain an `app/assets` directory, and your
app's `Gemfile` must specify the `rails` gem. The buildpack runs `bundle exec rails
assets:precompile` for the app, and works with any of the supported Ruby
webservers listed above.

## Buildpack-Set Environment Variables

The Ruby CNB sets a few environment variables during the `build` and `launch`
phases of the app lifecycle. The sections below describe each environment
variable and its impact on your app.

### `GEM_PATH`

* Set by: `mri`, `bundler`
* Phases: `build` and `launch`
* Value: location of the directory gems will be installed for each respective dependency

### `BUNDLE_PATH`

* Set by: `bundle-install`
* Phases: `build` and `launch`
* Value: location where all gems in your bundle will be located
