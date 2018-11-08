#!/bin/bash
set -e

MONGO_TEST_DB="mongo-test-db"
MONGO_PORT=27017
MONGO_HOST="localhost"

# Prep the environment
docker pull mongo
docker run --rm -d --name $MONGO_TEST_DB -p $MONGO_PORT:27017 mongo
#node setup-test-db.js

# Run the tests
npm test

# Clean-up
docker stop $MONGO_TEST_DB
