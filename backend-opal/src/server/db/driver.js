const mysql = require('mysql');
const db = require('./config');

/* ---------------------------------------------------------
 * Database Manipulation Tools Initialization 
------------------------------------------------------------*/
function isStringVal(val) {
  return typeof val === 'string' ? `'${val}'` : val;
}

function queryFilter(items) {
  // Filter object item without value
  const target = Object.keys(items)
    .filter(key => items[key] !== undefined)
    .reduce((obj, key) => {
      const res = obj;
      res[key] = items[key];
      return res;
    }, {});
  // Join query string
  const filterString = Object.keys(target)
    .map(key => {
      return `${key}=${isStringVal(items[key])}`;
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
function getStockByUserId(id) {
  let query = `SELECT ?? FROM Stock ${queryFilter({ user_id: id })};`;
  const columns = ['id', 'user_id', 'symbol', 'amount'];

  query = mysql.format(query, [columns]);
  console.log(query);
  return executeQuery(db, query);
}

function getSymbols(userId) {
  const sql = `select symbols from watchlist where user_id = ${db.escape(userId)}`;
  return executeQuery(db, sql);
}

module.exports = {
  getStockByUserId,
  getSymbols
};
