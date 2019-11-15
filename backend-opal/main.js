require('dotenv').config();
const express = require('express');

const server = express();

const getPortfolio = require('./src/server/portfolio');

// wait for handlers
server.use('/portfolio', getPortfolio);

server.listen(process.env.SERVER_PORT, () => {
  console.log(`express server's running on PORT ${process.env.SERVER_PORT}`);
});

module.exports = server;
