const driver = require('./db/driver');

const getSymbols = async userID => {
  console.log(userID)
  const data = await driver.getSymbols(userID);
  return data;
};

module.exports = { getSymbols };