#!/bin/bash
set -euo pipefail

docker-compose build --no-cache
docker-compose up --detach
for j in {1..10}; do curl localhost:8080 && break || sleep 2; done
docker-compose run --rm php php /var/www/html/private.php
docker-compose run --rm php composer help
docker-compose down
