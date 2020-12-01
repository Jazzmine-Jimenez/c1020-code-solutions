const fs = require('fs');
const data = require('./data.json');

if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataObj = JSON.parse(data);
    for (var entries in dataObj.notes) { console.log(`${entries}: ${dataObj.notes[entries]}`); }
  });
}

if (process.argv[2] === 'create') {
  const id = data.nextId;
  const newNote = process.argv[3];
  data.nextId++;
  data.notes[id] = newNote;
  const jsonData = JSON.stringify(data);
  fs.writeFile('./data.json', jsonData, 'utf8', err => {
    if (err) throw err;
  });
}
