#!/bin/bash
set -euo pipefail

docker-compose up --detach redis
for j in {1..10}; do docker-compose run --rm redis redis-cli -h redis set foo bar && break || sleep 2; done
docker-compose run --rm redis redis-cli -h redis get foo
docker-compose down
