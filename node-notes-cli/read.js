const pullData = require('./data.json');
function readData() {
  console.log(pullData.notes);
}
module.exports = readData;
