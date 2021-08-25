---
title: "Bill of Materials"
weight: 440
menu:
  main:
    parent: "concepts"
---

In the Getting Started tutorial, you used the Paketo builder to build a Node.js app. Once you have the final app image, you can access metadata about all of the dependencies present in the final app image with the bill of materials. At this time, the Node.js and Java buildpack families are the only buildpacks that have support for the full set of bill of materials fields.

## What is the bill of materials?

A bill of materials (BOM) is an industry standard mechanism of surfacing metadata about dependencies in images or applications. The metadata consists of various fields such as:
* `version`: the dependency version
* `uri`: URI to compiled dependency
* `checksum`: hash algorithm (such as SHA256) and value of the dependency
* [`licenses`][LICENSE]: dependency licenses in SPDX format
* `deprecation-date`: dependency deprecation date
* `source uri`: URI to upstream source dependency
* `source checksum`: hash algorithm and value of the upstream source dependency
* [`CPE`][CPE]: common platform enumeration
* [`pURL`][PURL]: package URL

## Why is it helpful?
The information from the bill of materials is largely used to help understand the dependencies involved in your app's secure software supply chain.

##### Vulnerability Scanning
The bill of materials can be passed to one of the many existent vulnerability scanning tools, such as [Dependency Track](https://dependencytrack.org/), [Trivy](https://github.com/aquasecurity/trivy), and others, in order to identify vulnerabilities.

The BOM contains two fields that are primarily concerned with vulnerability identification:

#### CPEs

  * CPEs, or common platform enumerations, are standard notation to look up dependency version-specific vulnerabilities and related patches in the the [NIST National Vulnerabilty Database](https://nvd.nist.gov/products/cpe/search)

#### pURLs

* PURLs, or package URLs are a [a universal representation](https://github.com/package-url/purl-spec) of package location regardless if vendor, project, or ecosystem

##### Compliance Checking
The inclusion of license information in the bill of materials helps with application legal compliance, by providing the information in a consumable way for each dependency involved with your application image.

#### Licenses
* The licenses in the Paketo BOM are obtained from license scanning tools. Due to the unstandardized nature of license inclusion in software, the detection tools assign "confidence scores" to each license. We include **every license** discovered by the scanning tools in the BOM, regardless of the "confidence score" that the tool has provided to avoid risk of missing an important license. Because of this feature, advance compliance checking may be required to filter out false positive licenses that may be included.

## What are the main sections?

Looking at the full BOM output can be overwhelming due to the large number of dependencies and information about each one. It's easier to break down the contents into sections.

For the purposes of explaining the sections of the bill of materials, we have broken down the bill of materials generated for the Node.js `paketo-demo-app` in the [How to Access the Bill of Materials example]({{< ref "docs/howto/bom#access-the-bill-of-materials-on-a-sample-node-application" >}}).

### Buildpack Entries
```plain
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
```
Above is an example of what the BOM entry for a dependency that is directly provided by a Paketo buildpack looks like, in this case its the `node-engine` dependency installed by the `Node Engine` buildpack. Other examples of these type of entries would be those that appear when the `Yarn` buildpack is used, or the `JVM` buildpack is used. These entries are built by the buildpacks using metadata obtained during the contstruction of the dependency itself.

It contains the version, vulnerability identifiers (CPE and pURL fields), all potential licenses, checksums for both the source and the compiled dependency, source information, and the buildpack it was provided by.

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

It contains the version, vulnerability identifiers (pURL field), all potential licenses, and the buildpack the BOM was provided by.

## What's the BOM format?

The format of the bill of materials provided by Paketo Buildpacks is currently in `JSON`. It does not conform to a specific industry-standard bill of materials format. Some industry-standard formats include [CycloneDX](https://cyclonedx.org/) and [SPDX](https://spdx.dev/), both of which can be presented as `JSON` files. While the Paketo bill of materials doesn't currently conform to one of these formats, the goal is to eventually support both formats.

<!-- References -->
[CPE]:{{< relref "#cpes" >}}
[PURL]:{{< relref "#purls" >}}
[LICENSE]:{{< relref "#compliance-checking" >}}
