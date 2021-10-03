#!/bin/bash
set -euo pipefail

docker-compose build --no-cache
docker-compose run --rm golang
docker-compose run --rm golang go version
