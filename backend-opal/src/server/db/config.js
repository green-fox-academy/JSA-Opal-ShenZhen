const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/./../../../.env') });
const mysql = require('mysql');

const DB_CONFIG = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

const MYSQL_DB = config => {
  const connection = mysql.createConnection(config);

  connection.connect(function(err) {
    if (err) {
      console.error(`Database connection error ${err.stack}`);
      return;
    }

    console.log(`Database connected as id ${connection.threadId}`);
  });

  return connection;
};

module.exports = MYSQL_DB(DB_CONFIG);
