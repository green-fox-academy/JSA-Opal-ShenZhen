module.exports = {
  up: `INSERT INTO watch_list 
    (user_id, name, symbols) 
 VALUES 
    (1, 'adom', 'MSFT,EPAM'),
    (1, 'adom', 'AAPL,FB'),
    (1, 'adom', 'GO,BABA'),
    (1, 'adom', 'JD,AMZN');`,
  down: `
    DELETE FROM watch_list 
    WHERE user_id = 1;`
};
