const express = require('express');
const portfolio = require('./portfolio');

function serverInit() {
    const server = express();

    // wait for handlers
    portfolio.getPortfolio(server);

    server.listen(process.env.SERVER_PORT, () => {
        console.log(`express server\'s running on PORT ${process.env.SERVER_PORT}`);
    });
}

module.exports = serverInit;
