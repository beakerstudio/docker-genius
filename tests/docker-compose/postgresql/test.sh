#!/bin/bash
set -euo pipefail

docker-compose up --detach postgresql 
docker-compose run --rm postgresql psql postgresql://local:changeme@postgresql/app -c "\\copyright"
docker-compose down
