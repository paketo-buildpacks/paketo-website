---
title: "How to Build .NET Core Apps with Paketo Buildpacks"
weight: 300
menu:
  main:
    parent: "howto"
    name: ".NET Core"
aliases:
  - /docs/buildpacks/language-family-buildpacks/dotnet-core/
---

{{% howto_exec_summary bp_name="Paketo .NET Core Buildpack" bp_repo="https://github.com/paketo-buildpacks/dotnet-core" reference_docs_path="/docs/reference/dotnet-core-reference" %}}

## Build a Sample App
To build your app locally with the buildpack using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/dotnet-core/aspnet
pack build my-app --buildpack paketo-buildpacks/dotnet-core \
  --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

See
[samples][aspnet-sample] for how to run the app.

**NOTE: Though the example above uses the Paketo Base builder, this buildpack is
also compatible with the Paketo Full builder.**

## Install Specific .NET Runtime and ASP.NET Versions

The .NET Core Runtime and .NET Core ASP.NET Buildpacks allow you to specify a
version of the .NET Core Runtime and ASP.NET to use during deployment. This
version can be specified in several ways including through a
`runtimeconfig.json`, MSBuild Project file (e.g. `*.csproj`, `*.fsproj`, or `*.vbproj`), or build-time environment
variables. When specifying a version of the .NET Core Runtime and ASP.NET, you
must choose a version that is available within these buildpacks. These versions
can be found in the [.NET Core Runtime release
notes][bp/dotnet-core-runtime/releases] and [.NET Core ASP.NET release
notes][bp/dotnet-core-aspnet/releases].

.NET Core ASP.NET will only be included in the build process if your
application declares its Runtime Framework as either `Microsoft.AspNetCore.App`
or `Microsoft.AspNetCore.All`.

### Using `BP_DOTNET_FRAMEWORK_VERSION`

To configure the buildpack to use a certain version of the .NET Core Runtime
and ASP.NET when deploying your app, set the `$BP_DOTNET_FRAMEWORK` environment
variable at build time, either by passing a flag to the
[platform][definition/platform] or by adding it to your `project.toml`. See the
Cloud Native Buildpacks [documentation][project-file] to learn more about
`project.toml` files.

#### With a `pack build` flag
{{< code/copyable >}}
pack build myapp --env BP_DOTNET_FRAMEWORK_VERSION=5.0.4
{{< /code/copyable >}}

#### In a `project.toml` file
{{< code/copyable >}}
[ _ ]
schema-version = "0.2"

[[ io.buildpacks.build.env ]]
  name = 'BP_DOTNET_FRAMEWORK_VERSION'
  value = '5.0.4'
{{< /code/copyable >}}

**Note**: If you specify a particular version using the above environment
variable, the buildpack **will not** run runtime version roll-forward logic. To
learn more about roll-forward logic, see the [Microsoft .NET Runtime
documentation][dotnet-core-runtime-docs].

### Using runtimeconfig.json

If you are using a
[`runtimeconfig.json`][runtime-config-json-docs] file, you can specify the .NET
Core Runtime version within that file. To configure the buildpack to use .NET
Core Runtime v2.1.14 when deploying your app, include the values below in your
`runtimeconfig.json` file:

{{< code/copyable >}}
{
  "runtimeOptions": {
    "framework": {
      "version": "2.1.14"
    }
  }
}
{{< /code/copyable >}}

### Using a Project file

If you are using an MSBuild Project file (e.g. `*.csproj`, `*.fsproj`, or `*.vbproj`), you can specify
the .NET Core Runtime version within that file. To configure the buildpack to
use .NET Core Runtime v2.1.14 when deploying your app, include the values below
in your Project file:

{{< code/copyable >}}
<Project>
  <PropertyGroup>
    <RuntimeFrameworkVersion>2.1.14</RuntimeFrameworkVersion>
  </PropertyGroup>
</Project>
{{< /code/copyable >}}

Alternatively, for applications that do not rely upon a specific .NET Core
Runtime patch version, you can specify the Target Framework and the buildpack
will choose the appropriate .NET Core Runtime version. To configure the
buildpack to use a .NET Core Runtime version in the 2.1 .NET Core Target Framework
when deploying your app, include the values below in your Project file:

<!-- spellchecker-disable -->
{{< code/copyable >}}
<Project>
  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>
</Project>
{{< /code/copyable >}}
<!-- spellchecker-enable -->

For more details about specifying a .NET Core version using a Project file,
please review the [Microsoft documentation][dotnet-version-selection-docs].

### Deprecated: Using buildpack.yml

Specifying the .NET Core Framework version through `buildpack.yml`
configuration will be deprecated in .NET Core Runtime and .NET Core ASP.NET
Buildpacks v1.0.0.  To migrate from using `buildpack.yml`, please set the
`BP_DOTNET_FRAMEWORK_VERSION` environment variable.

