const router = require('express').Router();
const authService = require('./common/authorizationService');
const WatchListsData = require('./watchListService');

router.get('/:UserId', async (req, res) => {
  const { authorization } = req.headers;
  const { UserId } = req.params;
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
      watchlists: await WatchListsData.getSymbols(UserId)
    };

    res.status(200).send(response);
  }
});

module.exports = router;
