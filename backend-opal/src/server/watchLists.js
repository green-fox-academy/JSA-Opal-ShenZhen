const router = require('express').Router();
const authService = require('../middleware/authenticationService');

const data = [
  {
    id: 1,
    userId: 1,
    name: 'My Watchlist 1',
    symbols: ['MSFT', 'AMZN', 'AAPL', 'FB']
  }
];

function checkRequestBody(body) {
  const bodyKey = ['userId', 'name'];
  const result = bodyKey.filter(key => !(key in body));
  return result;
}

router.get('/', authService, function(req, res) {
  const response = {
    watchlists: data
  };

  res.status(200).send(response);
});

router.post('/', authService, function(req, res) {
  try {
    const { body } = req;
    const missingPart = checkRequestBody(body);

    if (missingPart.length > 0) {
      const missingStr = missingPart.join(' and ');
      const response = {
        error: `${missingStr} is missing`
      };
      res.status(400).send(response);
    } else {
      res.status(200).send(body);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
