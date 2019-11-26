const mysql = require('mysql');

let connection;

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

const initDataBase = config => {
  if (!connection) {
    connection = mysql.createConnection(config);
    connection.connect(function(err) {
      if (err) {
        console.error(`Database connection error ${err.stack}`);
        return;
      }
      console.log(`Database connected as id ${connection.threadId}`);
    });
  }

  return connection;
};

module.exports = initDataBase(dbConfig);
