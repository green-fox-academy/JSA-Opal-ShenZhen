require('dotenv').config({ path: `${__dirname}/.env.${process.env.NODE_ENV}` });
const mysql = require('mysql');
const migration = require('mysql-migrations');

const conn = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

migration.init(conn, `${__dirname}/src/database/migrations`);
