const { stockItems } = require('../db/__mocks__/stockServiceTestData');

const getByUser = () => {
  return new Promise(resolve => {
    if (Array.isArray(stockItems) && stockItems.length) {
      resolve({ data: stockItems });
    } else {
      resolve({ error: 'Stock item not found' });
    }
  });
};

module.exports = { getByUser };
