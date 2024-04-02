#!/usr/bin/env bash
docker build -f Dockerfile-dev -t vitepress-reminder:dev .
docker-compose -f docker-compose-tools.yml up npm-install
docker stack deploy -c docker-compose-serve.yml stack-vitepress-reminder
