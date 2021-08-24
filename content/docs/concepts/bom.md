---
title: "Bill of Materials"
weight: 440
menu:
  main:
    parent: "concepts"
aliases:
  - /docs/bom/
---

In the Getting Started tutorial, you used the Paketo builder to build a Node.js app. Once you have the final app image, you can access metadata about all of the dependencies present in the final app image with the bill of materials.

## What is the bill of materials?

A bill of materials (BOM) is an industry standard mechanism of surfacing metadata about dependencies in images or applications. The metadata consists of various fields such as:
* `version`: the dependency version
* `uri`: URI to compiled dependency
* `hash`: hash (such as SHA256) of the dependency
* [`licenses`][LICENSE]: dependency licenses in SPDX format
* `deprecation-date`: dependency deprecation date
* `source uri`: URI to upstream source dependency
* `source hash`: hash of the upstream source dependency
* [`CPE`][CPE]: common platform enumeration
* [`pURL`][PURL]: package URL

## Why is this helpful?
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

## Format

The format of the bill of materials provided by Paketo Buildpacks is currently in `JSON`. It does not conform to a specific industry-standard bill of materials format. Some industry-standard formats include [CycloneDX](https://cyclonedx.org/) and [SPDX](https://spdx.dev/), both of which can be presented as `JSON` files. While the Paketo bill of materials doesn't currently conform to one of these formats, the goal is to eventually support both formats.

<!-- References -->
[CPE]:{{< relref "#cpes" >}}
[PURL]:{{< relref "#purls" >}}
[LICENSE]:{{< relref "#compliance-checking" >}}
