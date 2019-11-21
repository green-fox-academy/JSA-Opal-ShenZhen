module.exports = {
  up: `CREATE TABLE User (
            id INT NOT NULL AUTO_INCREMENT, 
            first_name VARCHAR(26),
            last_name VARCHAR(26),

            PRIMARY KEY (id)
        );`,
  down: `DROP TABLE IF EXISTS User;`
};