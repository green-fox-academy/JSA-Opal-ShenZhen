const router = require('express').Router();
const authService = require('./common/authorizationService');

// const portfolioList = [{ id: '1', userId: '1', symbol: 'MSFT', amount: 123 }];
const StockData = require('./stockServer');

router.get('/', async (req, res) => {
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
      portfolio: await StockData.getByUser()
    };

    res.status(200).send(response);
  }
});

module.exports = router;
