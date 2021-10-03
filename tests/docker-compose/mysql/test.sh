#!/bin/bash
set -euo pipefail

docker-compose up --detach mysql
for j in {1..10}; do docker-compose run --rm mysql mysql --host=mysql --password=changeme --user=local app <<< "help" && break || sleep 2; done
docker-compose down
