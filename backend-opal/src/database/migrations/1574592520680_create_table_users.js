module.exports = {
  up: `INSERT INTO WatchList 
    (user_id, name, symbols) 
 VALUES 
    (1, 'adom', 'MSFT,EPAM'),
    (1, 'adom', 'APPL,FB'),
    (1, 'adom', 'GO,ALI'),
    (1, 'adom', 'TENC,AMZN');`,
  down: `
    DELETE FROM User 
    WHERE user_id = 1;`
};
