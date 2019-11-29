const express = require('express');

const server = express();
const bodyParser = require('body-parser');

const authService = require('./src/middleware/authenticationService');
const getPortfolio = require('./src/server/portfolio');
const getWatchLists = require('./src/server/watchLists');

server.use(bodyParser.json());
// wait for handlers
server.use(authService);
server.use('/portfolio', getPortfolio);
server.use('/watchlists', getWatchLists);

module.exports = server;
