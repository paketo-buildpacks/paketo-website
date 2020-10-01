---
title: "Ruby Buildpack"
weight: 306
menu:
  main:
    parent: "buildpacks"
---

# Ruby Buildpack

The [Ruby Paketo Buildpack](https://github.com/paketo-buildpacks/ruby) supports several popular
configurations for Ruby apps.

To build a sample app locally with this buildpack using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/ruby/thin
pack build my-app --buildpack gcr.io/paketo-buildpacks/ruby
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/ruby/thin)
for how to run the app.

## Supported Dependencies

The Ruby Paketo Buildpack supports several versions of MRI, Bundle, and other
common ruby frameworks and tools.  For more details on the specific versions supported in a
given buildpack version, see the [release
notes](https://github.com/paketo-buildpacks/ruby/releases).

## Specifying a Ruby Version

The Ruby CNB (Cloud Native Buildpack) allows you to specify a version of Ruby to use during deployment. This
version can be specified via `buildpack.yml` or a `Gemfile`. When specifying a version of Ruby,
you must choose a version that is available within the buildpack. The supported
versions can be found
[here](https://github.com/paketo-buildpacks/mri/releases/latest).

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `buildpack.yml`, `Gemfile`.

Specifying a version of Ruby is not required. In the case that is not specified,
the buildpack will provide the default version, which can be seen in the
buildpack.toml file.

### Using buildpack.yml

To configure the buildpack to use Ruby v2.7.1 when deploying your app, include
the values below in your `buildpack.yml` file:

{{< code/copyable >}}
---
mri:
  version: 2.7.1
{{< /code/copyable >}}

### Using a Gemfile

To configure the buildpack to use Ruby v2.7.1 when deploying your app, include
the values below in your `Gemfile`:

{{< code/copyable >}}
---
source 'https://rubygems.org'

ruby '~> 2.7.1'
{{< /code/copyable >}}

## Package Management

The Ruby CNB uses [Bundler](https://bundler.io/) to install and manage
the gems needed to run your application.Including a `Gemfile` in your app
source code instructs the buildpack to vendor your dependencies using `bundle
install`. During the build phase, the `bundle-install`
[buildpack](https://github.com/paketo-buildpacks/bundle-install) simply runs
the `bundle install` command in your app's root directory.

### Specifying a Bundler Version

The Ruby CNB (Cloud Native Buildpack) allows you to specify a version of Ruby to use during deployment. This
version can be specified via `buildpack.yml` or a `Gemfile`. When specifying a version of Ruby,
you must choose a version that is available within the buildpack. The supported
versions can be found
[here](https://github.com/paketo-buildpacks/mri/releases/latest).

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `buildpack.yml`, `Gemfile`.

Specifying a version of Bundler is not required. In the case that is not specified,
the buildpack will provide the default version, which can be seen in the
buildpack.toml file.

## Frameworks & Tools
The Ruby CNB supports a number of frameworks for running Ruby applications.
Each framework buildpack sets the required start command for that framework.

The start commands set by the respective buildpacks are as follows:

### Passenger
```
bundle exec passenger start --port ${PORT:-3000}
```

### Puma
```
bundle exec puma
```

### Rackup
```
bundle exec rackup -p "${PORT:-9292}"
```

### Rake
```
bundle exec rake
```

### Thin
```
bundle exec thin -p "${PORT:-3000}" start
```

### Unicorn
```
bundle exec unicorn --listen "${PORT:-8080}"
```

## Buildpack-Set Environment Variables

The Ruby CNB sets a few environment variables during the `build` and `launch`
phases of the app lifecycle. The sections below describe each environment
variable and its impact on your app.

### `GEM_PATH`
The `GEM_PATH` variable 
* Set by: `mri`, `bundler`
* Phases: 
* Value: 
### `BUNDLE_PATH`
The `BUNDLE_PATH` variable 
* Set by: `bundle-install` 
* Phases: 
* Value: 
