const express = require('express');

const server = express();

const getPortfolio = require('./src/server/portfolio');
const getWatchLists = require('./src/server/watchLists');

// wait for handlers
server.use('/portfolio', getPortfolio);
server.use('/watchlists', getWatchLists);

module.exports = server;
