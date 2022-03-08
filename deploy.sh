#!/usr/bin/env sh
echo "$1"

# abort on errors
# set -e

pnpm run clean:dist
pnpm run docs:build
cd docs/.vitepress/dist || exit
git init
git remote add origin https://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@github.com/FabCre/VitePress-Docs.git
git fetch --all
echo "Fetched"
sleep 5
echo "Return"
git add -A
git switch gh-pages
sleep 5
git commit -m 'deploy'
git status
echo "Checkout gh-pages"
git status
git push -f
echo "Pushed on github"
$SHELL