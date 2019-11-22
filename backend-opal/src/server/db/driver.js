const mysql = require('mysql');
const MYSQL_DB = require('./config');

/* ---------------------------------------------------------
 * Database Manipulation Tools Initialization 
------------------------------------------------------------*/
function isStringVal(val) {
  return typeof val === 'string' ? "'" + val + "'" : val;
}

function queryFilter(items) {
  // Filter object item without value
  let target = Object.keys(items)
    .filter(key => items[key] != undefined)
    .reduce((obj, key) => {
      obj[key] = items[key];
      return obj;
    }, {});
  // Join query string
  let filterString = Object.keys(target)
    .map(key => {
      return key + '=' + isStringVal(items[key]);
    })
    .join(' and ');

  return filterString ? ` WHERE ${filterString}` : '';
}

function executeQuery(conn, query) {
  return new Promise((resolve, reject) => {
    conn.query(query, (err, result) => {
      if (err) {
        console.log(err.message);
        reject(err);
      }
      resolve(result);
      console.log('Executed a query successfully!');
    });
  });
}

/* ---------------------------------------------------------
 * Retrieve data from Database
------------------------------------------------------------*/
function getStockByUserId(id, db = MYSQL_DB) {
  let query = `SELECT ?? FROM Stock ${queryFilter({ user_id: id })};`;
  let columns = ['id', 'user_id', 'symbol', 'amount'];

  query = mysql.format(query, [columns]);
  return executeQuery(db, query);
}

module.exports = {
    getStockByUserId
};
