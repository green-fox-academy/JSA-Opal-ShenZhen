const router = require('express').Router();
const authService = require('../middleware/authenticationService');

const stockService = require('./stockService');

router.get('/', authService, async (req, res) => {
  const response = {
    portfolio: await stockService.getByUser()
  };

  res.status(200).send(response);
});

module.exports = router;
