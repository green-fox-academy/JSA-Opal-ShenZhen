module.exports = {
  up: 'update Stock set originalPrice=270.87 where symbol="AAPL"',
  down: 'update Stock set originalPrice=NULL where symbol="AAPL"'
};