## Install a Specific .NET SDK Version

By default, the .NET Core SDK Buildpack installs the latest available patch
version of the SDK that is compatible with the installed .NET Core runtime.
The available SDK versions for each buildpack release can be found in the
[release notes][bp/dotnet-core-sdk/releases].

### Deprecated: Using buildpack.yml

Specifying the .NET Core SDK version through `buildpack.yml` configuration will
be deprecated in .NET Core SDK Buildpack v1.0.0.

Because versions of the .NET Core runtime and .NET Core SDK dependencies are so
tightly coupled, most users should instead use the
`BP_DOTNET_FRAMEWORK_VERSION` environment variable to specify which version of
the .NET Core runtime that the .NET Core Runtime Buildpack should install. The
.NET Core SDK buildpack will automatically install an SDK version that is
compatible with the selected .NET Core runtime version.

## Build one project in a multi-project solution

By default, the Paketo .NET buildpack will consider the root of the provided
source code to be the root of the startup project you want to build.  This
directory should contain a C#, F#, or Visual Basic Project file. If your
startup project directory is not located at the root of your solution, you will
need to specify a project path.

For example, the following directory structure reflects a common .NET project setup, in
which the startup project, `App`, depends on other projects in the solution:
`ComponentProject` and `OtherComponentProject`.

```
./MultiProjectApp
├── MultiProjectApp.sln
├── ComponentProject
│   ├── Component.cs
│   └── ComponentProject.csproj
├── OtherComponentProject
│   ├── OtherComponent.cs
│   └── OtherComponentProject.csproj
└── App
    ├── Program.cs
    ├── appsettings.Development.json
    ├── appsettings.json
    └──  App.csproj
```

To build the `App` project, `pack build` from the root of the `MultiProjectApp`
directory and specify `App` as the project to build using the
`BP_DOTNET_PROJECT_PATH` environment variable.

**Note:** _Do not_ use `pack build myapp --path=./App` to build the `App`
project. Using the `--path` flag will exclude `ComponentProject` and
`OtherComponentProject` from the build container. If `App` depends on those
components, the build will fail when publishing `App`, because its dependencies
will not be present in the build container.

### Using `BP_DOTNET_PROJECT_PATH`

You can specify the path to the startup project you want to build by setting
the `$BP_DOTNET_PROJECT_PATH` environment variable at build time, either by
passing a flag to the [platform][definition/platform] or by adding it to your
`project.toml`. See the Cloud Native Buildpacks [documentation][project-file]
to learn more about `project.toml` files.

#### With a `pack build` flag
{{< code/copyable >}}
pack build my-app --env BP_DOTNET_PROJECT_PATH=./App
{{< /code/copyable >}}


#### In a `project.toml` file
{{< code/copyable >}}
[ _ ]
schema-version = "0.2"

[[ io.buildpacks.build.env ]]
  name = 'BP_DOTNET_PROJECT_PATH'
  value = './App'
{{< /code/copyable >}}

### Deprecated: Using buildpack.yml

Specifying the project path through `buildpack.yml` configuration will be
deprecated in Dotnet Publish Buildpack v1.0.0 & Dotnet Execute Buildpack
v1.0.0. To migrate from using `buildpack.yml`, please set the
`$BP_DOTNET_PROJECT_PATH` environment variable.

## Configure the `dotnet publish` Command
The Paketo .NET buildpack builds apps using the `dotnet publish` command, with certain opinionated flags by default. (See reference [documentation]({{< ref "docs/reference/dotnet-core-reference" >}}) for information about the default flagset.) It is possible to override or add to these defaults.

### Using `BP_DOTNET_PUBLISH_FLAGS`
Set the `BP_DOTNET_PUBLISH_FLAGS` environment variable at build time to provide additional flags to `dotnet publish` or override the default flagset.

#### With pack and a Command-Line Flag
When building with the pack CLI, set `BP_DOTNET_PUBLISH_FLAGS` at build time with the `--env` flag. For example, to add `--verbosity=normal` and `--self-contained=true` to the build flagset, set the environment variable as follows:
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/dotnet-core \
  --env BP_DOTNET_PUBLISH_FLAGS="--verbosity=normal --self-contained=true"
{{< /code/copyable >}}

#### With pack and a `project.toml`
When building with the pack CLI, create a [project.toml][cnb/project-file] file in your app directory that sets `BP_DOTNET_PUBLISH_FLAGS` at build time. For example, to add `--verbosity=normal` and `--self-contained=true` to the build flagset, set the environment variable as follows:
{{< code/copyable >}}
# project.toml
[ _ ]
schema-version = "0.2"

