require('dotenv').config({ path: `${__dirname}/.env.${process.env.NODE_ENV}` });
const app = require('./server');

app.listen(process.env.SERVER_PORT, () => {
  console.log(`express server's running on PORT ${process.env.SERVER_PORT}`);
});
