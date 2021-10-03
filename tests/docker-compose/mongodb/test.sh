#!/bin/bash
set -euo pipefail

docker-compose up --detach mongodb
for j in {1..10}; do docker-compose run --rm mongodb mongo --host=mongodb --password=changeme --username=root --eval="db.runCommand({whatsmyuri: 1});" && break || sleep 2; done
docker-compose down
