module.exports = {
  up: `INSERT INTO Stock 
          (user_id, symbol, amount) 
       VALUES 
          (1, 'MSFT', 100),
          (2, 'AMZN', 200),
          (3, 'AAPL', 300),
          (4, 'FB', 400);`,
  down: `
        DELETE FROM Stock 
        WHERE 
          (user_id)
        IN 
          ((1), (2), (3), (4));`
};
