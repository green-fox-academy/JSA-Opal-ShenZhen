#!/bin/bash
cd backend-opal && npm run lint-fix
cd .. && cd frontend-opal && npm run lint-fix 
