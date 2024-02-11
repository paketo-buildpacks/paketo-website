---
title: "Create a Paketo Buildpack"
weight: 344
menu:
  main:
    parent: "howto"
aliases:
  - /docs/tutorials/create-paketo-buildpack/
---

If the entire Cloud Native Buildpack experience is new to you, you may want to
stop and take some time to read about [authoring a Cloud Native
Buildpack](https://buildpacks.io/docs/buildpack-author-guide/create-buildpack/)
(CNB). Packit is a Go library that is an abstraction that conforms to the [CNB
specification](https://github.com/buildpacks/spec) that takes a minimal
approach in terms of the features that are implemented giving a lot of fine
control to the buildpack author.

This tutorial's goal is to take you from nothing to a buildpack that puts a
dependency on the filesystem as fast as possible, so with that let's get
started!

## [Packit](https://github.com/paketo-buildpacks/packit)
[![GoDoc](https://img.shields.io/badge/pkg.go.dev-doc-blue)](https://pkg.go.dev/github.com/paketo-buildpacks/packit)

For complete documentation of the Packit library, you can browse the godocs
linked above. In the interest of saving you time, let's talk about the three
artifacts that will need to be present in our final built buildpack. In the end
we will need a `buildpack.toml` file, a `bin/detect` binary, and a `bin/build`
binary for this buildpack to be CNB compliant.

## Prerequisites
You will need the following tools installed on your machine to aid you in
building and testing your buildpack.
- [Docker](https://docs.docker.com/install/)
- [Pack](https://buildpacks.io/docs/install-pack/)
- [Go](https://golang.org/doc/install)

## Let's Get Started
For demonstration purposes we are going to build a buildpack that installs a
`nodejs` engine, which is based off the Paketo
[node-engine](https://github.com/paketo-buildpacks/node-engine).

A sample repository containing all of the code is
[here](https://github.com/ForestEckhardt/tutorial-cnb). To start a brand new Go
project all you need to do is create a new directory to contain you project run
the following command:

{{< code/copyable >}}
go mod init </path/to/project>
{{< /code/copyable >}}

### `buildpack.toml`

The `buildpack.toml` file should contain the following:

{{< code/copyable >}}
# Indicates compatibility version with lifecycle
api = "0.2"

# General metadata about the buildpack that is used be the lifecycle
[buildpack]
  id = "com.example.node-engine"
  name = "Node Engine Buildpack"
  version = "0.0.1"

# The list of stacks that the buildpack itself is compatible with
[[stacks]]
  id = "io.buildpacks.stacks.bionic"
{{< /code/copyable >}}

### `bin/detect`
**Note**: For a complete rundown on how the Detect Phase works you can read the
`Detect Phase` section in the [packit
godocs](https://pkg.go.dev/github.com/paketo-buildpacks/packit).

In the Packit library, there is a
[`packit.Detect()`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#Detect)
function that consumes a
[`packit.DetectFunc`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#DetectFunc).
The `packit.DetectFunc` is created by buildpack authors and contains all of the
buildpack specific detection logic. So with that let's write some code and talk
about it.

`cmd/detect/main.go`

{{< code/copyable >}}
package main

import (
    "<path/to/project>"
    "github.com/paketo-buildpacks/packit"
)

func main() {
    packit.Detect(node.Detect())
}
{{< /code/copyable >}}

`node/detect.go`

{{< code/copyable >}}
package node

import (
    "fmt"
    "github.com/paketo-buildpacks/packit"
)

func Detect() packit.DetectFunc {
	return func(context packit.DetectContext) (packit.DetectResult, error) {
		return packit.DetectResult{}, fmt.Errorf("always fail")
	}
}
{{< /code/copyable >}}

Alright let's talk about this for a minute. With these pieces of code, we have
written a buildpack that will always detect false. The reason that we've split
out the definition of the `packit.DetectFunc` into its own package is that this
allows us to separate Packit related code from any actual business specific
logic of the buildpack. All buildpack specific business logic will go into the
`node` package from now on. This may seem small but if you plan on potentially
expanding this buildpack we highly recommend that you follow this structure.

To test out progress so far we can build the detect binary ourselves with the
following command:

{{< code/copyable >}}
GOOS=linux go build -ldflags="-s -w" -o ./bin/detect ./cmd/detect/main.go
{{< /code/copyable >}}

Once you've done that you should be able to use the `pack` cli to try and build
a container for a `nodejs` app. For the purposes of this demonstration I will
be using the following [simple
app](https://github.com/paketo-buildpacks/node-engine/tree/main/integration/testdata/simple_app)
from the `node-engine` repo linked above. The following command will allow you
to build the app:

{{< code/copyable >}}
pack build <app-name> \
  --path <path/to/app> \
  --buildpack <path/to/project> \
  --builder paketobuildpacks/builder-jammy-base \
  --verbose
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
[detector] ======== Output: com.example.node-engine@0.0.1 ========
[detector]
[detector] always fail
[detector] ======== Results ========
[detector] err:  com.example.node-engine@0.0.1 (1)
[detector] ERROR: No buildpack groups passed detection.
[detector] ERROR: Please check that you are running against the correct path.
[detector] ERROR: failed to detect: no buildpacks participating
ERROR: failed with status code: 6
{{< /code/copyable >}}

Now that we have a skeleton laid out let's make it do something more useful
than just fail all of the time.

To do that we need to dive into the concept of provides and requires. If you
want to read the buildpacks specification for provides and requires you can
look
[here](https://github.com/buildpacks/spec/blob/master/buildpack.md#phase-1-detection).

**Quick summary**: A buildpack's detect binary has as part of it
[`packit.DetectResult`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#DetectResult)
pass out a
[`packit.BuildPlan`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#BuildPlan)
in which there is a list of provisions and requirements. A buildpack can state
that it provides dependencies or that it requires dependencies or it can both
require and provide dependencies. A buildpack can only detect true if all of
its provides match up with requires from itself or a subsequent buildpacks in a
buildpack sequence and that all of is requires match up with provides from
itself or previous buildpacks in a sequence of buildpacks.

In our situation, our buildpack is the only one running in the sequence so in
order for us to pass detection we have to both provide `node` as a dependency
but we also need to require `node` as well. So let's go implement that provide
and require relationship in our detect code.

`node/detect.go`

{{< code/copyable >}}
package node

import (
	"github.com/paketo-buildpacks/packit"
)

func Detect() packit.DetectFunc {
	return func(context packit.DetectContext) (packit.DetectResult, error) {
		return packit.DetectResult{
			Plan: packit.BuildPlan{
				Provides: []packit.BuildPlanProvision{
					{Name: "node"},
				},
				Requires: []packit.BuildPlanRequirement{
					{Name: "node"},
				},
			},
		}, nil
	}
}
{{< /code/copyable >}}

Let's do a quick rundown of what is happening now. In the `packit.DetectResult`
we are now returning a `Plan`. Inside that plan we state that this buildpack
provides the `node` dependency and that it requires the `node` dependency. If
you were to run the code that the used to build and test our code earlier you
should get something that look like this:

{{< code/copyable >}}
GOOS=linux go build -ldflags="-s -w" -o ./bin/detect ./cmd/detect/main.go
pack build <app-name> \
  --path <path/to/app> \
  --buildpack <path/to/project> \
  --builder paketobuildpacks/builder-jammy-base \
  --verbose
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
[detector] ======== Results ========
[detector] pass: com.example.node-engine@0.0.1
[detector] Resolving plan... (try #1)
[detector] com.example.node-engine 0.0.1
===> ANALYZING
[analyzer] Previous image with name "index.docker.io/library/test-node:latest" not found
===> RESTORING
===> BUILDING
[builder] ERROR: failed to build: fork/exec /cnb/buildpacks/com.example.node-engine/0.0.1/bin/build: no such file or directory
ERROR: failed with status code: 7
{{< /code/output >}}

As you can see detection now passes! However, we still get an error because we
have no `build` binary yet, so let's fix that.

### `bin/build`

For a complete on how the Build Phase works you can read the `Build Phase`
section in the [packit
godocs](https://pkg.go.dev/github.com/paketo-buildpacks/packit), but once again I
will give you a quick overview. The Packit library has a
[`packit.Build()`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#Build)
function which consumes a
[`packit.BuildFunc`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#BuildFunc)
which contains all of the buildpack specific build logic and is written by us.
So lets put down some skeleton code.

`cmd/build/main.go`

{{< code/copyable >}}
package main

import (
	"<path/to/project or github.com/<some-org or some-user>/<some-repo>>/node"
	"github.com/paketo-buildpacks/packit"
)

func main() {
	packit.Build(node.Build())
}
{{< /code/copyable >}}

`node/build.go`

{{< code/copyable >}}
package node

import (
	"fmt"

	"github.com/paketo-buildpacks/packit"
)

func Build() packit.BuildFunc {
	return func(context packit.BuildContext) (packit.BuildResult, error) {
		return packit.BuildResult{}, fmt.Errorf("always fail")
	}
}
{{< /code/copyable >}}

We have now written some code that will cause our build process to fail every
time. You can test that by ensuring that you have a `detect` binary built and
then by running the following command to build your `build` binary and run
`pack build`:

{{< code/copyable >}}
GOOS=linux go build -ldflags="-s -w" -o ./bin/build ./cmd/build/main.go
pack build <app-name> \
  --path <path/to/app> \
  --buildpack <path/to/project> \
  --builder paketobuildpacks/builder-jammy-base \
  --verbose
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
[detector] ======== Results ========
[detector] pass: com.example.node-engine@0.0.1
[detector] Resolving plan... (try #1)
[detector] com.example.node-engine 0.0.1
===> ANALYZING
[analyzer] Previous image with name "index.docker.io/library/test-node:latest" not found
===> RESTORING
===> BUILDING
[builder]
[builder] always fail
[builder] ERROR: failed to build: exit status 1
ERROR: failed with status code: 7
{{< /code/output >}}

Now that we have a build process set up let's talk about how we are going to
add our dependency to our final image. To pass dependency metadata into the
build process we use the `buildpack.toml` and add the following fields:

{{< code/copyable >}}
[metadata]
  [[metadata.dependencies]]
    uri = "https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-x64.tar.xz"
{{< /code/copyable >}}

Let's talk about the chunk we just added.

{{< code/copyable >}}
# This holds section holds buildpack specific metadata
[metadata]
  [[metadata.dependencies]]
    # The uri for the dependency that is compatible with the stack you are running against
    uri = "https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-x64.tar.xz"
{{< /code/copyable >}}

So let's add some code that parses the uri field out. For toml parsing we
generally use [BurntSushi's TOML
Library](https://www.godoc.org/github.com/BurntSushi/toml), so with that let's
write up some quick parsing code.

`node/build.go`

{{< code/copyable >}}
package node

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/BurntSushi/toml"
	"github.com/paketo-buildpacks/packit"
)

func Build() packit.BuildFunc {
	return func(context packit.BuildContext) (packit.BuildResult, error) {
		file, err := os.Open(filepath.Join(context.CNBPath, "buildpack.toml"))
		if err != nil {
			return packit.BuildResult{}, err
		}

		var m struct {
			Metadata struct {
				Dependencies []struct {
					URI string `toml:"uri"`
				} `toml:"dependencies"`
			} `toml:"metadata"`
		}
		_, err = toml.DecodeReader(file, &m)
		if err != nil {
			return packit.BuildResult{}, err
		}

		uri := m.Metadata.Dependencies[0].URI
		fmt.Printf("URI -> %s", uri)

		return packit.BuildResult{}, fmt.Errorf("always fail")
	}
}
{{< /code/copyable >}}

Compiling our `build` executable and running `pack build` should produce the following:

{{< code/copyable >}}
GOOS=linux go build -ldflags="-s -w" -o ./bin/build ./cmd/build/main.go
pack build <app-name> \
  --path <path/to/app> \
  --buildpack <path/to/project> \
  --builder paketobuildpacks/builder-jammy-base \
  --verbose
{{< /code/copyable >}}

{{< code/output >}}
===> DETECTING
[detector] ======== Results ========
[detector] pass: com.example.node-engine@0.0.1
[detector] Resolving plan... (try #1)
[detector] com.example.node-engine 0.0.1
===> ANALYZING
[analyzer] Previous image with name "index.docker.io/library/test-node:latest" not found
===> RESTORING
===> BUILDING
[builder] URI -> https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-x64.tar.xz
[builder] ERROR: failed to build: exit status 1
[builder] always fail
ERROR: failed with status code: 7
{{< /code/output >}}

Now that we have the URI of the dependency that we need to download, let's set
up the layer structure for the dependency to be installed on to. We do that
with the following piece:

{{< code/copyable >}}
package node

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/BurntSushi/toml"
	"github.com/paketo-buildpacks/packit"
)

func Build() packit.BuildFunc {
	return func(context packit.BuildContext) (packit.BuildResult, error) {
		file, err := os.Open(filepath.Join(context.CNBPath, "buildpack.toml"))
		if err != nil {
			return packit.BuildResult{}, err
		}

		var m struct {
			Metadata struct {
				Dependencies []struct {
					URI string `toml:"uri"`
				} `toml:"dependencies"`
			} `toml:"metadata"`
		}
		_, err = toml.DecodeReader(file, &m)
		if err != nil {
			return packit.BuildResult{}, err
		}

		uri := m.Metadata.Dependencies[0].URI
		fmt.Printf("URI -> %s", uri)

		nodeLayer, err := context.Layers.Get("node")
		if err != nil {
			return packit.BuildResult{}, err
		}

		nodeLayer, err = nodeLayer.Reset()
		if err != nil {
			return packit.BuildResult{}, err
		}

		nodeLayer.Launch = true

		return packit.BuildResult{}, fmt.Errorf("always fail")
	}
}
{{< /code/copyable >}}

Let's talk about the `context.Layers.Get()` function and the
`nodeLayer.Reset()` function individually. The
[`packit.Layers.Get()`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#Layers.Get)
function takes in the name of a layer and returns a
[`packit.Layer`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#Layer) object
that has been populated with any metadata that exists from previous builds of
your app. This metadata can be useful in determining whether or not a layer can
be reused from cache but we don't need to worry about that for now. The
[`packit.Layer.Reset()`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#Layer.Reset)
function clears all of the metadata and existing files restored from cache for
the given layer, giving a clean slate to work with. Finally,
[`nodeLayer.Launch = true`](https://pkg.go.dev/github.com/paketo-buildpacks/packit#Layer)
lets the lifecycle know that this layer needs to be available during the launch phase. Now that
we have our layers set up, let's download our dependency and untar it onto the layer.

{{< code/copyable >}}
package node

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/BurntSushi/toml"
	"github.com/paketo-buildpacks/packit"
)

func Build() packit.BuildFunc {
	return func(context packit.BuildContext) (packit.BuildResult, error) {
		file, err := os.Open(filepath.Join(context.CNBPath, "buildpack.toml"))
		if err != nil {
			return packit.BuildResult{}, err
		}

		var m struct {
			Metadata struct {
				Dependencies []struct {
					URI string `toml:"uri"`
				} `toml:"dependencies"`
			} `toml:"metadata"`
		}
		_, err = toml.DecodeReader(file, &m)
		if err != nil {
			return packit.BuildResult{}, err
		}

		uri := m.Metadata.Dependencies[0].URI
		fmt.Printf("URI -> %s\n", uri)

		nodeLayer, err := context.Layers.Get("node")
		if err != nil {
			return packit.BuildResult{}, err
		}

		nodeLayer, err = nodeLayer.Reset()
		if err != nil {
			return packit.BuildResult{}, err
		}

		nodeLayer.Launch = true

		downloadDir, err := os.MkdirTemp("", "downloadDir")
		if err != nil {
			return packit.BuildResult{}, err
		}
		defer os.RemoveAll(downloadDir)

		fmt.Println("Downloading dependency...")
		err = exec.Command("curl",
			uri,
			"-o", filepath.Join(downloadDir, "node.tar.xz"),
		).Run()
		if err != nil {
			return packit.BuildResult{}, err
		}

		fmt.Println("Untaring dependency...")
		err = exec.Command("tar",
			"-xf",
			filepath.Join(downloadDir, "node.tar.xz"),
			"--strip-components=1",
			"-C", nodeLayer.Path,
		).Run()
		if err != nil {
			return packit.BuildResult{}, err
		}

		return packit.BuildResult{
			Plan: context.Plan,
			Layers: []packit.Layer{
				nodeLayer,
			},
		}, nil
	}
}
{{< /code/copyable >}}

If you rebuild the `build` binary and run the `pack build` command once more
you will finally have your first successful build, HOORAY!

{{< code/copyable >}}
GOOS=linux go build -ldflags="-s -w" -o ./bin/build ./cmd/build/main.go
pack build <app-name> \
  --path <path/to/app> \
  --buildpack <path/to/project> \
  --builder paketobuildpacks/builder-jammy-base \
  --verbose
{{< /code/copyable >}}

The additional lines that were added are fairly straightforward, we create a
temporary directory to put out downloaded tarball into in order to make sure
that we don't pollute our image. We then download the dependency tarball with a
`curl` command and untar the resulting tarball directly in the `nodeLayer` path
using `tar` on the command line. It is worth noting that this is not the most
efficient way of handling this in Go, but for demonstration purposes it is the
most straightforward. You may notice that we use the `--strip-components` flag
on our tar commands because this particular tarball comes with a top level
directory before you reach the `lib`, `bin`, and `include` directories. We want
these directories to be at the top level of our layer path because these files
are interpreted directly by the lifecycle, which you can read more about
[here](https://github.com/buildpacks/spec/blob/master/buildpack.md#environment).
With this you have a perfectly functional buildpack, which you can test by
running a `pack build` like we did earlier and then running the following
`docker` command if you are using the simple app indicated earlier:

{{< code/copyable >}}
docker run -d -p 8080:8080 -e PORT=8080 <app-name> "node server.js"
{{< /code/copyable >}}

You can then verify that this is running by either running:

{{< code/copyable >}}
curl http://localhost:8080
{{< /code/copyable >}}

{{< code/output >}}
hello world
{{< /code/output >}}

or visiting `http://localhost:8080` in your web
browser. Either way you should expect to see "hello world" as your output.






