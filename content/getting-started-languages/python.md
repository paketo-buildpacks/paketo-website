---
title: "Python"
page_id: "getting-started-pack-python"
---
## Python
Let's use the `base` Paketo Builder and the **pack** CLI to build a Python app
as a runnable container image.

### Prerequisites
1. Install Docker by following this [guide][install-docker].
1. Install the pack CLI by following this [guide][install-pack].

### Build the App Image From Source Code
Clone the Paketo samples repository and navigate to the source code for the sample Python app.

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples \
&& cd samples/python/pipenv
{{< /code/copyable >}}

From the sample app directory, use the pack CLI to build an app image.

{{< code/copyable >}}
pack build paketo-demo-app --builder paketobuildpacks/builder:base
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
7 of 9 buildpacks participating
paketo-buildpacks/ca-certificates 2.4.0
paketo-buildpacks/cpython         0.7.2
paketo-buildpacks/pip             0.5.1
paketo-buildpacks/pipenv          0.2.1
paketo-buildpacks/pipenv-install  0.2.3
paketo-buildpacks/python-start    0.6.2
paketo-buildpacks/procfile        4.3.0
===> ANALYZING
Previous image with name "paketo-demo-app" not found
===> RESTORING
===> BUILDING

Paketo CA Certificates Buildpack 2.4.0
  https://github.com/paketo-buildpacks/ca-certificates
  Launch Helper: Contributing to layer
    Creating /layers/paketo-buildpacks_ca-certificates/helper/exec.d/ca-certificates-helper
Paketo CPython Buildpack 0.7.2
  Resolving CPython version
    Candidate version sources (in priority order):
                -> ""
      <unknown> -> ""

    Selected CPython version (using ): 3.8.12

  Executing build process
    Installing CPython 3.8.12
      Completed in 2.884s

  Configuring environment
    PYTHONPATH -> "/layers/paketo-buildpacks_cpython/cpython"

Paketo Pip Buildpack 0.5.1
  Resolving Pip version
    Candidate version sources (in priority order):
       -> ""

    Selected Pip version (using ): 21.2.4

  Executing build process
    Installing Pip 21.2.4
      Completed in 7.743s

  Configuring environment
    PYTHONPATH -> "/layers/paketo-buildpacks_pip/pip/lib/python3.8/site-packages:$PYTHONPATH"

Paketo Pipenv Buildpack 0.2.1
  Resolving Pipenv version
    Candidate version sources (in priority order):
       -> ""

    Selected Pipenv version (using ): 2021.5.29

  Executing build process
    Installing Pipenv 2021.5.29
      Completed in 5.895s

  Configuring environment
    PYTHONPATH -> "/layers/paketo-buildpacks_pipenv/pipenv/lib/python3.8/site-packages:$PYTHONPATH"

Paketo Pipenv Install Buildpack 0.2.3
  Executing build process
    Running 'pipenv install --deploy'
    Running 'pipenv clean'
  Configuring environment
    PATH           -> "/layers/paketo-buildpacks_pipenv-install/packages/workspace-dqq3IVyd/bin:$PATH"
    PYTHONUSERBASE -> "/layers/paketo-buildpacks_pipenv-install/packages/workspace-dqq3IVyd"

      Completed in 5.511s

Paketo Python Start Buildpack 0.6.2
  Assigning launch process
    web: python

Paketo Procfile Buildpack 4.3.0
  https://github.com/paketo-buildpacks/procfile
  Process types:
    web: gunicorn server:app
===> EXPORTING
Adding layer 'paketo-buildpacks/ca-certificates:helper'
Adding layer 'paketo-buildpacks/cpython:cpython'
Adding layer 'paketo-buildpacks/pipenv-install:packages'
Adding 1/1 app layer(s)
Adding layer 'launcher'
Adding layer 'config'
Adding layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
Saving paketo-demo-app...
*** Images (2aa4026c4df4):
      paketo-demo-app
Adding cache layer 'paketo-buildpacks/cpython:cpython'
Adding cache layer 'paketo-buildpacks/pip:pip'
Adding cache layer 'paketo-buildpacks/pipenv:pipenv'
Adding cache layer 'paketo-buildpacks/pipenv-install:cache'
Adding cache layer 'paketo-buildpacks/pipenv-install:packages'
Successfully built image 'paketo-demo-app'
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
curl http://localhost:8080/
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
</html>
{{< /code/output >}}

You can also visit `http://localhost:8080` with your browser to see the app's homepage.

[install-docker]:https://docs.docker.com/get-docker/
[install-pack]:https://buildpacks.io/docs/install-pack/
