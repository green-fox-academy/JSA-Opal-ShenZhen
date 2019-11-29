module.exports = {
  up: `CREATE TABLE watch_lists (
        id INT NOT NULL AUTO_INCREMENT, 
        user_id INT,
        name VARCHAR(26),
        symbols VARCHAR(26),
        PRIMARY KEY (id)
    );`,
  down: 'DROP TABLE IF EXISTS watch_lists;'
};
