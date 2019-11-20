require('dotenv').config();
const app = require('./server');

app.listen(process.env.SERVER_PORT, () => {
  console.log(`express server's running on PORT ${process.env.PORT}`);
});
