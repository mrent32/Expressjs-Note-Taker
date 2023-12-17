const fs = require('fs');
const util = require('util');
const notes = require('../routes/apiRoutes');

const readFromFile = util.promisify(fs.readFile);




const readAndAppend = (notes, 'db.json') => {
    fs.readFile('db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(notes);
        writeToFile(file, parsedData);
      }
    });
  };