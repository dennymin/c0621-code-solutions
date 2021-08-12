const pullData = require('./data.json');
const fs = require('fs');
function deleteData(id) {
  delete pullData.notes[id];
  var transportData = JSON.stringify(pullData, null, 2);
  fs.writeFile('./data.json', transportData, err => {
    if (err) {
      throw err;
    }
  });
}
module.exports = deleteData;
