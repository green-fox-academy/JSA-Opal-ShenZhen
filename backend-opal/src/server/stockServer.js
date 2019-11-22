// const router = require('express').Router();
const dbDriver = require('./db/driver');

const getStockByUser = userID => async (req, res) => {
  const data = await dbDriver.getStockByUserId(userID);

  return res.json(data);
};

module.exports = { getStockByUser };
