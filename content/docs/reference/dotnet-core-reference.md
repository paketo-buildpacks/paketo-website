---
title: ".NET Core Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: dotnet-core-reference
    name: ".NET Core Buildpack"
---

{{% reference_exec_summary bp_name="Paketo .NET Core Buildpack" bp_repo="https://github.com/paketo-buildpacks/dotnet-core" howto_docs_path="/docs/howto/dotnet-core" %}}

## Supported Dependencies

The .Net Core Paketo Buildpack supports several versions of the .Net Core Framework.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/dotnet-core/releases).

### .Net Core Framework Version Selection

When detecting what version of the .NET runtime to install, the .Net Core Buildpack uses the
same version selection policy that Microsoft has put together for .Net Core Framework.
If you would like to know more about the policy please refer to this
[documentation](https://docs.microsoft.com/en-us/dotnet/core/versions/selection)
provided by Microsoft.

## Application Types

The .Net Core Buildpack supports several types of application source code that
can be built into a container image. Developers can provide raw source code, or
built artifacts like Framework-Dependent Deployments/Executables or
Self-Contained Deployments when building their application.

### Source Applications

The .Net Core Build Buildpack is capable of building application source code
into Framework-Dependent Deployments (FDD) or Executables (FDE).  This is
achieved using the `dotnet publish` command. For .Net Core Framework 2.x
applications, [an FDD is
produced](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-cli#framework-dependent-deployment)
as the default build artifact, while [an FDE is
produced](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-cli#framework-dependent-executable)
when the application source is for .Net Core Framework 3.x.

### Framework-Dependent Deployments or Framework-Dependent Executables

When building an application that has already been published as a
Framework-Dependent Deployment or Framework-Dependent Executable, the buildpack
will include the required .Net Core Framework dependencies and set the start
command.

### Self-Contained Deployment

When building an application as a [Self-Contained
Deployment](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-cli#self-contained-deployment) (SCD),
the buildpack will ensure the correct start command will be used to run your
app. No .Net Core Framework dependencies will be included in the built image as
they are already included in the SCD artifact.

## Buildpack-Set Environment Variables

### DOTNET_ROOT

The `DOTNET_ROOT` environment variable specifies the path to the directory where .Net Runtimes and SDKs are installed.

* Set by: `dotnet-core-runtime`, `dotnet-core-sdk`, `dotnet-core-aspnet` buildpacks
* Phases: `build` and `launch`
* Value: path to the .Net root directory

### RUNTIME_VERSION

The `RUNTIME_VERSION` environment variable specifies the version of the .Net Core Runtime installed by the .Net Core Runtime Buildpack.

* Set by: `dotnet-core-runtime`
* Phases: `build`
* Value: installed version of the .Net Core Runtime

### SDK_LOCATION

The `SDK_LOCATION` environment variable specifies the file path location of the installed .Net Core SDK.

* Set by: `dotnet-core-sdk`
* Phases: `build`
* Value: path to the .Net Core SDK installation

### PATH

The `PATH` environment variable is modified to enable the `dotnet` CLI to be found during subsequent `build` and `launch` phases.

* Set by: `dotnet-core-sdk`
* Phases: `build` and `launch`
* Value: path the directory containing the `dotnet` executable

## Launch Process

The .Net Core Conf Buildpack will ensure that your application image is built
with a valid launch process command. These commands differ slightly depending
upon the type of built artifact produced during the build process.

For more information about which built artifact is produced for a Source
Application, see [this section]({{< relref "#application-types" >}}).

### Framework-Dependent Deployments and Source Applications

For Framework-Dependent Deployments (FDD), the `dotnet` CLI will be invoked to
start your application. The application will be given configuration to help it
bind to a port inside the container. The default port is 8080, but can be
overridden using the `$PORT` environment variable.

{{< code/copyable >}}
dotnet myapp.dll --urls http://0.0.0.0:${PORT:-8080}
{{< /code/copyable >}}

### Self-Contained Deployment and Framework-Dependent Executables

For Self-Contained Deployments and Framework-Dependent Executables, the
executable will be invoked directly to start your application. The application
will be given configuration to help it bind to a port inside the container. The
default port is 8080, but can be overridden using the `$PORT` environment
variable.

{{< code/copyable >}}
./myapp --urls http://0.0.0.0:${PORT:-8080}
{{< /code/copyable >}}