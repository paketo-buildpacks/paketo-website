---
title: "Build an Example App"
date: 2020-03-31T12:50:55-04:00
weight: 3
---
# Build An Example App
First lets create a simple Node.js application to build.
It should have the following structure:

### Write a Simple App
The GitHub repository for the following application can be found [here](https://github.com/ForestEckhardt/simple-paketo-node-app).

### Application Structure
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
