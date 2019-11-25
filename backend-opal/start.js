/* eslint-disable global-require, no-unused-expressions, no-bitwise */
(process.env.NODE_ENV === 'development' &&
  require('dotenv').config({ path: `${__dirname}/.env.dev` })) |
  (process.env.NODE_ENV === 'production' &&
    require('dotenv').config({ path: `${__dirname}/.env.prod` }));
/* eslint-disable global-require, no-unused-expressions, no-bitwise */
const app = require('./server');

app.listen(process.env.SERVER_PORT, () => {
  console.log(`express server's running on PORT ${process.env.SERVER_PORT}`);
});
