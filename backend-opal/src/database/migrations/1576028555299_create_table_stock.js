module.exports = {
  up: 'update Stock set originalPrice=210.4 where symbol="FB"',
  down: 'update Stock set originalPrice=NULL where symbol="FB"'
};
