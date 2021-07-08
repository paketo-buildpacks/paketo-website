---
title: "Ruby Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: ruby-reference
    name: "Ruby Buildpack"
---

This reference documentation offers an in-depth description of the behavior
and configuration options of the 
[Paketo Ruby Buildpack](https://github.com/paketo-buildpacks/ruby).
For explanations of how to use the buildpack for several common use-cases, see
the Ruby How To [documentation](/docs/howto/ruby).

## Supported Dependencies

The Ruby Paketo Buildpack supports several versions of
[MRI](https://www.ruby-lang.org), [Bundler](https://bundler.io/), and common
Ruby webservers and task runners.  For more details on the specific versions
supported in a given buildpack version, see the [release
notes](https://github.com/paketo-buildpacks/ruby/releases/latest).

## Package Management

The Ruby Buildpack uses [Bundler](https://bundler.io/) to install and manage
the gems needed to run your application. Including a `Gemfile` in your app
source code instructs the [`bundle-install`
buildpack](https://github.com/paketo-buildpacks/bundle-install) to vendor your
dependencies using `bundle install`.

## Webservers & Task Runners

The Ruby Buildpack supports a number of webservers and task runners that are
useful for running Ruby applications. If your application uses one of these
tools, it will be automatically detected and a start command for your
application will be assigned when building your application container.

### Webservers

* [Passenger](http://github.com/paketo-buildpacks/passenger)
* [Puma](http://github.com/paketo-buildpacks/puma)
* [Rackup](http://github.com/paketo-buildpacks/rackup)
* [Thin](http://github.com/paketo-buildpacks/thin)
* [Unicorn](http://github.com/paketo-buildpacks/unicorn)

### Task Runners

* [Rake](http://github.com/paketo-buildpacks/rake)

## Rails Asset Pipeline
The [Paketo Rails Assets Buildpack](http://github.com/paketo-buildpacks/rails-assets) is a [component buildpack](/docs/concepts/buildpacks/#component-buildpacks) included in the Ruby Buildpack. It supports Rails apps (Rails version >= 5.0) that need asset precompilation.

The buildpack runs bundle exec rails assets:precompile for the app, and works with any of the supported Ruby webservers listed above.

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
