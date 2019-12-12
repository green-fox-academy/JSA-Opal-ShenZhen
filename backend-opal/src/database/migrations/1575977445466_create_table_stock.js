module.exports = {
  up: 'alter table Stock add originalPrice int after amount',
  down: 'alter table Stock drop originalPrice'
};
