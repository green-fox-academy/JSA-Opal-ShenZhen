const express = require('express');
require('dotenv').config();

function serverInit() {
    const server = express();

    // wait for handlers

    server.listen(process.env.SERVER_PORT, () => {
        console.log('express server\'s running...');
    });
}

module.exports = serverInit;
