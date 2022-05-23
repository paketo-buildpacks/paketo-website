---
title: "Python Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: python-reference
    name: "Python Buildpack"
---

{{% reference_exec_summary bp_name="Paketo Python Buildpack" bp_repo="https://github.com/paketo-buildpacks/python" howto_docs_path="/docs/howto/python" %}}

## Supported Dependencies
The Python buildpack supports several versions of CPython, as well as tools
like Pip and Pipenv. For more details on the specific versions supported in a
given buildpack version, see the [release
notes](https://github.com/paketo-buildpacks/python/releases).

## Buildpack-Set Environment Variables

The Python Buildpack sets a few environment variables during the `build` and
`launch` phases of the app lifecycle. The sections below describe each
environment variable and its impact on your app.

### PYTHONPATH

The [`PYTHONPATH`](https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH)
environment variable is used to add directories where python will look for
modules.

* Set by: `CPython`, `Pip`, `Pipenv`, `Poetry`, and `Poetry-Install`
* Phases: `build` and `launch`

The CPython buildpack sets the `PYTHONPATH` value to its installation location,
and the Pip, Pipenv buildpack prepends their `site-packages` location to it.
`site-packages` is the target directory where packages are installed to.

### PYTHONUSERBASE

The [`PYTHONUSERBASE`](https://docs.python.org/3/using/cmdline.html#envvar-PYTHONUSERBASE)
environment variable is used to set the user base directory.

* Set by: `Pip`, `Pipenv`, `Poetry`, `Pip Install`, `Pipenv Install`, and `Conda Env Update`
* Phases: `build` and `launch`

The value of `PYTHONUSERBASE` is set to the location where these buildpacks install
the application packages so that it can be consumed by the app source code.

## Start Command

The Python Buildpack sets the default start command `python`. This starts the Python
REPL (read-eval-print loop) at launch.

If the application uses `poetry`, the `Poetry Run` buildpack can also be used
to create a start command from single script defined in the `pyproject.toml`
file. See the [`poetry-run`
documentation](https://github.com/paketo-buildpacks/poetry-run/blob/main/README.md)
for more details.

The Python Buildpack comes with support for
[`Procfile`]({{< ref "docs/howto/configuration#procfiles" >}})
that lets users set custom start commands easily.

##  Software Bill of Materials
The Python buildpack supports the full [software bill of
materials][concepts/SBOM] (SBOM) in [Syft][format/syft],
[CycloneDX][format/cyclonedx], and [SPDX][format/spdx] formats. The Python
buildpack also includes limited support for the
[Paketo-specific][format/paketo] SBOM format. This Paketo-specific SBOM format
does not include information about the application dependencies.

SBOMs will be generated for applications which leverage `Pip`, `Pipenv`, or
`Poetry`.

Check out the [Access the Software Bill of Materials
guide][how-to/SBOM] for more information about how to retrieve
the SBOM for your Python app image.

Currently the Python buildpack has limited support for generating an SBOM for
applications which leverage `Miniconda`. Specifically - in order to generate an
SBOM for a `Miniconda` application, applications must vendor their dependencies
in addition to defining them via a `package-list.txt` file. `Miniconda`
applications that declare their dependencies via a `package-list.txt` file but
do not vendor them will result in an empty SBOM. This is due to a limitation in
the upstream SBOM generation library (Syft).

<!-- References -->
<!-- spellchecker-disable -->
[format/cyclonedx]:https://cyclonedx.org/
[format/spdx]:https://spdx.dev/
[format/syft]:https://github.com/anchore/syft/tree/main/schema/json
[format/paketo]:{{< ref "docs/concepts/sbom#paketo-specific-sbom-format" >}}
[concepts/SBOM]:{{< ref "docs/concepts/sbom" >}}
[how-to/SBOM]:{{< ref "docs/howto/sbom" >}}
<!-- spellchecker-enable -->