[[ io.buildpacks.build.env ]]
    name="BP_DOTNET_PUBLISH_FLAGS"
    value="--verbosity=normal --self-contained=true"
{{< /code/copyable >}}

## Provide NuGet Configurations
A NuGet configuration file can be provided to the build process in two
different ways. The provided file will have an effect on the `dotnet publish`
command within the build process.

#### Via Service Bindings
Configuration can be provided to the build without explicitly including the
file, which might contain credentials or other sensitive data, in the
application directory. When building with the pack CLI, a service binding
containing a `nuget.config` file can be provided. In addition to the
`nuget.config` file, the binding must be of `type` `nugetconfig`. Check out the
[service binding]({{< ref "docs/howto/configuration#bindings" >}})
documentation for more details on service bindings.

The binding will be made available as a "user-level" NuGet configuration at
`$HOME/.nuget/NuGet/NuGet.Config` during the build process. The  configuration
applies across all operations involving NuGet, but will be overridden by
project-level configurations.

The resulting command will look like:
{{< code/copyable >}}
pack build myapp --env SERVICE_BINDING_ROOT=/bindings --volume <absolute-path-to-binding>:/bindings/nugetconfig
{{< /code/copyable >}}

#### Via Application Source Code
A NuGet configuration file can also be provided in the application source
directory following .NET Core rules. The project-level configuration will take
precedence over a NuGet configuration provided via service binding.

## Enable Process Reloading
By default, your .NET server will be the only process running in your app
container at runtime. You can enable restarting the server process
when files in the app's working directory change, which may facilitate a shorter
feedback loop for iterating on code changes. This feature may be used in conjunction with
a dev orchestrator like [Tilt][tilt].

### Using `BP_LIVE_RELOAD_ENABLED`

To enable reloadable processes, set the `$BP_LIVE_RELOAD_ENABLED` environment
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
You can use the Paketo .NET Core buildpack with [Tilt][tilt]. This example
uses the [`pack` extension][tilt/pack] for Tilt, and shows how to configure watched files.
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack(
  'myapp',
  env_vars=[
    'BP_DOTNET_PROJECT_PATH="./src"',
    'BP_LIVE_RELOAD_ENABLED=true'
    ],
  live_update=[
    sync('./build', '/workspace/build'),
    sync('./src', '/workspace/src'),
    run('cp -rf /workspace/build/* /workspace/', trigger='./build')
  ]
)
# (Re)build locally when source code changes
local_resource(
  'dotnet-publish',
  cmd='rm -rf ./build && dotnet publish src --configuration Release --runtime ubuntu.18.04-x64 --self-contained false --output ./build',
  deps=['src'],
  ignore=[
    'src/obj',
    'src/bin'
  ]
)
{{< /code/copyable >}}
<!-- spellchecker-enable -->

##### Notes
- The .NET Paketo buildpack works best with Tilt and hot reloading when all of
  your app's source code is in a subdirectory (`./src` in the above example).
  <!-- spellchecker-disable -->
  Use [`BP_DOTNET_PROJECT_PATH`]({{< relref "#build-an-app-from-source-in-a-subdirectory" >}})
  <!-- spellchecker-enable -->
  to indicate the location of the source code.
- The .NET Paketo buildpack will not recompile your source code inside the
  running app container. You must use a `local_resource` to rebuild your app
  when source code changes, and copy the built artifacts into the container with
  `sync` and `run` steps, as shown.
- The `cmd` that is run as part of the `dotnet-publish` local resource matches
  the command that the .NET Core buildpack runs to build the app.

## Access the Software Bill of Materials
The .NET Core buildpack includes support for the software bill of materials (SBOM).
Check out the [SBOM how-to documentation][how-to/SBOM] for details on how to
access the SBOM supplied by the buildpacks.

SBOMs will be generated for all supported .NET Core applications.

## Enable Remote Debugging

Remote debugging can provide insight into complex program logic and
interactions in remote environments. This practice is supported for .NET Core
applications via the Visual Studio Debugger (`vsdbg`), which may be included in
your application image via the `BP_DEBUG_ENABLED` environment variable. The
debugger can attach to a running .NET Core process and be bound to a client-side
debugger via STDIN across a connection invoked via `docker exec`.

### Using `BP_DEBUG_ENABLED`

To enable remote debugging, set the `$BP_DEBUG_ENABLED` environment variable at
build time, either by passing a flag to the [platform][definition/platform] or
by adding it to your `project.toml`. See the Cloud Native Buildpacks
[documentation][project-file] to learn more about `project.toml` files.

#### With a `pack build` flag
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack build myapp --env BP_DEBUG_ENABLED=true
{{< /code/copyable >}}
<!-- spellchecker-enable -->

#### In a `project.toml` file
<!-- spellchecker-disable -->
{{< code/copyable >}}
[ _ ]
schema-version = "0.2"

