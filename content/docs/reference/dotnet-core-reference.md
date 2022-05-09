---
title: ".NET Core Buildpack Reference"
menu:
  main:
    parent: reference
    identifier: dotnet-core-reference
    name: ".NET Core Buildpack"
---

{{% reference_exec_summary bp_name="Paketo .NET Core buildpack" bp_repo="https://github.com/paketo-buildpacks/dotnet-core" howto_docs_path="/docs/howto/dotnet-core" %}}

## Supported Dependencies

The .NET Core Paketo buildpack supports several versions of the .NET Core Framework.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/dotnet-core/releases).

### .NET Core Framework Version Selection

When detecting what version of the .NET runtime to install, the .NET Core buildpack uses the
same version selection policy that Microsoft has put together for .NET Core Framework.
If you would like to know more about the policy please refer to this
[documentation](https://docs.microsoft.com/en-us/dotnet/core/versions/selection)
provided by Microsoft.

## Supported Service Bindings
The .NET Core buildpack can be configured using [service bindings][service-binding].
####
| `type`                       | Required Files         | # Bindings of This Type Accepted |
|------------------------------|------------------------|----------------------------------|
| [`nugetconfig`][nugetconfig] | `type`, `nuget.config` | 0 or 1                           |


## Behavior
The Paketo .NET Core buildpack is a [composite buildpack][paketo/composite-buildpack] designed to build .NET Core applications in several different forms.

### Supported Application Types
The .NET Core buildpack supports several types of application source code that
can be built into a container image. Developers can provide raw source code, or
built artifacts like Framework-Dependent Deployments/Executables or
Self-Contained Deployments when building their application.

### Source Applications

The .NET Core buildpack is capable of building application source code
into Framework-Dependent Deployments (FDD) or Executables (FDE).  This is
achieved using the `dotnet publish` command. For .NET Core Framework 2.x
applications, [an FDD is
produced](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-cli#framework-dependent-deployment)
as the default build artifact, while [an FDE is
produced](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-cli#framework-dependent-executable)
when the application source is for .NET Core Framework 3.x. The buildpack sets the following `dotnet publish` flags by default:
- `--configuration Release`
- `--runtime ubuntu.18.04-x64`
- `--self-contained false`
- `--output <temp-directory>`

See the dotnet CLI [documentation][dotnet/CLI-docs] for details about build configuration.

### Framework-Dependent Deployments or Framework-Dependent Executables

When building an application that has already been published as a
Framework-Dependent Deployment or Framework-Dependent Executable, the buildpack
will include the required .NET Core Framework dependencies and set the start
command.

### Self-Contained Deployment

When building an application as a [Self-Contained
Deployment](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-cli#self-contained-deployment) (SCD),
the buildpack will ensure the correct start command will be used to run your
app. No .NET Core Framework dependencies will be included in the built image as
they are already included in the SCD artifact. 

## Buildpack-Set Environment Variables

### DOTNET_ROOT

The `DOTNET_ROOT` environment variable specifies the path to the directory where .NET Runtimes and SDKs are installed.

* Set by: `dotnet-core-runtime`, `dotnet-core-sdk`, `dotnet-core-aspnet` buildpacks
* Phases: `build` and `launch`
* Value: path to the .NET root directory

### RUNTIME_VERSION

The `RUNTIME_VERSION` environment variable specifies the version of the .NET Core Runtime installed by the .NET Core Runtime buildpack.

* Set by: `dotnet-core-runtime`
* Phases: `build`
* Value: installed version of the .NET Core Runtime

### SDK_LOCATION

The `SDK_LOCATION` environment variable specifies the file path location of the installed .NET Core SDK.

* Set by: `dotnet-core-sdk`
* Phases: `build`
* Value: path to the .NET Core SDK installation

### PATH

The `PATH` environment variable is modified to enable the `dotnet` CLI to be found during subsequent `build` and `launch` phases.

* Set by: `dotnet-core-sdk`
* Phases: `build` and `launch`
* Value: path the directory containing the `dotnet` executable

## Launch Process

The .NET Core buildpack will ensure that your application image is built
with a valid launch process command. These commands differ slightly depending
upon the type of built artifact produced during the build process.

For more information about which built artifact is produced for a Source
Application, see [this section]({{< relref "#supported-application-types" >}}).

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

<!-- References -->
[paketo/composite-buildpack]:{{< ref "docs/concepts/buildpacks#composite-buildpacks" >}}
[dotnet/CLI-docs]:https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish
[service-binding]:{{< ref "docs/howto/configuration#bindings" >}}
[nugetconfig]:{{< ref "docs/howto/dotnet-core#via-service-bindings" >}}
