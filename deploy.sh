#!/usr/bin/env sh
echo "origin: $1"

# abort on errors
set -e

pnpm run clean:dist
cd docs/.vitepress/ || exit
mkdir dist
cd dist || exit
git init
git remote add origin https://"$1"
git fetch --all
sleep 5
git checkout gh-pages
pnpm run docs:build
sleep 10
git status
git add .
git status
git commit -m 'deploy'
sleep 5
git push --force
echo "Pushed on github"
$SHELL