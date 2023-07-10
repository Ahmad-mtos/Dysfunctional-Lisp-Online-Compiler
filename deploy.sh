#!/bin/bash
set -e
docker-compose down

# Remove front volume if it exists
VOLUME_NAME="dysfunctional-lisp-online-compiler_react_volume"
[[ ! -z "$(docker volume list | grep $VOLUME_NAME)" ]] && docker volume rm $VOLUME_NAME

DOCS_FILE="mkdocs-documentation"
cd $DOCS_FILE
mkdocs build
rm -rf ../react-frontend/public/site
mv -f site ../react-frontend/public

docker-compose up --build