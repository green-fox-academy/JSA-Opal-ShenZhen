module.exports = {
  up: `CREATE TABLE Stock (
            id INT NOT NULL AUTO_INCREMENT, 
            user_id INT NOT NULL,
            symbol TEXT,
            amount INT,

            PRIMARY KEY (id)
        );`,
  down: `DROP TABLE IF EXISTS Stock;`
};
