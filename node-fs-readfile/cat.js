const fs = require('fs');

let counter = 2;

function readThis() {
  fs.readFile('./' + process.argv[counter], 'utf8', (err, data) => {
    if (counter < process.argv.length) {
      if (err) {
        console.log('there was an error');
      } else {
        if (counter < process.argv.length) {
          console.log(data);
          counter++;
          readThis();
        }
      }
    }
  });
}

readThis();