[[ io.buildpacks.build.env ]]
  name = 'BP_DEBUG_ENABLED'
  value = 'true'
{{< /code/copyable >}}
<!-- spellchecker-enable -->

### Setting up Visual Studio Code for Remote Debugging

Visual Studio Code can be configured to [attach a remote debugging session
into a running container via `docker
exec`](https://github.com/OmniSharp/omnisharp-vscode/wiki/Attaching-to-remote-processes).
Once your application is built, follow the steps below to set up Visual Studio
Code for remote debugging.

1. Add `.vscode/launch.json` to app source directory

<!-- spellchecker-disable -->
{{< code/copyable >}}
{
  "configurations": [
    {
      "name": ".NET Core Docker Attach",
      "type": "coreclr",
      "request": "attach",
      "processId": "${command:pickRemoteProcess}",
      "pipeTransport": {
        "pipeProgram": "docker",
        "pipeArgs": [ "exec", "-i", "<container id>" ],
        "debuggerPath": "/cnb/lifecycle/launcher vsdbg",
        "pipeCwd": "${workspaceRoot}",
        "quoteArgs": false
      },
      "sourceFileMap": {
        "/workspace": "${workspaceRoot}"
      }
    }
  ]
}
{{< /code/copyable >}}
<!-- spellchecker-enable -->

2. Install the Microsoft C# extension

### Start Debugging in Visual Studio Code

1. Run the app with `docker run -p 8080:8080 <app-image-name>`
1. Open a browser window to `http://localhost:8080`
1. Update `<container id>` field in `launch.json` with actual container id

From here you might set a breakpoint and start debugging via the menu bar or by
pressing `F5`. In the event that you are prompted to select a process to attach
to, select the name of your app process if it is listed. See the Visual Studio Code
debugging [docs](https://code.visualstudio.com/docs/editor/debugging) for more about
how to use the debugger.

##### Notes
- The steps above are intended for remote debugging in a non-production
  context. Setting `BP_DEBUG_ENABLED` to `true` will ensure that a .NET app is
  published in Debug configuration instead of Release configuration and is the
  currently the only official way to include Visual Studio Debugger in your
  application image. It is possible to [perform remote debugging on
  Release-configured
  apps](https://github.com/OmniSharp/omnisharp-vscode/wiki/Attaching-to-remote-processes#building-and-deploying-the-application-and-pdbs)
  but that workflow is not officially supported by the .NET Core Buildpack.

## Install a Custom CA Certificate
.NET Core Buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates]({{< ref "/docs/howto/configuration#ca-certificates" >}})
section of our configuration docs.

## Override the Start Process Set by the Buildpack
.NET Core Buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles]({{< ref "/docs/howto/configuration#procfiles" >}}) section
of our configuration docs.

## Set Environment Variables for App Launch Time
.NET Core Buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Enable `DEBUG` logging
Users of the .NET Core buildpack can access extra debug logs during the image build process by setting the `BP_LOG_LEVEL`
environment variable to `DEBUG` at build time. Additional debug logs will
appear in build logs if the relevant buildpacks have debug log lines.
{{< code/copyable >}}
pack build my-app --buildpack paketo-buildpacks/dotnet-core \
  --env BP_LOG_LEVEL=DEBUG
{{< /code/copyable >}}

## Add Custom Labels to the App Image
.NET Core Buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels]({{< ref "/docs/howto/configuration#applying-custom-labels" >}})
section of our configuration docs.

<!---> References <---!>
<!-- spellchecker-disable -->
[aspnet-sample]:https://github.com/paketo-buildpacks/samples/tree/main/dotnet-core/aspnet
[bp/dotnet-core-aspnet/releases]:{{< bp_repo "dotnet-core-aspnet" >}}/releases
[bp/dotnet-core-runtime/releases]:{{< bp_repo "dotnet-core-runtime" >}}/releases
[bp/dotnet-core-sdk/releases]:{{< bp_repo "dotnet-core-sdk" >}}/releases
[definition/platform]:https://buildpacks.io/docs/concepts/components/platform
[dotnet-core-runtime-docs]:https://docs.microsoft.com/en-us/dotnet/core/versions/selection#framework-dependent-apps-roll-forward
[dotnet-version-selection-docs]:https://docs.microsoft.com/en-us/dotnet/core/versions/selection
[project-file]:https://buildpacks.io/docs/app-developer-guide/using-project-descriptor/
[runtime-config-json-docs]:https://docs.microsoft.com/en-us/dotnet/core/run-time-config/
[tilt/pack]:https://github.com/tilt-dev/tilt-extensions/tree/master/pack
[tilt]:https://tilt.dev/
[how-to/SBOM]:{{< ref "docs/howto/sbom" >}}
<!-- spellchecker-enable -->
