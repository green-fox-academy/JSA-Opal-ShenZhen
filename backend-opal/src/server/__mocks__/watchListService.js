const { watchListItems } = require('./watchListServiceTestData');

const getSymbols = () => {
  return new Promise(resolve => {
    if (Array.isArray(watchListItems) && watchListItems.length) {
      resolve({ data: watchListItems });
    } else {
      resolve({ error: 'watchList item not found' });
    }
  });
};

module.exports = { getSymbols };
