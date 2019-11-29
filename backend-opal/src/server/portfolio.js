const router = require('express').Router();

const stockService = require('./stockService');

router.get('/', async (req, res) => {
  const response = {
    portfolio: await stockService.getByUser()
  };

  res.status(200).send(response);
});

module.exports = router;
