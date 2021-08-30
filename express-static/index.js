const express = require('express');
const path = require('path');
const app = express();
const connection = path.join(__dirname, './public');
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('i am listening');
});
const results = express.static(connection);
app.use(results);
