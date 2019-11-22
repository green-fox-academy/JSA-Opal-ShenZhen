const { stockItems } = require('./stockTestData');

const getStock = userID => {
  return new Promise((resolve, reject) => {
    const stockData = stockItems.filter(item => item.userID === userID);

    if (Array.isArray(stockData) && stockData.length) {
      resolve({ data: stockData });
    } else {
      resolve({ error: 'Stock item not found' });
    }
  });
};

module.exports = { getStock };
