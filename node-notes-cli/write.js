const data = require('./data.json');
const newObj = {};
for (var entries in data.notes) { newObj[entries] = data.notes[entries]; }
newObj[data.nextID] = data.notes[process.argv[3]];
