const { watchListItems } = require('./watchListServiceTestData');

const getSymbols = userId => {
  return new Promise(resolve => {
    const watchListData = watchListItems.filter(item => item.userId === userId);

    if (Array.isArray(watchListData) && watchListData.length) {
      resolve({ data: watchListData });
    } else {
      resolve({ error: 'watchList item not found' });
    }
  });
};

module.exports = { getSymbols };
