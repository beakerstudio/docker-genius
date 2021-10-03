#!/bin/bash
set -euo pipefail

docker-compose build --no-cache
docker-compose run --rm nodejs
docker-compose run --rm nodejs npm install
docker-compose run --rm nodejs node -e 'console.log("1>Hello, world!");'
