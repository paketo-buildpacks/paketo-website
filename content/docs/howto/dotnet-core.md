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

## Install Specific .NET Runtime and ASP.Net Versions

The .Net Core Runtime and .Net Core ASP.Net Buildpacks allow you to specify a
version of the .Net Core Runtime and ASP.Net to use during deployment. This
version can be specified in several ways including through a
`runtimeconfig.json`, MSBuild Project file, or build-time environment
variables. When specifying a version of the .Net Core Runtime and ASP.Net, you
must choose a version that is available within these buildpacks. These versions
can be found in the [.Net Core Runtime release
notes][bp/dotnet-core-runtime/releases] and [.Net Core ASP.Net release
notes][bp/dotnet-core-aspnet/releases].

.Net Core ASP.Net will only be included in the build process if your
application declares its Runtime Framework as either `Microsoft.AspNetCore.App`
or `Microsoft.AspNetCore.All`.

### Using `BP_DOTNET_FRAMEWORK_VERSION`

To configure the buildpack to use a certain version of the .Net Core Runtime
and ASP.Net when deploying your app, set the `$BP_DOTNET_FRAMEWORK` environment
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
[[ build.env ]]
  name = 'BP_DOTNET_FRAMEWORK_VERSION'
  value = '5.0.4'
{{< /code/copyable >}}

**Note**: If you specify a particular version using the above environment
variable, the buildpack **will not** run runtime version roll-forward logic. To
learn more about roll-forward logic, see the [Microsoft .Net Runtime
documentation][dotnet-core-runtime-docs].

### Using runtimeconfig.json

If you are using a
[`runtimeconfig.json`][runtime-config-json-docs] file, you can specify the .Net
Core Runtime version within that file. To configure the buildpack to use .Net
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

If you are using a Project file (e.g. `*.csproj`, `*.fsproj`, or `*.vbproj`), you can specify
the .Net Core Runtime version within that file. To configure the buildpack to
use .Net Core Runtime v2.1.14 when deploying your app, include the values below
in your Project file:

{{< code/copyable >}}
<Project>
  <PropertyGroup>
    <RuntimeFrameworkVersion>2.1.14</RuntimeFrameworkVersion>
  </PropertyGroup>
</Project>
{{< /code/copyable >}}

Alternatively, for applications that do not rely upon a specific .Net Core
Runtime patch version, you can specify the Target Framework and the buildpack
will choose the appropriate .Net Core Runtime version. To configure the
buildpack to use a .Net Core Runtime version in the 2.1 .Net Core Target Framework
when deploying your app, include the values below in your Project file:

{{< code/copyable >}}
<Project>
  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>
</Project>
{{< /code/copyable >}}

For more details about specifying a .Net Core version using a Project file,
please review the [Microsoft documentation][dotnet-version-selection-docs].

### Deprecated: Using buildpack.yml

Specifying the .Net Core Framework version through `buildpack.yml`
configuration will be deprecated in .Net Core Runtime and .Net Core ASP.NET
Buildpacks v1.0.0.  To migrate from using `buildpack.yml`, please set the
`BP_DOTNET_FRAMEWORK_VERSION` environment variable.

## Install a Specific .NET SDK Version

By default, the .Net Core SDK Buildpack installs the latest available patch
version of the SDK that is compatible with the installed .Net Core runtime.
The available SDK versions for each buildpack release can be found in the
[release notes][bp/dotnet-core-sdk/releases].

However, the .Net Core SDK version can be explicitly set by specifying a
version in a `buildpack.yml` file.

### Deprecated: Using buildpack.yml

Specifying the .Net Core SDK version through `buildpack.yml` configuration will
be deprecated in .Net Core SDK Buildpack v1.0.0.

Because versions of the .NET Core runtime and .NET Core SDK dependencies are so
tightly coupled, most users should instead use the
`BP_DOTNET_FRAMEWORK_VERSION` environment variable to specify which version of
the .NET Core runtime that the .NET Core Runtime Buildpack should install. The
.Net Core SDK buildpack will automatically install an SDK version that is
compatible with the selected .NET Core runtime version.

## Build an App from Source in a Subdirectory

By default, the Paketo .NET buildpack will consider the root directory of
your codebase to be the project directory. This directory should contain a C#,
F#, or Visual Basic Project file. If your project directory is not located at
the root of your source code you will need to set a custom project path.

### Using `BP_DOTNET_PROJECT_PATH`

You can specify a project path by setting the `$BP_DOTNET_PROJECT_PATH`
environment variable at build time, either by passing a flag to the
[platform][definition/platform] or by adding it to your `project.toml`. See the
Cloud Native Buildpacks [documentation][project-file] to learn more about
`project.toml` files.

#### With a `pack build` flag
{{< code/copyable >}}
pack build my-app --env BP_DOTNET_PROJECT_PATH=./src
{{< /code/copyable >}}


#### In a `project.toml` file
{{< code/copyable >}}
[[ build.env ]]
  name = 'BP_DOTNET_PROJECT_PATH'
  value = './src'
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
[ build ]
  [[ build.env ]]
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
[[ build.env ]]
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

## Install a Custom CA Certificate
.Net Core Buildpack users can provide their own CA certificates and have them
included in the container root truststore at build-time and runtime by
following the instructions outlined in the [CA
Certificates]({{< ref "/docs/howto/configuration#ca-certificates" >}})
section of our configuration docs.

## Override the Start Process Set by the Buildpack
.Net Core Buildpack users can set custom start processes for their app image by
following the instructions in the
[Procfiles]({{< ref "/docs/howto/configuration#procfiles" >}}) section
of our configuration docs.

## Set Environment Variables for App Launch Time
.Net Core Buildpack users can embed launch-time environment variables in their
app image by following the documentation for the [Environment Variables
Buildpack](https://github.com/paketo-buildpacks/environment-variables/blob/main/README.md).

## Add Custom Labels to the App Image
.Net Core Buildpack users can add labels to their app image by following the
instructions in the [Applying Custom
Labels]({{< ref "/docs/howto/configuration#applying-custom-labels" >}})
section of our configuration docs.

<!---> References <---!>
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
