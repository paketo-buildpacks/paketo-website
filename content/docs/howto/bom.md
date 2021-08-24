---
title: "Accessing the Bill of Materials"
weight: 345
menu:
  main:
    parent: "howto"
aliases:
  - /docs/tutorials/how-to-bom/
---


## Accessing the Bill of Materials
The BOM can be accessed via `pack` on the Node.js `paketo-demo-app` from the [Getting Started tutorial](/docs#nodejs):

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
        "cpe": "cpe:2.3:a:nodejs:node.js:16.6.1:*:*:*:*:*:*:*",
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
        "purl": "pkg:generic/node@v16.6.1?checksum=36467b8a4e7e3bacc2f4f1709a83b0506429d1999bc461e5e363bc91d3437c09&download_url=https://nodejs.org/dist/v16.6.1/node-v16.6.1.tar.gz",
        "sha256": "41d0fdadd629aff419b1e284fb12397ccfa100e15eaab3b39e57f61ed381d90c",
        "source": {
          "sha256": "36467b8a4e7e3bacc2f4f1709a83b0506429d1999bc461e5e363bc91d3437c09",
          "uri": "https://nodejs.org/dist/v16.6.1/node-v16.6.1.tar.gz"
        },
        "stacks": [
          "io.buildpacks.stacks.bionic"
        ],
        "uri": "https://deps.paketo.io/node/node_v16.6.1_linux_x64_bionic_41d0fdad.tgz",
        "version": "16.6.1"
      },
      "buildpack": {
        "id": "paketo-buildpacks/node-engine",
        "version": "1.2.3"
      }
    },
    {
      "name": "node_modules",
      "metadata": {
        "build": true
      },
      "buildpack": {
        "id": "paketo-buildpacks/npm-install",
        "version": "1.2.3"
      }
    },
    {
      "name": "node_modules",
      "metadata": {
        "launch": true
      },
      "buildpack": {
        "id": "paketo-buildpacks/npm-install",
        "version": "1.2.3"
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
      "buildpack": {
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
      "buildpack": {
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
      "buildpack": {
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
      "buildpack": {
        "id": "paketo-buildpacks/node-module-bom",
        "version": "1.2.3"
      }
    }
  ]
}
{{< /code/output >}}

If you are looking for definitions of the fields you can check out the [Bill of Materials concept page]({{< ref "docs/concepts/bom" >}}). 

## What does it include?
Looking at the full BOM output can be overwhelming due to the large number of dependencies and information about each one. Let's break down what's actually present in the bill of materials in the Node.js `paketo-demo-app`.

It is worth a quick note that the only buildpacks that support the full set of BOM fields at this time are [Node.js]({{< ref "docs/reference/nodejs-reference" >}}) and [Java]({{< ref "docs/reference/java-reference" >}}). However, there is an ongoing effort to try and ensure that all of our buildpacks have the richest BOM possible.
### Buildpack Entries
```plain
"name": "Node Engine",
"metadata": {
  "cpe": "cpe:2.3:a:nodejs:node.js:16.6.1:*:*:*:*:*:*:*",
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
  "purl": "pkg:generic/node@v16.6.1?checksum=36467b8a4e7e3bacc2f4f1709a83b0506429d1999bc461e5e363bc91d3437c09&download_url=https://nodejs.org/dist/v16.6.1/node-v16.6.1.tar.gz",
  "sha256": "41d0fdadd629aff419b1e284fb12397ccfa100e15eaab3b39e57f61ed381d90c",
  "source": {
    "sha256": "36467b8a4e7e3bacc2f4f1709a83b0506429d1999bc461e5e363bc91d3437c09",
    "uri": "https://nodejs.org/dist/v16.6.1/node-v16.6.1.tar.gz"
  },
  "stacks": [
    "io.buildpacks.stacks.bionic"
  ],
  "uri": "https://deps.paketo.io/node/node_v16.6.1_linux_x64_bionic_41d0fdad.tgz",
  "version": "16.6.1"
},
"buildpack": {
  "id": "paketo-buildpacks/node-engine",
  "version": "1.2.3"
}
```
Above is an example of what the BOM entry for a dependency that is directly provided by a Paketo buildpack looks like, in this case its the `node-engine` dependency installed by the `Node Engine` buildpack. Other examples of these type of entries would be those that appear when the `Yarn` buildpack is used, or the `JVM` buildpack is used. These entries are built by the buildpacks using metadata obtained during the contstruction of the dependency itself.

### Language Module Entries
```plain
{
  "name": "httpdispatcher",
  "metadata": {
    "licenses": [
      "MIT"
    ],
    "purl": "pkg:npm/httpdispatcher@2.1.2",
    "version": "2.1.2"
  },
  "buildpack": {
    "id": "paketo-buildpacks/node-module-bom",
    "version": "1.2.3"
  }
}
```
Above is an example of what the BOM entry for a language module dependency looks like, in this case it's a `node module` entry installed as a part of the `NPM Install` buildpack. These BOM entries include things such as Node Modules and Maven Packages. They are constructed from metadata gleaned from these packages after they have been installed on the container.
