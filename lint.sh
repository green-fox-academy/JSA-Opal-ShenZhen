#!/bin/bash
FILES_CHANGED=$(git diff --name-only HEAD~ HEAD | grep '.js')
$(./node_modules/eslint/bin/eslint.js ${FILES_CHANGED} --ext .js --fix)