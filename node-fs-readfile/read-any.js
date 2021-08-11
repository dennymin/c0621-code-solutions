const fs = require('fs');
const destinationFile = './' + process.argv[2];
if (process.argv.length > 1) {
  fs.readFile(destinationFile, 'utf8', (err, data) => {
    if (err) {
      console.log('there was an error');
    } else { console.log(data); }
  });
}
