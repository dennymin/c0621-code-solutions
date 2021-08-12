const fs = require('fs');
const randNumb = Math.floor(Math.random() * 100).toString() + '\n';
fs.writeFile('./random.txt', randNumb, err => {
  if (err) {
    throw err;
  }
});
