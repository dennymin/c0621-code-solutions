const pullData = require('./data.json');
const fs = require('fs');
function updateData(id, entry) {
  pullData.notes[id] = entry;
  var transportData = JSON.stringify(pullData, null, 2);
  fs.writeFile('./data.json', transportData, err => {
    if (err) {
      throw err;
    }
  });
}
module.exports = updateData;
