---
title: "How to Build Python Apps with Paketo Buildpacks"
weight: 324
menu:
  main:
    parent: "howto"
    name: "Python"
aliases:
  - /docs/buildpacks/language-family-buildpacks/python/
---

{{% howto_exec_summary bp_name="Paketo Python Buildpack" bp_repo="https://github.com/paketo-buildpacks/python" reference_docs_path="/docs/reference/python-reference" %}}

## Build a Sample App
To build a sample app locally with this buildpack using the pack CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/python/pip
pack build my-app --buildpack paketo-buildpacks/python \
  --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

See
[samples](https://github.com/paketo-buildpacks/samples/tree/main/python/pip)
for how to run the app.

The Paketo Python Buildpack supports several popular configurations for Python apps.

## Install a Specific CPython Version

The Python Cloud Native Buildpack allows you to specify a version of CPython 3
(reference implementation of Python 3) to use during deployment. This version
can be specified via the `BP_CPYTHON_VERSION` environment variable during
build. When specifying a version of CPython, you must choose a version that is
available within the buildpack. The supported versions can be found in the
[release notes](https://github.com/paketo-buildpacks/python/releases/latest).

You may set `BP_CPYTHON_VERSION` using a platfrom-specific option, or using
a [`project.toml`](https://buildpacks.io/docs/app-developer-guide/using-project-descriptor)
as shown in the following example:

{{< code/copyable >}}
[ _ ]
schema-version = "0.2"

[[ io.buildpacks.build.env ]]
  name = "BP_CPYTHON_VERSION"
  value = "3.6.*" # any valid semver constraints (e.g. 3.6.7, 3.*) are acceptable
{{< /code/copyable >}}

Specifying a version of CPython is not required. In the case this is not
specified, the buildpack will provide the default version, which can be seen in
the `buildpack.toml` file.

Some tools (like `poetry`) are able to detect the version of python defined in
configuration files (like `pyproject.toml`). If present, the buildpack will use
that specific version as long as it is supported.

## Use a Package Manager

With the Python CNB, there are four options available for package management
depending on your application:

* Using [Pip](https://pip.pypa.io)
* Using [Pipenv](https://pypi.org/project/pipenv)
* Using [Miniconda](https://docs.conda.io/en/latest/miniconda.html)
* Using [Poetry](https://python-poetry.org/)

You can find specific information for each option below.

### Pip

Pip is a popular option for managing third-party application dependencies for
Python apps.  Including a valid `requirements.txt` file at the root of your app
source code triggers the pip installation process by the buildpack. The
buildpack will install the application packages and make it available to the
app.

The buildpack allows you to configure the version of Pip to be used in the
installation process. You can set this using the `$BP_PIP_VERSION` variable
during build. When specifying a version of Pip, you must choose a version that
is available within the buildpack. The supported versions can be found in the
[release notes](https://github.com/paketo-buildpacks/python/releases/latest).

### Pipenv

Pipenv is another common option for managing dependencies. Including a valid
`Pipfile` file at the root of your app source code triggers the pipenv
installation process by the buildpack. The buildpack will install the
application packages and make it available to the app.

The buildpack allows you to configure the version of Pipenv to be used in the
installation process. You can set this using the `$BP_PIPENV_VERSION` variable
during build. When specifying a version of Pipenv, you must choose a version
that is available within the buildpack. The supported versions can be found in the
[release notes](https://github.com/paketo-buildpacks/python/releases/latest).

The buildpack also takes into consideration the Python version requirement
specified by `Pipfile.lock`, but `BP_CPYTHON_VERSION` takes precedence over
this as discussed in [this section above]({{< relref "#install-a-specific-cpython-version" >}}).

### Miniconda

Miniconda is a package management and environment management system supported
by the Python buildpack. The buildpack will create or update a conda environment
from an `environment.yml` file or a `package-list.txt` file located at the root
of the app source code.

Configuring a version of miniconda is not supported.

### Poetry

Poetry is a tool to manage both third-party application dependencies and
virtual environments. Including a `pyproject.toml` file at the root of your app
source code triggers the poetry installation process. The buildpack will invoke
`poetry` to install the application dependencies defined in `pyproject.toml`
and set up a virtual environment.

The buildpack allows you to configure the version of Poetry to be used in the
installation process. You can set this using the `$BP_POETRY_VERSION` variable
during build. When specifying a version of Poetry, you must choose a version
that is available within the buildpack. The supported versions can be found in the
[release notes](https://github.com/paketo-buildpacks/python/releases/latest).

## Enable Process Reloading
[`watchexec`][watchexec] is a tool that can watch files for changes
and run a command whenever it detects modifications. The Python buildpack can
install this tool in your app container so that you can restart your server
process when files in the app's working directory change. This may facilitate
a shorter feedback loop for iterating on code changes. This feature may be used
in conjunction with a dev orchestrator like [Tilt][tilt].

### Using `BP_LIVE_RELOAD_ENABLED`

To make `watchexec` available in the app container, set the `$BP_LIVE_RELOAD_ENABLED` environment
variable at build time, either by passing a flag to the
[platform][definition/platform] or by
adding it to your `project.toml`. See the Cloud Native Buildpacks
[documentation][project-file] to learn more about `project.toml` files.

#### With a `pack build` flag
{{< code/copyable >}}
pack build myapp --env BP_LIVE_RELOAD_ENABLED=true
{{< /code/copyable >}}

#### In a `project.toml` file
{{< code/copyable >}}
[ _ ]
schema-version = "0.2"

[[ io.buildpacks.build.env ]]
  name = 'BP_LIVE_RELOAD_ENABLED'
  value = 'true'
{{< /code/copyable >}}

#### In a `Tiltfile` with the `pack` resource
You can use the Paketo Python buildpack with [Tilt][tilt]. This example
uses the [`pack` extension][tilt/pack] for Tilt.
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack('my-app',
  buildpacks=["paketo-buildpacks/python"],
  env_vars=["BP_LIVE_RELOAD_ENABLED=true"],
  live_update=[
    sync('.', '/workspace'),
  ]
)
{{< /code/copyable >}}
<!-- spellchecker-enable -->

### Setting a reloadable start command
You can then use a [Procfile][procfile] to set a start command for the app that
uses `watchexec`. For instance, for an app whose entrypoint is `server.py`, you could
use a Procfile as follows:
{{< code/copyable >}}
web: watchexec --verbose --restart --watch /workspace 'server.py'
{{< /code/copyable >}}
This will cause the server process to restart whenever changes in `/workspace` are
detected. See `watchexec` [documentation][watchexec] for more about how to
configure the tool.

## Install a Custom CA Certificate
Python Buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates]({{< ref "docs/howto/configuration#ca-certificates" >}})
section of our configuration docs.

## Override the Start Process Set by the Buildpack
Python Buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles][procfile] section
of our configuration docs.

## Set Environment Variables for App Launch Time
Python Buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Add Custom Labels to the App Image
Python Buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels]({{< ref "docs/howto/configuration#applying-custom-labels" >}})
section of our configuration docs.

## Enable `DEBUG` logging
Users of the Python buildpack can access extra debug logs during the image build process by setting the `BP_LOG_LEVEL`
environment variable to `DEBUG` at build time. Additional debug logs will
appear in build logs if the relevant buildpacks have debug log lines.
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/python \
  --env BP_LOG_LEVEL=DEBUG
{{< /code/copyable >}}

## Access the software bill of materials
The Python buildpack includes support for the software bill of materials (SBOM).
Check out the [SBOM how-to documentation][how-to/SBOM] for
details on how to access the SBOM supplied by the buildpacks.

SBOMs will be generated for applications which leverage `Pip`, `Pipenv`, or `Poetry`.

Currently the Python buildpack has limited support for generating an SBOM for
applications which leverage `Miniconda`. Specifically - in order to generate an
SBOM for a `Miniconda` application, applications must vendor their dependencies
in addition to defining them via a `package-list.txt` file. `Miniconda`
applications that declare their dependencies via a `package-list.txt` file but
do not vendor them will result in an empty SBOM. This is due to a limitation in
the upstream SBOM generation library (Syft).

<!-- References -->
<!-- spellchecker-disable -->
[watchexec]:https://github.com/watchexec/watchexec
[tilt]:https://tilt.dev/
[tilt/pack]:https://github.com/tilt-dev/tilt-extensions/tree/master/pack
[definition/platform]:https://buildpacks.io/docs/concepts/components/platform
[project-file]:https://buildpacks.io/docs/app-developer-guide/using-project-descriptor/
[procfile]:{{< ref "docs/howto/configuration#procfiles" >}}
[how-to/SBOM]:{{< ref "docs/howto/sbom" >}}
<!-- spellchecker-enable -->
