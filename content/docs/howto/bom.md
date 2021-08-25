---
title: "How to Access the Bill of Materials"
weight: 345
menu:
  main:
    parent: "howto"
---

This documentation explains how to access the bill of materials on an app image built using Paketo buildpacks. For more in-depth field definitions and details check out the [Bill of Materials concept page]({{< ref "docs/concepts/bom" >}}).


## Access the Bill of Materials on a Sample Node Application

You can access the bill of materials in the metadata of any app image created with Paketo Buildpacks. However, at this time the only buildpacks that support the **full set** of BOM fields defined in the [concepts docs]({{< ref "docs/concepts/bom" >}}) are Node.js and Java. There is an ongoing effort build out the full BOM in all of our buildpacks, and the related documentation will be updated as new buildpacks are included.

1. Follow the [Node.JS Getting Started tutorial](/docs#nodejs) to build the Node.js `paketo-demo-app` image.

2. Use the pack CLI to inspect the app image metadata. Use the `--bom` flag to specifically retrieve the bill of materials metadata.
{{< code/copyable >}}
pack inspect-image paketo-demo-app --bom
{{< /code/copyable >}}
{{< code/output >}}
{
  "remote": null,
  "local": [
    {
      "name": "Node Engine",
      "metadata": {
        "checksum": {
          "algorithm": "SHA-256",
          "hash": "a50ee095f936b51fffe5c032a7377a156723145c1ab0291ccc882f04719f1b54"
        },
        "cpe": "cpe:2.3:a:nodejs:node.js:16.7.0:*:*:*:*:*:*:*",
        "deprecation-date": "2024-04-30T00:00:00Z",
        "licenses": [
          "0BSD",
          "Apache-2.0",
          "Artistic-2.0",
          "BSD-2-Clause",
          "BSD-3-Clause",
          "BSD-3-Clause-Clear",
          "CC0-1.0",
          "MIT",
          "MIT-0",
          "Unicode-TOU"
        ],
        "purl": "pkg:generic/node@v16.7.0?checksum=0c4a82acc5ae67744d56f2c97db54b859f2b3ef8e78deacfb8aed0ed4c7cb690&download_url=https://nodejs.org/dist/v16.7.0/node-v16.7.0.tar.gz",
        "source": {
          "checksum": {
            "algorithm": "SHA-256",
            "hash": "0c4a82acc5ae67744d56f2c97db54b859f2b3ef8e78deacfb8aed0ed4c7cb690"
          },
          "uri": "https://nodejs.org/dist/v16.7.0/node-v16.7.0.tar.gz"
        },
        "stacks": [
          "io.buildpacks.stacks.bionic"
        ],
        "uri": "https://deps.paketo.io/node/node_v16.7.0_linux_x64_bionic_a50ee095.tgz",
        "version": "16.7.0"
      },
      "buildpacks": {
        "id": "paketo-buildpacks/node-engine",
        "version": "1.2.3"
      }
    },
    {
      "name": "node_modules",
      "metadata": {
        "build": true
      },
      "buildpacks": {
        "id": "paketo-buildpacks/npm-install",
        "version": "0.4.0"
      }
    },
    {
      "name": "node_modules",
      "metadata": {
        "launch": true
      },
      "buildpacks": {
        "id": "paketo-buildpacks/npm-install",
        "version": "0.4.0"
      }
    },
    {
      "name": "httpdispatcher",
      "metadata": {
        "licenses": [
          "MIT"
        ],
        "purl": "pkg:npm/httpdispatcher@2.1.2",
        "version": "2.1.2"
      },
      "buildpacks": {
        "id": "paketo-buildpacks/node-module-bom",
        "version": "1.2.3"
      }
    },
    {
      "name": "mime-types",
      "metadata": {
        "licenses": [
          "MIT"
        ],
        "purl": "pkg:npm/mime-types@2.1.32",
        "version": "2.1.32"
      },
      "buildpacks": {
        "id": "paketo-buildpacks/node-module-bom",
        "version": "1.2.3"
      }
    },
     {
      "name": "mime-db",
      "metadata": {
        "licenses": [
          "MIT"
        ],
        "purl": "pkg:npm/mime-db@1.49.0",
        "version": "1.49.0"
      },
      "buildpacks": {
        "id": "paketo-buildpacks/node-module-bom",
        "version": "1.2.3"
      }
    },
    {
      "name": "leftpad",
      "metadata": {
        "licenses": [
          "BSD-3-Clause"
        ],
        "purl": "pkg:npm/leftpad@0.0.1",
        "version": "0.0.1"
      },
      "buildpacks": {
        "id": "paketo-buildpacks/node-module-bom",
        "version": "1.2.3"
      }
    }
  ]
}
{{< /code/output >}}
*Note: It may be easier to read and parse the output if you pipe the output to [jq](https://stedolan.github.io/jq/). The full command would then be:*
{{< code/copyable >}}
pack inspect-image paketo-demo-app --bom | jq -r
{{< /code/copyable >}}

## See Build-Time Dependencies in the BOM
The bill of materials from the example above contains entries for every dependency on the final application image. However, it does not contain any dependencies that may have been used in the image build process but are not on the final image.

Bill of materials entries are collected for build-time dependencies, but there is currently no way to access these entries. This will be available in future iterations of the bill of materials.
