require('dotenv').config();
const express = require('express');

const server = express();
const PORT = 3001;

const getPortfolio = require('./src/server/portfolio');
const getWatchLists = require('./src/server/watchLists');

// wait for handlers
server.use('/portfolio', getPortfolio);
server.use('/watchlists', getWatchLists);

server.listen(PORT, () => {
  console.log(`express server's running on PORT ${PORT}`);
});

module.exports = server;
