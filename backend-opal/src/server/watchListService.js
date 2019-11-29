const driver = require('./db/driver');

const getSymbols = async getWatchlists => {
  console.log(getWatchlists);
  const data = await driver.getSymbols(getWatchlists);
  return data;
};

module.exports = { getSymbols };
