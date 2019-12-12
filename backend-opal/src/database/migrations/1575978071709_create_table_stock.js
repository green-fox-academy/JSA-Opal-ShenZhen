module.exports = {
  up: 'update Stock set originalPrice=152.22 where symbol="MSFT"',
  down: 'update Stock set originalPrice=NULL where symbol="MSFT"'
};
