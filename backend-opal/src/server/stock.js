const express = require('express');

const app = express();

// const router = require('express').Router();

const MYSQL_DB = require('./db/driver');

const getStock = () =>
  app.get('/stock/:id', async (req, res) => {
    const userID = req.params.id;
    const data = await MYSQL_DB.getStockByUserId(userID);

    res.json(data);
  });

app.listen(3001, () => {
  console.log('Server connected at port 3001');
});

getStock();
