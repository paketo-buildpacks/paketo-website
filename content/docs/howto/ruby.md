---
title: "How to Build Ruby Apps with Paketo Buildpacks"
weight: 332
menu:
  main:
    parent: "howto"
    name: "Ruby"
aliases:
  - /docs/buildpacks/language-family-buildpacks/ruby/
---

{{% howto_exec_summary bp_name="Paketo Ruby Buildpack" bp_repo="https://github.com/paketo-buildpacks/ruby" reference_docs_path="/docs/reference/ruby-reference" %}}

## Build a Sample App
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

## Install a Specific Ruby Version

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

## Install a Specific Bundler Version

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

## Build an App in an Offline Environment
In order to build apps in an offline environment, the app will need to have the
`.gem` files located in the `cache_path`. Bundler will copy the required gems
into this location, typically `vendor/cache` when running the `bundle package`
command. During the `bundle install` process, the buildpack will instruct
Bundler to prefer gems in this cache over those on the RubyGems index by
running `bundle install --local`.

## Build an App Image That Runs a Rake Task
The Ruby Buildpack can build images that run a rake task
at launch time. Simply include a valid `Rakefile` in your app source
code. The buildpack will build an image that runs the default rake task
at launch time.
See this Paketo sample [app](https://github.com/paketo-buildpacks/samples/tree/main/ruby/rake)
for a working example.

### Run a Non-Default Rake Task
To configure the app image to run a rake task called `non_default` on launch, use a [Procfile](/docs/reference/configuration/#procfiles) with contents as follows to set the start command:

{{< code/copyable >}}
web: bundle exec rake non_default
{{< /code/copyable >}}

To start an app container with a rake task (instead of its default start command), start the app container with  `--entrypoint launcher` and add the desired rake start command at the end:
{{< code/copyable >}}
docker run --entrypoint launcher my-rake-app bundle exec rake non_default
{{< /code/copyable >}}

## Run a Ruby Application with a Webserver
The Ruby Buildpack can automatically detect that a Ruby app needs to be run with
several common web servers, and will configure the app image accordingly. The buildpack
currently supports the following webservers:
- Passenger
- Puma
- Rackup
- Thin
- Unicorn

To make the Ruby Buildpack automatically configure your app for a given webserver,
include its gem in your app's `Gemfile`.

For example, to use Rackup, include in your `Gemfile`:
{{< code/copyable >}}
gem 'rack'
{{< /code/copyable >}}

## Build a Rails App
The Ruby Buildpack supports Rails apps (Rails version >= 5.0) that need
asset precompilation.

To use this feature of the buildpack, 
1. Include an `app/assets` directory in your app source code
1. Add the `rails` gem to your `Gemfile`