#!/usr/bin/env sh

# abort on errors
set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy: github page'

git push -f git@github.com/FabCre/VitePress-Docs.git main:gh-pages

cd -