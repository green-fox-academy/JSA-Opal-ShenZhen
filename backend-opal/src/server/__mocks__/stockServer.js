const { stockItems } = require('./stockServerTestData');

const getStockByUser = userID => {
  console.log('mock: getStockByUserId');

  return new Promise(resolve => {
    const stockData = stockItems.filter(item => item.userID === userID);

    if (Array.isArray(stockData) && stockData.length) {
      resolve({ data: stockData });
    } else {
      resolve({ error: 'Stock item not found' });
    }
  });
};

module.exports = { getStockByUser };
