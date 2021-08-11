const fs = require('fs');
fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('there was an error');
  } else { console.log(data); }
});
