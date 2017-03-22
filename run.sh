#!/bin/bash

# install node dependencies
npm install

# bootstrap the database if it doesn't exist
[ ! -f node_modules/workshop-server/data/restaurants.db ] && ./reset.sh

# build the angular 2 app.
ng build

# startup the node server
node node_modules/workshop-server/main --port 9000 -d ./dist

# startup the server in secure mode
# node node_modules/workshop-server/main --port 9000 -s -d ./webapp
