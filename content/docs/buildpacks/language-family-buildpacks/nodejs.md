---
title: "Node.js Buildpack"
weight: 304
menu:
  main:
    parent: "language-family-buildpacks"
---

# Node.js Buildpack

The [Node.js Paketo Buildpack](//github.com/paketo-buildpacks/nodejs) supports several popular configurations for Node.js apps.

To build a sample app locally with this CNB using the `pack` CLI, run

{{< code/copyable >}}
git clone https://github.com/paketo-buildpacks/samples
cd samples/nodejs/npm
pack build my-app --buildpack gcr.io/paketo-buildpacks/nodejs
{{< /code/copyable >}}

See [samples](https://github.com/paketo-buildpacks/samples/tree/main/nodejs/npm)
for how to run the app.

## Supported dependencies

The Node.js Paketo Buildpack supports several versions of Node.js.
For more details on the specific versions supported in a given buildpack
version, see the [release
notes](https://github.com/paketo-buildpacks/nodejs/releases).

## Specifying a Node Engine Version

The Node Engine CNB (Cloud Native Buildpack) allows you to specify a version of Node.js to use during
deployment. This version can be specified in a number of ways, including
through `.nvmrc`, `buildpack.yml`, or `package.json` files. When specifying a
version of the Node.js engine, you must choose a version that is available
within the buildpack.

The buildpack prioritizes the versions specified in
each possible configuration location with the following precedence, from
highest to lowest: `buildpack.yml`, `package.json`, `.nvmrc`.

### Using buildpack.yml

To configure the buildpack to use Node.js v12.12.0 when deploying your app,
include the values below in your `buildpack.yml` file:

{{< code/copyable >}}
---
nodejs:
  version: 12.12.0
{{< /code/copyable >}}

### Using package.json

If your apps use `npm` or `yarn`, you can specify the Node.js version your apps use
during deployment by configuring the `engines` field in the `package.json`
file. To configure the buildpack to use Node.js v12.12.0 when deploying your
app, include the values below in your `package.json` file:

{{< code/copyable >}}
{
  "engines": {
    "node": "12.12.0"
  }
}
{{< /code/copyable >}}

For more information about the `engines` configuration option in the
`package.json` file, see the
[engines](https://docs.npmjs.com/files/package.json#engines) section of the
_npm-package.json_ topic in the NPM documentation.

### Using .nvmrc

Node Version Manager is a common option for managing the Node.js version an app
uses. To specify the Node.js version your apps use during deployment, include a
`.nvmrc` file with the version number. For more information about the contents
of a `.nvmrc` file, see [.nvmrc](https://github.com/nvm-sh/nvm#nvmrc) in the
Node Version Manager repository on GitHub.


## Buildpack-Set Environment Variables

The Node.js CNB sets a number of environment variables during the `build` and
`launch` phases of the app lifecycle. The sections below describe each
environment variable and its impact on your app. 

### MEMORY_AVAILABLE

The `MEMORY_AVAILABLE` environment variable reports the total amount of memory
available to the app. The Node.js CNB calculates this value from the limits
specified by the operating system in
`/sys/fs/cgroup/memory/memory.limit_in_bytes`.

* Set by: `profile.d`
* Phases: `launch`
* Value: non-negative integer

### NODE_ENV

The `NODE_ENV` environment variable specifies the environment in which the app
runs.

* Set by: `node-engine` buildpack
* Phases: `build`
* Value: production

### NODE_HOME

The `NODE_HOME` environment variable sets the path to the `node` installation.

* Set by: `node-engine` buildpack
* Phases: `build`
* Value: path to the `node` installation

### NODE_VERBOSE

The `NODE_VERBOSE` environment variable adjusts the amount of logging output
from NPM during installs.

* Set by: `node-engine` buildpack
* Phases: `build`
* Value: false

### NPM\_CONFIG\_LOGLEVEL

The `NPM_CONFIG_LOGLEVEL` environment variable adjusts the level of logging NPM
uses.

* Set by: `npm-install` buildpack
* Phases: `build`
* Value: "error"

### NPM\_CONFIG\_PRODUCTION

The `NPM_CONFIG_PRODUCTION` environment variable installs only production
dependencies if NPM install is used.

* Set by: `npm-install` buildpack
* Phases: `build`
* Value: false

### PATH

The `node_modules/.bin` directory is appended onto the `PATH` environment variable

* Set by: `yarn-install` or `npm-install` buildpacks
* Phases: `build`
* Value: path to the `node_modules/.bin` directory

## Enabling Heap Memory Optimization

Node.js limits the total size of all objects on the heap. Enabling the
`optimize-memory` feature sets this value to three-quarters of the total memory
available in the container. For example, if your app is limited to 1&nbsp;GB
when pushed, the heap of your Node.js app is limited to 768&nbsp;MB.

There are two ways to enable memory optimization: through your `buildpack.yml`
file, and by using the `OPTIMIZE_MEMORY` environment variable.

### Use the buildpack.yml

To enable memory optimization through your `buildpack.yml` file, add the values
below to your `buildpack.yml` file:

{{< code/copyable >}}
---
nodejs:
  optimize-memory: true
{{< /code/copyable >}}

### Use the OPTIMIZE_MEMORY Environment Variable

To enable memory optimization through the `OPTIMIZE_MEMORY` environment
variable, set it to `true`.

{{< code/copyable >}}
pack build my-app \
  --buildpack gcr.io/paketo-buildpacks/nodejs \
  --env OPTIMIZE_MEMORY=true
{{< /code/copyable >}}

## Package Management with NPM

Many Node.js apps require a number of third-party libraries to perform common
tasks and behaviors. NPM is an option for managing these third-party
dependencies that the Node.js CNB fully supports. Including a `package.json`
file in your app source code triggers the NPM installation process. The sections
below describe the NPM installation process run by the buildpack.

### NPM Installation Process

NPM supports several distinct methods for installing your package dependencies.
Specifically, the Node.js CNB runs either the [`npm
install`](https://docs.npmjs.com/cli-commands/install), [`npm
rebuild`](https://docs.npmjs.com/cli-commands/rebuild.html), or [`npm
ci`](https://docs.npmjs.com/cli-commands/ci.html) commands to build your app
with the right set of dependencies. When deciding which installation process to
use, the Node.js CNB consults your app source code, looking for the presence of
specific files or directories. The installation process used also determines
how the Node.js CNB will reuse layers when rebuilding your app.

The table below shows the process the Node.js CNB uses to determine an
installation process for NPM packages. When a combination of the files and
directories listed in the table below are present in your app source code,
the Node.js CNB uses an installation process that ensures the
correct third-party dependencies are installed during the build process.


| `package-lock.json` | `node_modules` | `npm-cache` | Command |
| ------------------- | -------------- | ----------- | ------- |
| X | X | X | `npm install` |
| X | X | ✓ | `npm install` |
| X | ✓ | X | `npm rebuild` |
| X | ✓ | ✓ | `npm rebuild` |
| ✓ | X | X | `npm ci` |
| ✓ | X | ✓ | `npm ci` |
| ✓ | ✓ | X | `npm rebuild` |
| ✓ | ✓ | ✓ | `npm ci` |

The following sections give more information about the files listed in the
table above, including how to generate them, if desired.

#### package-lock.json

The `package-lock.json` file is generated by running `npm install`.  For
more information, see
[npm-package-lock.json](https://docs.npmjs.com/files/package-lock.json) in the
NPM documentation.

#### node_modules

The `node_modules` directory contains vendored copies of all the packages
installed by the `npm install` process. For more information, see the [Node
Modules](https://docs.npmjs.com/files/folders.html#node-modules) section of the
_npm-folders_ topic in the NPM documentation.

#### npm-cache

The `npm-cache` directory contains a content-addressable cache that stores all
HTTP-request- and package-related data. Additionally, including a cache ensures
that the app can be built entirely offline.

To populate an `npm-cache` directory:
1. Navigate to your source code directory.
1. Run:
{{< code/copyable >}}
npm ci --cache npm-cache
{{< /code/copyable >}}

For more information about the NPM cache, see
[npm-cache](https://docs.npmjs.com/cli/cache) in the NPM documentation.

### Determining Node Modules Layer Reuse

To improve build times for apps, the Node.js CNB has a method for reusing the build
results from previous builds. When the CNB determines that a portion of the
build process can be reused from a previous build, the CNB uses the previous
result. Each installation process uses a different method for determining
whether the CNB can reuse a previous build result.

For `npm install`, the CNB never reuses a `node_modules` directory from previous builds.

For `npm rebuild`, the CNB can reuse a `node_modules` directory from a previous
build if the included `node_modules` directory in the app source code has not
changed since the prior build.

For `npm ci`, the CNB can reuse a `node_modules` directory from a previous
build if the `package-lock.json` file included in the app source code has not
changed since the prior build.


### NPM Start Command
As part of the build process, the Node.js CNB determines a start command for
your app. The start command differs depending on which package management
tooling the Node.js CNB uses. If the Node.js CNB uses `npm` or `yarn` to
install packages, the start command is generated from the contents of
`package.json`.


## Package Management with Yarn

Many Node.js apps require a number of third-party libraries to perform common
tasks and behaviors. Yarn is an alternative option to NPM for managing these
third-party dependencies. Including `package.json` and `yarn.lock` files in
your app source code triggers the Yarn installation process.

### Yarn Installation Process

The Node.js CNB runs `yarn install` and `yarn check` to ensure that third-party
dependencies are properly installed.
The `yarn.lock` file contains a fully resolved set of package dependencies that
Yarn manages. For more information, see
[yarn.lock](https://yarnpkg.com/lang/en/docs/yarn-lock/) in the Yarn
documentation.

### Yarn Start Command
As part of the build process, the Node.js CNB determines a start command for
your app. The start command differs depending on which package management
tooling the Node.js CNB uses. If the Node.js CNB uses `yarn` to install
packages, the start command is `yarn start`.

## Projects Without Package Management
The Node.js CNB also supports simple apps that do not require third-party packages.

### Start Command

If no package manager is detected, the Node.js CNB will set the start command
`node server.js`. The app name is ___not___ currently configurable.

## Stack support
The Node.js Buildpack runs fine on the Base builder for most apps. If your app
requires compilation of native extensions using `node-gyp`, the buildpack requires that
you use the Full builder. This is because `node-gyp` requires `python` which is excluded from the
the Base builder, and the module may require other shared objects.
