module.exports = {
  up: `INSERT INTO watch_lists 
    (user_id, name, symbols) 
 VALUES 
    (1, 'adom', 'MSFT,EPAM'),
    (1, 'adom', 'APPL,FB'),
    (1, 'adom', 'GO,ALI'),
    (1, 'adom', 'TENC,AMZN');`,
  down: `
    DELETE FROM watch_lists 
    WHERE user_id = 1;`
};
