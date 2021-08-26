#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

echo 'developers.vanegmond.cloud' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:vanegmondgroep/engineering-best-practices.git master:gh-pages

cd -
