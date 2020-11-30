const fs = require('fs');

if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataObj = JSON.parse(data);
    for (var entries in dataObj.notes) { console.log(`${entries}. ${dataObj.notes[entries]}`); }
  });
}

if (process.argv[2] === 'create') {
  const newObj = {};
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataObj = JSON.parse(data);
    console.log('data as Object:', dataObj);
    for (var entries in dataObj) {
      newObj[entries] = dataObj.entries;
    }
    console.log('newObj:', newObj);
  }

    // newObj.notes[dataObj.nextID] = process.argv[3];

  );
}

// fs.appendFile('./data.json', JSON.stringify(newObj), (err, data) => {
//   if (err) throw err;
// });

// dataObj.notes[entries[process.argv[3]]];
