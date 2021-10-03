#!/bin/bash
set -euo pipefail

docker-compose build --no-cache
docker-compose run --rm python
docker-compose run --rm python python -c 'print("1>Hello, world!")'
