#!/bin/bash
cd backend-opal && npm run lint
cd .. && cd frontend-opal && npm run lint 
