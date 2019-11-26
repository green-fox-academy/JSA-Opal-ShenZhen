module.exports = {
  up: `CREATE TABLE Stock (
            id INT NOT NULL AUTO_INCREMENT, 
            user_id INT NOT NULL,
            symbol TEXT,
            amount INT,

            PRIMARY KEY (id),
            FOREIGN KEY (user_id) 
                REFERENCES User (id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
        );`,
  down: `DROP TABLE IF EXISTS Stock;`
};
