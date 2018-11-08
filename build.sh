#!/bin/bash
set -e

NODE_IMAGE="node:8.12.0-alpine"

docker pull $NODE_IMAGE
docker run --rm -it -w /src -v $PWD:/src $NODE_IMAGE /bin/sh -c 'npm install && npm run build && exit'
