const fs = require('fs');

const read = fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.notes);
});
