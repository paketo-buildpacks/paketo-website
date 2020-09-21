---
title: "Language Family Buildpacks"
weight: 301
menu:
  main:
    parent: buildpacks
    identifier: language-family-buildpacks
---

# Language Family Buildpacks
The Paketo language family buildpacks are [composite buildpacks](#component-buildpacks) that provide easy out-of-the-box support the most popular language runtimes and app configurations.

## Component Buildpacks
Paketo provides many component buildpacks, each with a well-defined and tightly scoped responsibility. For example, the Gradle Buildpack is responsible for installing Gradle in the build container and using Gradle to compile and package a JVM application.

Most application builds succeed through the collaboration of several component buildpacks. For example, the Gradle Buildpack requires another buildpack to provide the JDK at build-time and contribute the JRE to the final image. If the build produces a WAR artifact, the Apache Tomcat Buildpack is responsible for contributing Tomcat and providing the start command to the final image.

## Composite Buildpacks
Component buildpacks can be combined to compose higher-level composite buildpacks. Composite buildpacks contain and order of buildpacks. Some buildpacks in an ordering may be optional, participating only when they detect that they are needed.