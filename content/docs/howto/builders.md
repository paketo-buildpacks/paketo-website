---
title: "How to Use Paketo Builders"
weight: 340
menu:
  main:
    parent: howto
    identifier: builders
    name: "Builders"
---

Paketo distributes several [builders][concepts/builders]. This documentation
explains how to use the Paketo builders to build applications and how create
your own builders. For a full list of available Paketo builders, see the
Builders reference [documentation][reference/builders].

## Use a Paketo builder
Paketo provides several builders that are compatible with Paketo buildpacks.
You can choose which builder you want to use based on what packages you want
available in your [stack][concepts/stacks] and which Paketo buildpacks you want
to use. The available builders are listed in the builders [reference
documentation][reference/builders].

### With `pack`
To build an app with the `pack` CLI and a specific Paketo builder, use the
`--builder` flag at build time.
{{< code/copyable >}}
pack build my-nodejs-app --builder paketobuildpacks/builder-jammy-base:latest
{{< /code/copyable >}}

### With Tekton
To use a Paketo builder image to build apps in a Tekton pipeline, follow the
Cloud Native Buildpacks [documentation][cnb/tekton] for creating a Tekton
pipeline and set the `BUILDER_IMAGE` parameter of the [`buildpacks` task][cnb/tekton/pipeline]
to point to a published Paketo builder.
{{< code/copyable >}}
- name: buildpacks # This task uses the `buildpacks` task to build the application
      taskRef:
        name: buildpacks
      params:
        - name: BUILDER_IMAGE
          value: paketobuildpacks/builder-jammy-base:latest # This is the builder we want the task to use (REQUIRED)
{{< /code/copyable >}}

## Extend a Paketo builder
Paketo builders are OCI images like any others, which means you can extend them with a Dockerfile.
To extend a Paketo builder, use a Dockerfile as follows:
{{< code/copyable >}}
cat > builder.Dockerfile << EOF
# pick a Paketo builder that suits your needs
FROM paketobuildpacks/builder-jammy-base:latest

# use the root user to enable privileged actions
USER 0:0

# install packages
RUN apt-get update && apt-get install \
  -y --no-install-recommends \
  git && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# switch back to the cnb user to prevent
# consumers from executing privileged actions
USER cnb
EOF

docker build -t my-builder-image -f builder.Dockerfile .
{{< /code/copyable >}}

**Note:** Extending a builder in this way will only add packages to the build
environment where buildpacks run. Installed packages **will not** be available
at runtime, because the builder's [run image][cnb/builder/stack] will be
unaffected. For more control over build- and runtime packages, see Paketo's
[documentation][howto/create-stack] on creating your own stack.


## Create your own builder
To create your own builder, follow the Cloud Native Buildpacks
[documentation][cnb/create-a-builder].  You can still use Paketo's [builder
repository automation][github/builder-automation] to maintain your builder.

<!-- References -->
[concepts/builders]:{{< ref "/docs/concepts/builders" >}}
[concepts/stacks]:{{< ref "/docs/concepts/stacks" >}}
[howto/create-stack]:{{< ref "/docs/howto/create-custom-stack" >}}
[reference/builders]:{{< ref "/docs/reference/builders-reference" >}}
[cnb/tekton]:https://buildpacks.io/docs/tools/tekton
[cnb/tekton/pipeline]:https://buildpacks.io/docs/tools/tekton/#43-pipeline
[cnb/create-a-builder]:https://buildpacks.io/docs/operator-guide/create-a-builder/
[cnb/builder/stack]:https://buildpacks.io/docs/reference/config/builder-config/#stack-_required_
[github/builder-automation]:https://github.com/paketo-buildpacks/github-config/tree/main/builder/.github/workflows

