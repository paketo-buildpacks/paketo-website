---
title: "Getting Started"
weight: 100
menu: "main"
---

# Getting Started
This section gets you started with Paketo Buildpacks using Paketo **Builders**, the **Pack** CLI, and **Docker**.

Let's use the `base` Paketo Builder and the **Pack** CLI to build a Node.js app
as a runnable container image. App source code is available
[here](https://github.com/paketo-buildpacks/samples/tree/master/demo-apps/app-source).

**Prerequisites** - Install Pack and Docker  
Follow [these instructions](https://buildpacks.io/docs/install-pack/) to get all set up.

And we're good to go! Let's build our app into a container image using the `pack build` command.

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/demo-apps/app-source
pack build paketo-demo-app --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

{{< code/output >}}
......................
===> DETECTING
paketo-buildpacks/node-engine 0.1.1
paketo-buildpacks/npm-install 0.2.0
paketo-buildpacks/npm-start   0.0.2
===> ANALYZING
Restoring metadata for "paketo-buildpacks/node-engine:node" from app image
===> RESTORING
Restoring data for "paketo-buildpacks/node-engine:node" from cache
===> BUILDING
Paketo Node Engine Buildpack 0.1.1
  Resolving Node Engine version
    Candidate version sources (in priority order):
      package.json -> "~10"
      <unknown>    -> "*"

    Selected Node Engine version (using package.json): 10.22.0

  Reusing cached layer /layers/paketo-buildpacks_node-engine/node

Paketo NPM Install Buildpack 0.2.0
  Resolving installation process
    Process inputs:
      node_modules      -> "Not found"
      npm-cache         -> "Not found"
      package-lock.json -> "Not found"

    Selected NPM build process: 'npm install'

  Executing build process
    Running 'npm install --unsafe-perm --cache /layers/paketo-buildpacks_npm-install/npm-cache'
      Completed in 1.348s

  Configuring environment
    NPM_CONFIG_LOGLEVEL   -> "error"
    NPM_CONFIG_PRODUCTION -> "true"
    PATH                  -> "$PATH:/layers/paketo-buildpacks_npm-install/modules/node_modules/.bin"
Paketo NPM Start Buildpack 0.0.2
  Assigning launch processes
    web: node server.js
===> EXPORTING
Reusing layer 'paketo-buildpacks/node-engine:node'
Adding layer 'paketo-buildpacks/npm-install:modules'
Adding layer 'paketo-buildpacks/npm-install:npm-cache'
Adding 1/1 app layer(s)
Reusing layer 'launcher'
Adding layer 'config'
Reusing layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
......................
Successfully built image paketo-demo-app
{{< /code/output >}}

We've successfully created an image called **paketo-demo-app**. Now let's run our app image and validate that everything is working.

{{< code/copyable >}}
docker run -p 8080:8080 -e PORT=8080 -d -it paketo-demo-app
{{< /code/copyable >}}

Wait a few seconds for your app to start.

{{< code/copyable >}}
curl http://localhost:8080/greeting
{{< /code/copyable >}}

{{< code/output >}}
Hello from your application image
{{< /code/output >}}

Awesome! Our app is now running on `localhost:8080`.

Check out more [sample apps](https://github.com/paketo-buildpacks/samples) that work with Paketo Buildpacks.

Keep reading to learn about Paketo Builders, the Cloud Native Buildpack API, and what Paketo Buildpacks are doing under the hood to make it easy to build your apps.
