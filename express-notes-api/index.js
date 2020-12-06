const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

app.listen(3000, () => {
  process.stdout.write('listening on port 3000');
});

// Clients can GET a list of notes.
app.get('/api/notes', (req, res) => {
  const jsonArray = [];
  for (var index in data.notes) { jsonArray.push(data.notes[index]); }
  res.json(jsonArray);
});

// Clients can GET a single note by id
app.get('/api/notes/:id', (req, res) => {
  const requestedId = Number(req.params.id);
  const requestedNote = data.notes[requestedId];
  if (requestedId < 0) {
    res.status(400);
    res.send({ error: 'id must be a positive interger' });
  } else if (requestedNote) {
    res.status(200);
    res.json(requestedNote);
  } else {
    res.status(404);
    res.send({ error: 'must enter an existing id' });
  }
});

// Clients can POST a new note.
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes', (req, res) => {
  const newNote = {};
  newNote.id = data.nextId;
  newNote.content = req.body.content;
  if (!newNote.content) {
    res.status(400);
    res.send({ error: 'must include the content property' });
  } else if (newNote.content) {
    data.notes[data.nextId] = newNote;
    data.nextId++;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

// Clients can DELETE a note by id.
app.delete('/api/notes/:id', (req, res) => {
  const deleteId = Number(req.params.id);
  if (deleteId < 0) {
    res.status(400);
    res.send({ error: 'id must be a positive interger' });
  } else if (typeof data.notes[deleteId] === 'undefined') {
    res.status(404);
    res.send({ error: 'must enter an existing id' });
  } else if (deleteId === data.notes[deleteId].id) {
    delete data.notes[deleteId];
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.send({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(200);
      }
    });
  }
});

// Clients can replace a note (PUT) by id.
app.put('/api/notes/:id', (req, res) => {
  const updateId = Number(req.params.id);
  const updatedNote = req.body.content;

  if (updateId < 0 || !updatedNote) {
    res.status(400);
    res.send({ error: 'id must be a positive integer or ensure there is a content property' });
  } else if (typeof data.notes[updateId] === 'undefined') {
    res.status(404);
    res.send({ error: 'must enter an existing id' });
  } else if (typeof data.notes[updateId] !== 'undefined') {
    data.notes[updateId].content = updatedNote;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200);
        res.json(data.notes[updateId]);
      }
    });
  }
});
