module.exports = {
  up: 'update Stock set originalPrice=1805.97 where symbol="AMZN"',
  down: 'update Stock set originalPrice=NULL where symbol="AMZN"'
};
