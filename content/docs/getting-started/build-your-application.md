---
title: "Building Your Application"
date: 2020-03-31T12:50:55-04:00
weight: 4
---


# Building Your Application

Build an image using `pack` with the following command

```
pack build test-drive -p <path/to/test-drive/app> --builder gcr.io/paketo-buildpacks/builder:base
```

Verify that your build was successful by running `docker images` you should expect to see something similar to the following output
```
REPOSITORY                         TAG                 IMAGE ID            CREATED             SIZE
gcr.io/paketo-buildpacks/run       base-cnb            88e2c125e701        6 days ago          1.05GB
gcr.io/paketo-buildpacks/builder   base                7264ff2c18c3        40 years ago        1.5GB
test-drive                         latest              fcaa3645e775        40 years ago        1.13GB
```

Run the image locally on port 8080 using the following command

```
docker run -p 8080:8080 test-drive
```

**Congratulations! Your app is now running on `localhost:8080`. It is that simple to use Paketo Buildpacks.**
