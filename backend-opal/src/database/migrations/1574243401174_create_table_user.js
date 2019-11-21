module.exports = {
  up: `INSERT INTO User 
          (first_name, last_name) 
       VALUES 
          ('girl', '1'),
          ('girl', '2'),
          ('boy', '1'),
          ('boy', '2');`,
  down: `
        DELETE FROM User 
        WHERE 
          (first_name, last_name) 
        IN 
          (('girl', '1'),
          ('girl', '2'),
          ('boy', '1'),
          ('boy', '2'));`
};
