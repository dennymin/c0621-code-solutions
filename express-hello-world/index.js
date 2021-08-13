const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.send('hi');
});

app.listen(3000, () => {
});
