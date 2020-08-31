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
===> CREATING
[creator] ---> DETECTING
[creator] paketo-buildpacks/node-engine 0.0.178
[creator] paketo-buildpacks/npm         0.1.11
[creator] ---> ANALYZING
[creator] Skipping buildpack layer analysis
[creator] ---> BUILDING
[creator] Node Engine Buildpack 0.0.178
[creator]   Resolving Node Engine version
[creator]     Candidate version sources (in priority order):
[creator]       package.json -> "~10"
[creator]
[creator]     Selected Node Engine version (using package.json): 10.19.0
......................
[creator] Adding cache layer 'paketo-buildpacks/node-engine:node'
[creator] Adding cache layer 'paketo-buildpacks/npm:npm-cache'
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

Check out more [sample apps](https://github.com/paketo-buildpacks/samples) with Paketo Buildpacks.

Keep reading to learn about Paketo Builders, the Cloud Native Buildpack API and what Paketo Buildpacks are doing under the hood to make it easy to build your apps.
