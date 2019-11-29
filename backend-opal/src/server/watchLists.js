const router = require('express').Router();
const authService = require('./common/authorizationService');
const WatchListsData = require('./watchListService');

function checkRequestBody(body) {
  const bodyKey = ['userId', 'name'];
  const result = bodyKey.filter(key => !(key in body));
  return result;
}

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
      watchlists: await WatchListsData.getSymbols(1)
    };

    res.status(200).send(response);
  }
});

router.post('/', function(req, res) {
  try {
    const { authorization } = req.headers;
    const { body } = req;
    const missingPart = checkRequestBody(body);

    if (authService.checkAuthHeader(authorization)) {
      const response = {
        error: 'Authentication header is missing!'
      };
      res.status(401).send(response);
    } else if (missingPart.length > 0) {
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
