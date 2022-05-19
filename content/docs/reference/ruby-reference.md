---
title: "Ruby Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: ruby-reference
    name: "Ruby Buildpack"
---

{{% reference_exec_summary bp_name="Paketo Ruby Buildpack" bp_repo="https://github.com/paketo-buildpacks/ruby" howto_docs_path="/docs/howto/ruby" %}}

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

* [Passenger](https://github.com/paketo-buildpacks/passenger)
* [Puma](https://github.com/paketo-buildpacks/puma)
* [Rackup](https://github.com/paketo-buildpacks/rackup)
* [Thin](https://github.com/paketo-buildpacks/thin)
* [Unicorn](https://github.com/paketo-buildpacks/unicorn)

### Task Runners

* [Rake](https://github.com/paketo-buildpacks/rake)

## Rails Asset Pipeline
The [Paketo Rails Assets Buildpack](https://github.com/paketo-buildpacks/rails-assets) is a [component buildpack]({{< ref "/docs/concepts/buildpacks#component-buildpacks" >}}) included in the Ruby Buildpack. It supports Rails apps (Rails version >= 5.0) that need asset precompilation.

The buildpack runs `bundle exec rails assets:precompile` for the app, and works
with any of the supported Ruby webservers listed above. The Paketo Ruby
Buildpack pulls in this buildpack, as well as the [Paketo Node Engine
Buildpack](https://github.com/paketo-buildpacks/node-engine) to support asset compilation.

## Vendored Gem Behavior
Per the Ruby [How To Guide]({{< ref "docs/howto/ruby" >}}), the Paketo Ruby
Buildpack supports building apps with vendored gems. Behind the scenes,
the presence of the cache path in the app source code indicates to the
buildpack to run `bundle install` with the addition of the `--local` flag to
prefer the use of local gems.

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

##  Software Bill of Materials
The Ruby buildpack supports the full [software bill of
materials][concepts/SBOM] (SBOM) in [Syft][format/syft],
[CycloneDX][format/cyclonedx], and [SPDX][format/spdx] formats. The Ruby
buildpack also includes limited support for the
[Paketo-specific][format/paketo] SBOM format. This Paketo-specific SBOM format
does not include information about the application dependencies.

SBOMs will be generated for applications which leverage Bundler.

Check out the [Access the Software Bill of Materials
guide][how-to/SBOM] for more information about how to retrieve
the SBOM for your Ruby app image.

<!-- References -->
<!-- spellchecker-disable -->
[format/cyclonedx]:https://cyclonedx.org/
[format/spdx]:https://spdx.dev/
[format/syft]:https://github.com/anchore/syft/tree/main/schema/json
[format/paketo]:{{< ref "docs/concepts/sbom#paketo-specific-sbom-format" >}}
[concepts/SBOM]:{{< ref "docs/concepts/sbom" >}}
[how-to/SBOM]:{{< ref "docs/howto/sbom" >}}
<!-- spellchecker-enable -->
