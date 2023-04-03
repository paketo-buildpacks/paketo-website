---
title: "How to Access the Software Bill of Materials"
weight: 345
menu:
  main:
    parent: "howto"
    name: "Access the SBOM"
aliases:
  - /docs/howto/bom
---

This documentation explains how to access the software bill of materials (SBOM) for an
app image built using Paketo buildpacks. For more in-depth field definitions
and details check out the [software bill of materials concept page][concepts/bom].


## Access the Software Bill of Materials on a Sample Application

A buildpack can generate SBOMs in different formats. The primary supported
SBOMs are in [Syft][format/syft], [SPDX][format/spdx], and
[CycloneDX][format/cyclonedx] JSON formats. Paketo buildpacks also generate an
SBOM in a Paketo-specific schema, but this SBOM is deprecated.

### Access Syft, CycloneDX, and SPDX SBOMs
1. Follow the [Node.js Getting Started tutorial][tutorial/nodejs] to build the
   Node.js `paketo-demo-app` image.
2. Use the pack CLI to retrieve the software bill of materials files
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack sbom download paketo-demo-app --output-dir /tmp/demo-app-sbom
{{< /code/copyable >}}
<!-- spellchecker-enable -->
3. The SBOM files will be in the specified output directory,
   `/tmp/demo-app-sbom`. Easily find all generated SBOM files with:
<!-- spellchecker-disable -->
{{< code/copyable >}}
find /tmp/demo-app-sbom/layers/sbom -name "*.json"
{{< /code/copyable >}}
<!-- spellchecker-enable -->

### (Deprecated) Access Paketo-specific SBOM
1. Follow the [Node.js Getting Started tutorial][tutorial/nodejs] to build the Node.js `paketo-demo-app` image.

2. Use the pack CLI retrieve the software bill of materials metadata.
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

## See Build-time Dependencies in the SBOM
### Syft, CycloneDX, and SPDX SBOMs
Syft, CycloneDX, and SPDX SBOMs that are retrieved using `pack sbom download
<image>` only contain SBOM entries for launch-time app dependencies. **_To
access SBOM entries for build-time app dependencies, SBOMs must be extracted at
build time._**

1. Run the build and extract the generated SBOMs to a local directory:
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack build myapp --sbom-output-dir /tmp/build-time-sbom
{{< /code/copyable >}}
<!-- spellchecker-enable -->
2. When the build completes, inspect SBOMs in the output directory:
<!-- spellchecker-disable -->
{{< code/copyable >}}
find /tmp/demo-app-sbom/layers/sbom -name "*.json"
{{< /code/copyable >}}
<!-- spellchecker-enable -->
SBOMs that are inside the `/tmp/demo-app-sbom/layers/sbom/build` subdirectory
contain entries for build-time dependencies.

3. List only the build-time SBOMs:
<!-- spellchecker-disable -->
{{< code/copyable >}}
find /tmp/demo-app-sbom/layers/sbom/build -name "*.json"
{{< /code/copyable >}}
<!-- spellchecker-enable -->

### Paketo-specific SBOM
There is currently no way to collect SBOM entries for build-time dependencies
in the Paketo-specific format. It is unlikely that support will be implemented,
given that the Paketo-specific SBOM is deprecated.


## Determine Which SBOM Formats a Buildpack Will Generate
The `buildpack.toml` in the source code for a [component buildpack][concepts/component] will
indicate which SBOMs it supports.

1. Check the `api` field of the `buildpack.toml`. If the Buildpack API is less
   than `0.7`, it only supports the [Paketo-specific SBOM][concepts/bom/paketo].
2. If the Buildpack API version is at least `0.7`, check the
   `buildpack.sbom-formats` array in the `buildpack.toml`. This will enumerate the SBOM formats that the
   buildpack is capable of generating.

## Use external tooling to merge and visualize the SBOMs
After you run
<!-- spellchecker-disable -->
{{< code/copyable >}}
pack sbom download paketo-demo-app --output-dir /tmp/demo-app-sbom
{{< /code/copyable >}}

You will get similar results:
```shell           
/tmp/demo-app-sbom
└── layers
    └── sbom
        └── launch
            ├── paketo-buildpacks_bellsoft-liberica
            │   ├── helper
            │   │   └── sbom.syft.json
            │   └── jre
            │       └── sbom.syft.json
            ├── paketo-buildpacks_ca-certificates
            │   └── helper
            │       └── sbom.syft.json
            ├── paketo-buildpacks_executable-jar
            │   ├── sbom.cdx.json
            │   └── sbom.syft.json
            ├── paketo-buildpacks_spring-boot
            │   ├── helper
            │   │   └── sbom.syft.json
            │   └── spring-cloud-bindings
            │       └── sbom.syft.json
            └── sbom.legacy.json

13 directories, 8 files
```

For the `CycloneDX` reports (ending with `cdx.json`) you can download and use the [CycleDX CLI](https://github.com/CycloneDX/cyclonedx-cli) or even send the result to the [BOM Doctor](https://bomdoctor.sonatype.com/#/home)

For the `Syft` reports (ending with `syft.json`) you can download and use the [Syft CLI](https://github.com/anchore/syft) and the [Grype CLI](https://github.com/anchore/grype).

### Merge all Syft reports into one

```shell
syft ./app-sbom -o syft-json > syft.json
```

### Converting the Syft reports into one CycloneDX report

```shell
syft /tmp/demo-app-sbom -o cyclonedx-json > cyclone.json
```

### Use Grype to evaluate the CVEs from your SBOMs

Read Syft JSON from path on disk:
```shell
grype sbom:path/to/syft.json
```

You can also pipe in Syft JSON directly:
```shell
syft /tmp/demo-app-sbom -o json | grype
```

<!-- References -->
<!-- spellchecker-disable -->
[concepts/bom]:{{< ref "docs/concepts/sbom" >}}
[concepts/component]:{{< ref "docs/concepts/buildpacks#component-buildpacks" >}}
[concepts/bom/paketo]:{{< ref "docs/concepts/sbom#paketo-specific-sbom-format" >}}
[tutorial/nodejs]:{{< ref "docs#nodejs" >}}
[format/cyclonedx]:https://cyclonedx.org/
[format/spdx]:https://spdx.dev/
[format/syft]:https://github.com/anchore/syft/tree/main/schema/json
<!-- spellchecker-enable -->
