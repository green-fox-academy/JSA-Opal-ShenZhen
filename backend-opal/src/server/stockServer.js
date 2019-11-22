const dbDriver = require('./db/driver');

const getStockByUser = async userID => {
  console.log('stockServer');
  const data = await dbDriver.getStockByUserId(userID);
  return data;
};

module.exports = { getByUser: getStockByUser };
