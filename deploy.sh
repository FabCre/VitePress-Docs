#!/usr/bin/env sh

# Check if PAT and REPO are provide, ".\deploy.sh <PAT>@github.com/FabCre/VitePress-Docs.git"
if [ -z "$1" ]; then
  echo "Please provide '<PAT>@<REPO>.git'"
  echo "Exiting..."
  sleep 2
  exit
fi

echo "origin (https://<PAT>@<REPO>.git): $1"

# abort on errors
set -e

# Clean previous build and create dist directory
pnpm run clean:dist
cd docs/.vitepress/ || exit
mkdir dist
cd dist || exit

# Initialize a new git repository with the remote where to push
git init
git remote add origin https://"$1"
git fetch --all

# Wait to retrieve and fetch origin
sleep 5
git checkout gh-pages
pnpm run docs:build

# Wait for the build
sleep 10
git status
git add .
git status
git commit -m 'deploy: latest version of VitePress-Docs'
sleep 5
git push --force
echo "Pushed on github gh-pages"

# Clean build
pnpm run clean:dist

echo "Finished, check github action and close the shell"

# Enable this parameter to let the shell open after finished
$SHELL
