---
title: "How To"
weight: 301
menu:
  main:
    identifier: howto
aliases:
  - /docs/buildpacks/language-family-buildpacks/
---

The Paketo language family buildpacks are [composite buildpacks](#composite-buildpacks) that provide easy out-of-the-box support the most popular language runtimes and app configurations.

## Component Buildpacks
Paketo provides many component buildpacks, each with a well-defined responsibility. Component buildpacks may require contributions from upstream buildpacks and/or provide required components to downstream buildpacks.

For example, the Gradle Buildpack is a component buildpack, responsible for installing Gradle in the build container and using Gradle to compile and package a JVM application. It requires that an upstream component to provide a JDK. It provides a compiled JVM application to downstream buildpacks.

## Composite Buildpacks
Component buildpacks can be combined to compose higher-level composite buildpacks. Composite buildpacks contain an ordered list of component buildpacks. Some buildpacks in the ordering may be optional, participating only when they detect that they are needed.