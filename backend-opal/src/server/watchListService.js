const driver = require('./db/driver');

const getWatchListsByUserId = async userId => {
  console.log(userId);
  const data = await driver.getWatchListsByUserId(userId);
  return data;
};

module.exports = { getWatchListsByUserId };
