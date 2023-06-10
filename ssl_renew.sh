#!/bin/bash

COMPOSE="/usr/local/bin/docker-compose --ansi never"
DOCKER="/usr/bin/docker"

cd ~/Rocket
$COMPOSE run certbot renew && $COMPOSE kill -s SIGHUP client
$DOCKER system prune -af