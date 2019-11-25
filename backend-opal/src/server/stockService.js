const driver = require('./db/driver');

const getStockByUser = async userID => {
  const data = await driver.getStockByUserId(userID);
  return data;
};

module.exports = { getByUser: getStockByUser };
