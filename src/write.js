const fs = require('fs');

function write(file, fileContent) {
  fs.writeFile(`${file}`, fileContent, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

module.exports = write;
