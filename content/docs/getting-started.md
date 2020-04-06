---
title: "Getting Started"
date: 2020-03-31T12:50:55-04:00
---
# Getting Started

## What are Paketo Buildpacks?

**Paketo Buildpacks** are an implementation of [Cloud Native Buildpacks](https://buildpacks.io/). They provide the dependencies your application needs so you spend less time building images and more time developing applications.

## Prerequisites
Before using a paketo buildpacks to build an application image we need the following tools.

[**Pack**](https://buildpacks.io/docs/install-pack/)

A command line tool designed to take and application build a runnable OCI image using Cloud Native Buildpacks and the Docker daemon. 

[**Docker**](https://docs.docker.com/install/)

A suite of tooling around building and managing images.

## Build An Example App
First lets create a simple Node.js application to build.
It should have the following structure:

### Application Structure
The GitHub repository for the following application can be found [here](https://github.com/ForestEckhardt/simple-paketo-node-app).

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

The `package.json` file should contain the following:

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


### Building Your Application

Build an image using `pack` with the following command

```
pack build test-drive -p <path/to/application/root> --builder gcr.io/paketo-buildpacks/builder:cflinuxfs3
```

Verify that your build was successful by running `docker images` you should expect to see something similar to the following output
```
REPOSITORY                         TAG                 IMAGE ID            CREATED             SIZE
grc.io/paket-buildpacks/run        full-cnb-cf         88e2c125e701        6 days ago          1.05GB
gcr.io/paketo-buildpacks/builder   cflinuxfs3          7264ff2c18c3        40 years ago        1.5GB
test-drive                         latest              fcaa3645e775        40 years ago        1.13GB
```

Run the image locally on port 8080 using the following command

```
docker run -p 8080:8080 test-drive
```


### Where Do Buildpacks Factor In

In the above example you used `pack` and a `builder`. A builder is an image comprised of three things
* All of the buildpacks that are used by the builder
* Default groups buildpacks and the order in which they run in that group
* The base image your application is built on top of

All buildpacks in the builder can be overridden by the user.

If say you wanted to use a new version of the Paketo `node-engine-cnb`, you could simply download the latest release from [github](https://github.com/cloudfoundry/node-engine-cnb/releases) and override a buildpack used in the builder

```
pack build test-drive -p <path/to/application/root> --builder gcr.io/paketo-buildpacks/builders:cflinuxfs3 --buildpack <path/to/new/buildpack.tgz>
```

Currently the Paketo-Buildpacks project releases the following builders

* gcr.io/paketo-buildpacks/builder:cflinuxfs3
* gcr.io/paketo-buildpacks/builder:bionic
* gcr.io/paketo-buildpacks/builder:tiny

