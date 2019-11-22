const router = require('express').Router();
const authService = require('./common/authorizationService');

const data = [
  {
    id: 1,
    userId: 1,
    name: 'My Watchlist 1',
    symbols: ['MSFT', 'AMZN', 'AAPL', 'FB']
  }
];

router.get('/', function(req, res) {
  const { authorization } = req.headers;
  if (authService.checkAuthHeader(authorization)) {
    const response = {
      error: 'Authentication header is missing!'
    };

    res.status(401).send(response);
  } else if (authService.authorize(authorization)) {
    const response = {
      error: 'User is not allowed to do this action!'
    };

    res.status(403).send(response);
  } else {
    const response = {
      watchlists: data
    };

    res.status(200).send(response);
  }
});

module.exports = router;
