#!/bin/bash -euf

printf "With \"module\": \"nodenext\"\n"

./node_modules/.bin/tsc -p tsconfig_1.json

printf "\n\n---------\n\n"

printf "Without \"module\": \"nodenext\"\n"

./node_modules/.bin/tsc -p tsconfig_2.json
