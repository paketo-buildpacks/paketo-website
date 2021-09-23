---
title: ".NET Core"
page_id: "getting-started-pack-dotnetcore"
---
## .NET Core

Let's use the `base` Paketo Builder and the **pack** CLI to build an ASP.NET app
as a runnable container image. 
### Prerequisites
1. Install Docker by following this [guide][install-docker].
1. Install the pack CLI by following this [guide][install-pack].

### Build the App Image From Source Code
Clone the Paketo samples repository and navigate to the source code for the sample ASP.NET app.

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples \
&& cd samples/dotnet-core/aspnet
{{< /code/copyable >}}

From the sample app directory, use the pack CLI to build an app image.

{{< code/copyable >}}
pack build paketo-demo-app --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
7 of 11 buildpacks participating
paketo-buildpacks/ca-certificates     2.3.2
paketo-buildpacks/dotnet-core-runtime 0.1.12
paketo-buildpacks/dotnet-core-aspnet  0.1.12
paketo-buildpacks/dotnet-core-sdk     0.1.10
paketo-buildpacks/icu                 0.0.102
paketo-buildpacks/dotnet-publish      0.3.0
paketo-buildpacks/dotnet-execute      0.4.0
===> ANALYZING
Previous image with name "paketo-demo-app" not found
===> RESTORING
===> BUILDING

Paketo CA Certificates Buildpack 2.3.2
  https://github.com/paketo-buildpacks/ca-certificates
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_ca-certificates/helper/exec.d/ca-certificates-helper
Paketo .NET Core Runtime Buildpack 0.1.12
  Resolving Dotnet Core Runtime version
    Candidate version sources (in priority order):
      aspnet.csproj -> "3.1.0"
      <unknown>     -> ""

    No exact version match found; attempting version roll-forward

    Selected dotnet-runtime version (using aspnet.csproj): 3.1.16

  Executing build process
    Installing Dotnet Core Runtime 3.1.16
      Completed in 7.304s

  Configuring environment for build and launch
    DOTNET_ROOT -> "/workspace/.dotnet_root"

  Configuring environment for build
    RUNTIME_VERSION -> "3.1.16"

Paketo ASP.NET Core Buildpack 0.1.12
  Resolving Dotnet Core ASPNet version
    Candidate version sources (in priority order):
      RUNTIME_VERSION -> "3.1.16"
      aspnet.csproj   -> "3.1.0"
      <unknown>       -> ""

    Selected dotnet-aspnetcore version (using RUNTIME_VERSION): 3.1.16

  Executing build process
    Installing Dotnet Core ASPNet 3.1.16
      Completed in 2.582s

  Configuring environment
    DOTNET_ROOT -> "/workspace/.dotnet_root"

Paketo .NET Core SDK Buildpack 0.1.10
  Resolving .NET Core SDK version
    Candidate version sources (in priority order):
      RUNTIME_VERSION -> "3.1.410"
      <unknown>       -> "*"
      aspnet.csproj   -> "3.1.*"

    Selected .NET Core SDK version (using RUNTIME_VERSION): 3.1.410

  Executing build process
    Installing .NET Core SDK 3.1.410
      Completed in 14.08s

  Configuring environment
    DOTNET_ROOT -> "/workspace/.dotnet_root"
    PATH        -> "/workspace/.dotnet_root:$PATH"

Paketo ICU Buildpack 0.0.102
  Executing build process
    Installing ICU
      Completed in 2.56s

Paketo .NET Publish Buildpack 0.3.0
  Executing build process
    Running 'dotnet publish /workspace --configuration Release --runtime ubuntu.18.04-x64 --self-contained false --output /tmp/dotnet-publish-output295991778'
      Completed in 5.2121426s

  Removing source code

Paketo .NET Execute Buildpack 0.4.0
  Assigning launch processes
    web: /workspace/aspnet --urls http://0.0.0.0:${PORT:-8080}

===> EXPORTING
Adding layer 'paketo-buildpacks/ca-certificates:helper'
Adding layer 'paketo-buildpacks/dotnet-core-runtime:dotnet-core-runtime'
Adding layer 'paketo-buildpacks/dotnet-core-aspnet:dotnet-core-aspnet'
Adding layer 'paketo-buildpacks/dotnet-core-sdk:dotnet-env-var'
Adding layer 'paketo-buildpacks/icu:icu'
Adding 1/1 app layer(s)
Adding layer 'launcher'
Adding layer 'config'
Adding layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
Saving paketo-demo-app...
*** Images (4c1b1f739e63):
      paketo-demo-app
Adding cache layer 'paketo-buildpacks/dotnet-core-runtime:dotnet-core-runtime'
Adding cache layer 'paketo-buildpacks/dotnet-core-aspnet:dotnet-core-aspnet'
Adding cache layer 'paketo-buildpacks/dotnet-core-sdk:dotnet-core-sdk'
Adding cache layer 'paketo-buildpacks/icu:icu'
Successfully built image paketo-demo-app
{{< /code/output >}}

Once the build finishes, you'll see that the resulting image is on your Docker daemon.

### Run the App
Let's start an instance of our app and interact with it.

Run the app image with Docker. It will receive incoming requests on `localhost:8080`.

{{< code/copyable >}}
docker run -d -p 8080:8080 -e PORT=8080 paketo-demo-app
{{< /code/copyable >}}

Wait a few moments for the app to start. Then, use `curl` to make a request.

{{< code/copyable >}}
curl http://localhost:8080
{{< /code/copyable >}}

{{< code/output >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Paketo Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://paketo.io/images/paketo-logo-full-color.png"></img>
  </body>
</html>%
{{< /code/output >}}

You can also visit `http://localhost:8080` with your browser to see the app's homepage.

You've done it! As you can see, Paketo buildpacks do most of the hard work for you.

Check out more [sample apps](https://github.com/paketo-buildpacks/samples) that work with Paketo Buildpacks.

Keep reading to learn about Paketo Builders, the Cloud Native Buildpack API, and what Paketo Buildpacks are doing under the hood to make it easy to build your apps.
