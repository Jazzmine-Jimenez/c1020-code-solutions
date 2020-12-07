const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  process.stdout.write('listening on port 3000');
});

const jsonMiddle = express.json();
app.use(jsonMiddle);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  nextId++;
  grades.push(newGrade);
  res.status(201);
  res.json(newGrade);
});
