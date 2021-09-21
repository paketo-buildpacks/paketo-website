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
pack build my-app --buildpack gcr.io/paketo-buildpacks/python \
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
[build]
  [[build.env]]
    name = "BP_CPYTHON_VERSION"
    value = "3.6.*" # any valid semver constraints (e.g. 3.6.7, 3.*) are acceptable
{{< /code/copyable >}}

Specifying a version of CPython is not required. In the case this is not
specified, the buildpack will provide the default version, which can be seen in
the `buildpack.toml` file.

## Use a Package Manager

With the Python CNB, there are three options available for package management
depending on your application:

* Using [Pip](https://pip.pypa.io)
* Using [Pipenv](https://pypi.org/project/pipenv)
* Using [Miniconda](https://docs.conda.io/en/latest/miniconda.html)

You can find specific information for each option below.

### Pip

Pip is a popular option for managing third-party application dependencies for
Python apps.  Including a valid `requirements.txt` file at the root of your app
source code triggers the pip installation process by the buildpack. The
buildpack will install the application packages and make it available to the
app.

The buidpack allows you to configure the version of Pip to be used in the
installation process. You can set this using the `$BP_PIP_VERSION` variable
during build. When specifying a version of Pip, you must choose a version that
is available within the buildpack. The supported versions can be found in the
[release notes](https://github.com/paketo-buildpacks/python/releases/latest).

### Pipenv

Pipenv is another common option for managing dependencies. Including a valid
`Pipfile` file at the root of your app source code triggers the pipenv
installation process by the buildpack. The buildpack will install the
application packages and make it available to the app.

The buidpack allows you to configure the version of Pipenv to be used in the
installation process. You can set this using the `$BP_PIPENV_VERSION` variable
during build. When specifying a version of Pipenv, you must choose a version
that is available within the buildpack. The supported versions can be found in the
[release notes](https://github.com/paketo-buildpacks/python/releases/latest).

The buildpack also takes into consideration the Python version requirement
specified by `Pipfile.lock`, but `BP_CPYTHON_VERSION` takes precedence over
this as discussed in [this section above]({{< relref "#install-a-specific-cpython-version" >}}).

### Miniconda

Miniconda is a package management and environment management system supported
by the Python buildpack. The builpack will create or update a conda environment
from an `environment.yml` file or a `package-list.txt` file located at the root
of the app source code.

Configuring a version of miniconda is not supported.

## Install a Custom CA Certificate
Python Buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates]({{< ref "docs/reference/configuration#ca-certificates" >}})
section of our configuration docs.

## Override the Start Process Set by the Buildpack
Python Buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles]({{< ref "docs/reference/configuration#procfiles" >}}) section
of our configuration docs.

## Set Environment Variables for App Launch Time
Python Buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Add Custom Labels to the App Image
Python Buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels]({{< ref "docs/reference/configuration#applying-custom-labels" >}})
section of our configuration docs.
