---
title: "Node.js"
page_id: "getting-started-pack-nodejs"
---
## Node.js
Let's use the `base` Paketo Builder and the **pack** CLI to build a Node.js app
as a runnable container image. 

### Prerequisites
1. Install Docker by following this [guide][install-docker].
1. Install the pack CLI by following this [guide][install-pack].

### Build the App Image From Source Code
Clone the Paketo samples repository and navigate to the source code for the sample Node.js app.

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples \
&& cd samples/demo-apps/app-source
{{< /code/copyable >}}

From the sample app directory, use the pack CLI to build an app image.

{{< code/copyable >}}
pack build paketo-demo-app --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
4 of 8 buildpacks participating
paketo-buildpacks/ca-certificates 2.3.2
paketo-buildpacks/node-engine     0.6.2
paketo-buildpacks/npm-install     0.4.0
paketo-buildpacks/npm-start       0.3.0
===> ANALYZING
Previous image with name "paketo-demo-app" not found
===> RESTORING
===> BUILDING

Paketo CA Certificates Buildpack 2.3.2
  https://github.com/paketo-buildpacks/ca-certificates
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_ca-certificates/helper/exec.d/ca-certificates-helper
Paketo Node Engine Buildpack 0.6.2
  Resolving Node Engine version
    Candidate version sources (in priority order):
      package.json -> ">10"
      <unknown>    -> ""

    Selected Node Engine version (using package.json): 16.6.2

  Executing build process
    Installing Node Engine 16.6.2
      Completed in 4.372s

  Configuring build environment
    NODE_ENV     -> "production"
    NODE_HOME    -> "/layers/paketo-buildpacks_node-engine/node"
    NODE_VERBOSE -> "false"

  Configuring launch environment
    NODE_ENV     -> "production"
    NODE_HOME    -> "/layers/paketo-buildpacks_node-engine/node"
    NODE_VERBOSE -> "false"

    Writing profile.d/0_memory_available.sh
      Calculates available memory based on container limits at launch time.
      Made available in the MEMORY_AVAILABLE environment variable.

Paketo NPM Install Buildpack 0.4.0
  Resolving installation process
    Process inputs:
      node_modules      -> "Not found"
      npm-cache         -> "Not found"
      package-lock.json -> "Not found"

    Selected NPM build process: 'npm install'

  Executing build process
    Running 'npm install --unsafe-perm --cache /layers/paketo-buildpacks_npm-install/npm-cache'
      Completed in 2.519s

  Configuring launch environment
    NPM_CONFIG_LOGLEVEL -> "error"

  Configuring environment shared by build and launch
    PATH -> "$PATH:/layers/paketo-buildpacks_npm-install/modules/node_modules/.bin"


Paketo NPM Start Buildpack 0.3.0
  Assigning launch processes
    web: node server.js

===> EXPORTING
Adding layer 'paketo-buildpacks/ca-certificates:helper'
Adding layer 'paketo-buildpacks/node-engine:node'
Adding layer 'paketo-buildpacks/npm-install:modules'
Adding layer 'paketo-buildpacks/npm-install:npm-cache'
Adding 1/1 app layer(s)
Adding layer 'launcher'
Adding layer 'config'
Adding layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
Saving paketo-demo-app...
*** Images (1a770ae9a065):
      paketo-demo-app
Reusing cache layer 'paketo-buildpacks/node-engine:node'
Reusing cache layer 'paketo-buildpacks/npm-install:modules'
Adding cache layer 'paketo-buildpacks/npm-install:npm-cache'
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
curl http://localhost:8080/greeting
{{< /code/copyable >}}

{{< code/output >}}
Hello from your application image
{{< /code/output >}}

You've done it! As you can see, Paketo buildpacks do most of the hard work for you.

Check out more [sample apps](https://github.com/paketo-buildpacks/samples) that work with Paketo Buildpacks.

Keep reading to learn about Paketo Builders, the Cloud Native Buildpack API, and what Paketo Buildpacks are doing under the hood to make it easy to build your apps.
