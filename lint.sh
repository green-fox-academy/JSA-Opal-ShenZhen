#!/bin/bash
# FILES_CHANGED=$(git diff --name-only HEAD~ HEAD | grep '.js')
# $(./node_modules/eslint/bin/eslint.js ${FILES_CHANGED} --ext .js --fix)
cd backend-opal && npm run lint
cd .. && cd frontend-opal && npm run lint 
