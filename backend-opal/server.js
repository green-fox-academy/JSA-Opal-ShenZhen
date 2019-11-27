const express = require('express');

const server = express();
const bodyParser = require('body-parser');

const getPortfolio = require('./src/server/portfolio');
const getWatchLists = require('./src/server/watchLists');

server.use(bodyParser.json());
// wait for handlers
server.use('/portfolio', getPortfolio);
server.use('/watchlists', getWatchLists);

module.exports = server;
