const driver = require('./db/driver');

const getWatchLists = async userId => {
  console.log(userId);
  const data = await driver.getWatchListsByUserId(userId);
  return data;
};

module.exports = { getWatchLists };
