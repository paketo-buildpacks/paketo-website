---
title: "Software Bill of Materials (SBOM)"
weight: 440
menu:
  main:
    parent: "concepts"
aliases:
  - /docs/concepts/bom
---

In the Getting Started tutorial, you used the Paketo builder to build a Node.js
app. Once you have an app image, you can access metadata about all of the
dependencies present in the final app image using the software bill of materials.

## What is the software bill of materials?

A software bill of materials (SBOM) is an industry standard mechanism of surfacing
metadata about dependencies in images or applications. The metadata consists of
various fields such as:
* `version`: the dependency version
* `uri`: URI to compiled dependency
* `checksum`: a CycloneDX-supported hash algorithm (such as SHA-256) and value of the dependency
* [`licenses`][LICENSE]: dependency licenses in SPDX format
* `deprecation-date`: dependency deprecation date
* `source uri`: URI to upstream source dependency
* `source checksum`: a CycloneDX-supported hash algorithm and value of the upstream source dependency
* [`CPE`][CPE]: common platform enumeration
* [`pURL`][PURL]: package URL

## Why is it helpful?

The information from the software bill of materials is largely used to help understand
the dependencies involved in your app's secure software supply chain.

### Vulnerability Scanning
The software bill of materials can be passed to one of the many existent vulnerability
scanning tools, such as [Dependency Track][tool/dependency-track], [Syft][tool/syft], or
[Trivy][tool/trivy], in order to identify vulnerabilities.

The SBOM contains two fields that are primarily concerned with vulnerability identification:

#### CPEs
CPEs, or common platform enumerations, are standard notation to look up dependency version-specific vulnerabilities and related patches in the [NIST National Vulnerability Database][NIST].

#### pURLs
PURLs, or package URLs are [a universal representation][PURL definition] of package location regardless of vendor, project, or ecosystem.

### Compliance Checking
The inclusion of license information in the software bill of materials helps with
application legal compliance by providing the information in a consumable way
for each dependency involved with your application image.

#### Licenses
The licenses in the Paketo SBOM are obtained from license scanning tools. Due to the unstandardized nature of license inclusion in software, the detection tools assign "confidence scores" to each license. We include **every license** discovered by the scanning tools in the SBOM, regardless of the "confidence score" that the tool has provided, to avoid risk of missing an important license. Because of this feature, advanced compliance checking may be required to filter out false positive licenses.

## What are the output formats of a Paketo SBOM?
Paketo buildpacks support several SBOM formats:
- [Syft JSON][format/syft]
- [SPDX JSON][format/spdx]
- [CycloneDX JSON][format/cyclonedx]
- Paketo-specific SBOM format (see below)

To learn which SBOM format(s) a Paketo buildpack supports, check the `buildpack.sbom-formats` key in the buildpack's `buildpack.toml`.

### Paketo-specific SBOM format
Paketo buildpacks add entries to the software bill of materials as `JSON`
objects with the following schema:

```plain
{
  "name": <name of the dependency>,
  "metadata": {
    "checksum": {
      "algorithm": <CycloneDX-supported hash algorithm ('MD5', 'SHA-1', 'SHA-256', 'SHA-384', 'SHA-512', 'SHA3-256', 'SHA3-384', 'SHA3-512', 'BLAKE2b-256', 'BLAKE2b-384', 'BLAKE2b-512', 'BLAKE3')>,
      "hash": <hash of the dependency>
    },
    "cpe": <dependency/version specific common platform enumeration>,
    "deprecation-date": <date of package deprecation>,
    "licenses": <[list of all licensesn SPDX format]>,
    "purl": <dependency/version specific package URL>,
    "source": {
      "checksum": {
        "algorithm": <CycloneDX-supported hash algorithm ('MD5', 'SHA-1', 'SHA-256', 'SHA-384', 'SHA-512', 'SHA3-256', 'SHA3-384', 'SHA3-512', 'BLAKE2b-256', 'BLAKE2b-384', 'BLAKE2b-512', 'BLAKE3')>,
        "hash": <hash of the dependency>
      },
      "uri": <package upstream source URI>
    },
    "uri": "<compiled package URI>",
    "version": <dependency version>
  }
}
```

Paketo buildpacks generate two main types of SBOM entries: _buildpack entries_
and _language module entries_. To help explain these types, we will use as an
example the software bill of materials of the app in the [How to Access the Bill of
Materials guide][howto/access-bom].

#### Buildpack Entries

A buildpack entry is an entry for a dependency that a Paketo buildpack installs directly (i.e. _without_ using a dependency manager). Examples include: a JVM, the .NET runtime, or the Node.js runtime. The buildpacks generate these entries using metadata obtained during the construction of the dependency itself.

A buildpack entry contains the version, vulnerability identifiers (CPE and pURL), all potential licenses, checksums for both the source and the compiled dependency, source information, and the name of the buildpack that installed the dependency.

Below, see an example of the buildpack entry for the Node.js runtime installed by the [Paketo Node Engine buildpack][bp/node-engine].

```json
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
}
```

#### Language Module Entries
A language module entry is an entry for a dependency that a Paketo buildpack installs using a dependency manager (e.g. Node.js module, Maven package). The buildpacks generate these entries by gathering metadata about packages after they have been installed.

A language module entry contains the version, vulnerability identifiers (pURL), all potential licenses, and the name of the buildpack that generated the entry.

Below, see an example of a language module entry for a Node.js module.

```json
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
##

## Where are SBOMs stored?
The Paketo-format SBOM is stored in the label `"io.buildpacks.build.metadata"` on the built app
image. The Syft, SPDX, and CycloneDX SBOMs are stored on the filesystem of the
built app image. See [How to Access the Software Bill of Materials][howto/access-bom]
for more details.

<!-- spellchecker-disable -->
<!-- References -->
[CPE]:{{< relref "#cpes" >}}
[PURL]:{{< relref "#purls" >}}
[LICENSE]:{{< relref "#compliance-checking" >}}

[howto/access-bom]:{{< ref "docs/howto/sbom#access-the-software-bill-of-materials-on-a-sample-application" >}}

[tool/dependency-track]:https://dependencytrack.org/
[tool/trivy]:https://github.com/aquasecurity/trivy
[tool/syft]:https://github.com/anchore/syft/

[format/cyclonedx]:https://cyclonedx.org/
[format/spdx]:https://spdx.dev/
[format/syft]:https://github.com/anchore/syft/tree/main/schema/json

[bp/node-engine]:{{< bp_repo "node-engine" >}}

[NIST]:https://nvd.nist.gov/products/cpe/search
[PURL definition]:https://github.com/package-url/purl-spec
<!-- spellchecker-enable -->
