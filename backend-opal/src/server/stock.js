const router = require('express').Router();
const MYSQL_DB = require('./db/driver');

const getStock = (userID) =>
  router.get(`/stock/:${userID}`, async (req, res) => {
    const data = await MYSQL_DB.getStockByUserId(userID);

    res.json(data);
  });

module.exports = getStock;
