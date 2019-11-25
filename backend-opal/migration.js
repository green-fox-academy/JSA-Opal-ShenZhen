/* eslint-disable global-require, no-unused-expressions, no-bitwise */
(process.env.NODE_ENV === 'development' &&
  require('dotenv').config({ path: `${__dirname}/.env.dev` })) |
  (process.env.NODE_ENV === 'production' &&
    require('dotenv').config({ path: `${__dirname}/.env.prod` }));
/* eslint-disable global-require, no-unused-expressions, no-bitwise */
const mysql = require('mysql');
const migration = require('mysql-migrations');

const conn = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

migration.init(conn, `${__dirname}/src/database/migrations`);
