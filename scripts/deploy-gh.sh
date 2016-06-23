#!/bin/bash

set -e
git checkout gh-pages
git merge master -m "merge master and prepare to deploy"
ember build --environment gh-pages
git add dist --force
git commit -m "deploy to gh-pages"
git subtree push --prefix dist upstream gh-pages
git checkout master
