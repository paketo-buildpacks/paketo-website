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


## Build a Sample Ruby App

You can quickly build a sample Ruby app into a runnable OCI image on your
local machine with Paketo buildpacks.

*Prerequisites*
- docker CLI
- pack CLI


1. Clone the Paketo samples and navigate to a Ruby sample app.
{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/ruby/puma
{{< /code/copyable >}}


1. Use the pack CLI with the Paketo Ruby Buildpack to build the sample app.
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/ruby \
  --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

1. Run the app using instructions found in its `README`.

*Note: Though the example above uses the Paketo Base Builder, this buildpack is
also compatible with the Paketo Full Builder.*

## Override the Detected Ruby Version
The Paketo Ruby Buildpack will attempt to automatically detect the correct
version of Ruby to install based on the default version in the
[`buildpack.toml`][bp/toml] file. It is possible to override this version by
setting the `BP_MRI_VERSION` environment variable at build time, or via a
`Gemfile` in the app source.

The version can be set to any valid semver version or version constraint (e.g.
`2.7.4`, `2.7.*`). For the versions available in the buildpack, see the
buildpack's [releases page][bp/releases]. Specifying a version of Ruby is not
required. In the case that it is not specified, the buildpack will provide the
default version, which can be seen in the `buildpack.toml` file.

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `BP_MRI_VERSION`, `Gemfile`.

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_MRI_VERSION` at build time with the `--env` flag.
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/ruby \
  --env BP_MRI_VERSION="2.7.1"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file
in your app directory that sets `BP_MRI_VERSION` at build time.
{{< code/copyable >}}
# project.toml
[ _ ]
schema-version = "0.2"

[[ io.buildpacks.build.env ]]
  name="BP_MRI_VERSION"
  value="2.7.1"
{{< /code/copyable >}}

The pack CLI will automatically detect the project file at build time.

#### With a Gemfile
When a Gemfile is present, include a version declaration line.
{{< code/copyable >}}
source 'https://rubygems.org'

ruby '~> 2.7.1'
{{< /code/copyable >}}

#### Deprecated: With pack and a `buildpack.yml`
Please note that setting the Ruby version through a `buildpack.yml` file will be
deprecated in MRI Buildpack v1.0.0. To migrate from using `buildpack.yml` please
set the `$BP_MRI_VERSION` environment variable.

## Override the Detected Bundler Version

The Paketo Ruby Buildpack will also attempt to automatically detect the correct
version of Bundler to use based on the default version in the
[`buildpack.toml`][bundler/toml] file. It is possible to override this version
by setting the `BP_BUNDLER_VERSION` environment variable at build time, or via
a `Gemfile.lock` created during dependency vendoring.

The version can be set to any valid semver version or version constraint (e.g.
`2.2.29`, `2.2.*`). For the versions available in the buildpack, see the
buildpack's [releases page][bundler/releases]. Specifying a version of Ruby is
not required. In the case that it is not specified, the buildpack will provide
the default version, which can be seen in the `buildpack.toml` file.

The buildpack prioritizes the versions specified in each possible configuration
location with the following precedence, from highest to lowest:
`BP_BUNDLER_VERSION`, `Gemfile.lock`.

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_BUNDLER_VERSION` at build time with the `--env` flag.
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/ruby \
  --env BP_BUNDLER_VERSION="2.1.4"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file
in your app directory that sets `BP_BUNDLER_VERSION` at build time.
{{< code/copyable >}}
# project.toml
[ _ ]
schema-version = "0.2"

[[ io.buildpacks.build.env ]]
  name="BP_BUNDLER_VERSION"
  value="2.1.4"
{{< /code/copyable >}}

The pack CLI will automatically detect the project file at build time.

#### With a Gemfile.lock
When configuring your app, run `bundle install` on the source code to configure
the buildpack to use the version of Bundler that you bundled with. This will
result in a `Gemfile.lock` file that includes a Bundler version declaration line.
{{< code/copyable >}}
BUNDLED WITH
   2.1.4
{{< /code/copyable >}}

#### Deprecated: With pack and a `buildpack.yml`
Please note that setting the Bundler version through a `buildpack.yml` file
will be deprecated in Bundler Buildpack v1.0.0.

## Build an App With Vendored Gems
In order to build apps that contain vendored gems with the Paketo Ruby
Buildpack, your app will need to have `.gem` files located in the
`cache_path`.

#### With a Default Cache Location
Running the `bundle package` command on your app source code will
copy the required gems into the cache location, typically `vendor/cache`. This
will indicate to the buildpack to use gems in the cache over those on the
RubyGems index. Check out the Ruby reference [documentation]({{< ref
"docs/reference/ruby-reference" >}}) for more information about how this works.

#### With a Non-Default Cache Location
To vendor gems in a non-default location, put all `.gem` files into the
directory inside app source code, such as `custom_dir/custom_cache`. In order
to tell the buildpack where to look for the gems, create a `.bundle/config`
file and set the `BUNDLE_CACHE_PATH`.

<!-- spellchecker-disable -->
{{< code/copyable >}}
---
BUNDLE_CACHE_PATH: "custom_dir/custom_cache"
{{< /code/copyable >}}
<!-- spellchecker-enable -->

## Build an App Image That Runs a Rake Task
The Ruby Buildpack can build images that run a rake task
at launch time. Simply include a valid `Rakefile` in your app source
code. The buildpack will build an image that runs the default rake task
at launch time.
See this Paketo sample [app][samples/rake] for a working example.

#### With a Non-Default Rake Task
To configure the app image to run a rake task called `non_default` on launch,
use a [Procfile]({{< ref "/docs/howto/configuration#procfiles" >}}) with the
start command set as the `web` process.

{{< code/copyable >}}
web: bundle exec rake non_default
{{< /code/copyable >}}

Alternatively, start the app container with the rake task (instead of its default start
command), by setting `--entrypoint launcher` when running the container, and
add the desired rake start command at the end.

{{< code/copyable >}}
docker run --entrypoint launcher my-rake-app bundle exec rake non_default
{{< /code/copyable >}}

## Build an App With a Webserver
The Paketo Ruby Buildpack has support for several common web servers and will
configure the app image accordingly. Check out the Ruby reference [documentation]({{< ref
"docs/reference/ruby-reference#webservers--task-runners" >}}) for more
information about the supported web servers.

To enable your app to run with a given webserver, include its gem in your app's
`Gemfile`.

For example, to use Rackup, include in your `Gemfile`:
{{< code/copyable >}}
gem 'rack'
{{< /code/copyable >}}

## Build a Rails App
If you are building a Rails (version >= 5.0) app that needs asset compilation,
you can build it with the Paketo Ruby Buildpack.

To use this feature:
1. Include an `app/assets` directory in your app source code
1. Add the `rails` gem to your `Gemfile`

## Enable `DEBUG` logging
Users of the Ruby buildpack can access extra debug logs during the image build process by setting the `BP_LOG_LEVEL`
environment variable to `DEBUG` at build time. Additional debug logs will
appear in build logs if the relevant buildpacks have debug log lines.
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/ruby \
  --env BP_LOG_LEVEL=DEBUG
{{< /code/copyable >}}

## Access the software bill of materials
The Ruby buildpack includes support for the software bill of materials (SBOM).
Check out the [SBOM how-to documentation][how-to/SBOM] for details on how to
access the SBOM supplied by the buildpacks.

SBOMs will be generated for applications which leverage Bundler.

<!-- References -->
<!-- spellchecker-disable -->
[bp/releases]:https://github.com/paketo-buildpacks/mri/releases/latest
[bp/toml]:https://github.com/paketo-buildpacks/mri/blob/main/buildpack.toml
[bundler/toml]:https://github.com/paketo-buildpacks/bundler/blob/main/buildpack.toml
[bundler/releases]:https://github.com/paketo-buildpacks/bundler/releases/latest
[bundler/toml]:https://github.com/paketo-buildpacks/bundler/blob/main/buildpack.toml
[cnb/project-file]:https://buildpacks.io/docs/app-developer-guide/using-project-descriptor
[samples/rake]:https://github.com/paketo-buildpacks/samples/tree/main/ruby/rake
[how-to/SBOM]:{{< ref "docs/howto/sbom" >}}
<!-- spellchecker-enable -->
