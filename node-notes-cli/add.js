const pullData = require('./data.json');
const fs = require('fs');
function addData(entry) {
  pullData.notes[pullData.nextId] = entry;
  pullData.nextId++;
  var transportData = JSON.stringify(pullData, null, 2);
  fs.writeFile('./data.json', transportData, err => {
    if (err) {
      throw err;
    }
  });
}
module.exports = addData;
