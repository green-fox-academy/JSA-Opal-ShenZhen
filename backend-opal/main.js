require('dotenv').config();
const express = require('express');
const portfolio = require('./src/server/portfolio');

const server = express();

// wait for handlers
portfolio.getPortfolio(server);

server.listen(process.env.SERVER_PORT, () => {
    console.log(`express server\'s running on PORT ${process.env.SERVER_PORT}`);
});

module.exports = server;
