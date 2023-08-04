#!/bin/bash
set -e
docker-compose down

FRONT_VOLUME="dysfunctional-lisp-online-compiler_react_volume"
DOCS_VOLUME="dysfunctional-lisp-online-compiler_docs_volume"
[[ ! -z "$(docker volume list | grep $FRONT_VOLUME)" ]] && docker volume rm $FRONT_VOLUME
[[ ! -z "$(docker volume list | grep $DOCS_VOLUME)" ]] && docker volume rm $DOCS_VOLUME

docker-compose up --build