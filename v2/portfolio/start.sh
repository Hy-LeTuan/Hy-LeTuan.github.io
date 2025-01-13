#!/bin/bash

SASS_STAT=$(sass --watch ./src/scss:./src/css)
echo "Finish SASS watching process"

NPM_STAT=$(npm run dev)

echo $SASS_STAT
echo $NPM_STAT

echo "Starting process completed"
