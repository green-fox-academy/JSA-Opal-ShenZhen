// const router = require('express').Router();
const db_driver = require('./db/driver');

const getStockByUser = userID => async (req, res) => {
  console.log('server: getStock');
  const data = await db_driver.getStockByUserId(userID);

  res.json(data);
};

module.exports = { getStock };
