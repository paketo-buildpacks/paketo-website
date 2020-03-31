---
title: "Tutorial"
date: 2020-03-31T12:50:55-04:00
draft: true
type: tutorial
---
# Getting Started


## What are Paketo Buildpacks?

**Paketo Buildpacks** are an implementation of [Cloud Native Buildpacks](https://buildpacks.io/). They provide the dependencies your application needs so you spend less time building images and more time developing applications.

- [Try Paketo Buildpacks](#try-paketo-buildpacks)
- [Learn Paketo Buildpacks](#learn-paketo-buildpacks)
- [Write Your Own](#write-a-paketo-buildpack)

## Try Paketo Buildpacks:
Before using a paketo buildpacks to build an application image we need the following tools.

**Pack** A command line tool designed to take and application build a runnable OCI image using Cloud Native Buildpacks and the Docker daemon.

  - Installation Steps found [here](https://buildpacks.io/docs/install-pack/)

**Docker**: A suite of tooling around building and managing images.

- Installation Steps found [here](https://docs.docker.com/install/) 

### Test Drive
First lets create a simple Node.js application to build.
It should have the following structure

#### The Application

```
.
└── test-drive
    ├── server.js
    └── package.json
```

The `server.js` file should contain the following: 

```
const http = require('http');
const leftpad = require('leftpad');

const port = process.env.PORT || 8080;

const server = http.createServer((request, response) => {
  response.end(JSON.stringify(process.env))
});

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`Test driver server is listening on ${port}`);
});
```

The `package.json file should contain the following:

```
{
  "name": "test-drive",
  "version": "0.0.0",
  "description": "test out paketo-buildpacks",
  "main": "server.js",
  "author": "paketo",
  "license": "",
  "dependencies": {
    "leftpad": "~0.0.1"
  },
  "engines": {
    "node": "~10"
  }
}

```

This entire directory structure & can be downloaded from [here](paketo-buildpacks-website-link) as a `.tgz` file.

#### Building

With `pack` installed we can start building images as simply as:

```
pack build test-drive -p <path-to-application-root> --builder paketobuildpacks/builders:cflinuxfs3
```

Now running `docker images` will have your newly build `test-drive` image.
Running the image on port 8080 can be done as simply as:

```bash
docker run -p 8080:8080 test-drive
```


#### Whats going on here

So in the above example we've used `pack` and a `builder`, but where do Paketo Buildpacks factor in? 

A builder is simply an image that provides a default buildpack configuration as well as a base image the application will be build atop. All buildpacks in the builder can be over-ridden by the user.

If say we wanted to use a new version of the Paketo `node-engine-cnb`, we could simply download the latest release from [github](https://github.com/cloudfoundry/node-engine-cnb/releases) and over-ride a buildpack used in our build:

```
pack build test-drive -p <path-to-application-root> --builder paketobuildpacks/builders:cflinuxfs3 --buildpack <path-to-new-buildpack.tgz>
```

Currently the Paketo-Buildpacks project releases the following builders:

- paketobuildpacks/builder:cflinuxfs3
- paketobuildpacks/builder:bionic
- paketobuildpacks/builder:tiny


## Learn Paketo Buildpacks

### What is all of this stuff
The above `pack build` command gives you a image what is a builder and where are the buildpacks?

A builder is a combination of a group of `buildpacks` and a underlying stack image that your application specific dependencies will be layered on top of.

The resulting OCI image will look a bit like this:




### Internals

### How they work
All Paketo buildpacks have the following layout on disk:

```
.
├── bin
│   ├── build
│   └── detect
└── buildpack.toml
```
This is a requirement enforced by the 

Here `detect` and `build` are executables that will be run in two separate phases.

#### Detect
During this phase all buildpacks inspect the applications source code to determine if they are needed by the application.

#### Build
During this phase the buildpacks can make additions to the application image, this may be in the form of setting `env` variables, adding binaries or supplying additional libraries. 

#### Further reading
For more information about Cloud Native Buildpacks API see the [buildpack-spec](https://github.com/buildpacks/spec/blob/master/buildpack.md)

#### Example:

To get a list of optional builders run: 
```bash
pack list-builders
```

Building using buildpacks
Users can also use specific buildpacks with their pack build: 

```bash
pack build <my-image-name> -p <path-to-application-root> --builder paketobuildpacks/builders:cflinuxfs3 --buildpack <buildpack>
```




