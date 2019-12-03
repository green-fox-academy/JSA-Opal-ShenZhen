const router = require('express').Router();
const WatchListsService = require('./watchListService');

router.get('/', async (req, res) => {
  const response = {
    watchlists: await WatchListsService.getWatchLists(1)
  };

  res.status(200).send(response);
});

function checkRequestBody(body) {
  const bodyKey = ['userId', 'name'];
  const result = bodyKey.filter(key => !(key in body));
  return result;
}

router.post('/', function(req, res) {
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
