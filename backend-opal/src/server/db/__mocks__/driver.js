const { stockItems } = require('./stockServiceTestData');
const { watchListItems } = require('./watchListServiceTestData');

const getSymbols = userId => {
  return new Promise(resolve => {
    const watchListData = watchListItems.filter(item => item.user_id === userId);
    if (Array.isArray(watchListData) && watchListData.length) {
      resolve({ data: watchListData });
    } else {
      resolve({ error: 'watchList item not found' });
    }
  });
};

const getStockByUserId = userID => {
  return new Promise(resolve => {
    const stockData = stockItems.filter(item => item.userID === userID);

    if (Array.isArray(stockData) && stockData.length) {
      resolve({ data: stockData });
    } else {
      resolve({ error: 'Stock item not found' });
    }
  });
};

module.exports = { getStockByUserId, getSymbols };
