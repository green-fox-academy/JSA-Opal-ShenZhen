const mysql = require('mysql');
const migration = require('mysql-migrations');
require('dotenv').config();

const conn = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

migration.init(conn, __dirname + '/src/database/migrations');
