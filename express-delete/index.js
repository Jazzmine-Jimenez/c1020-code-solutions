const express = require('express');
const app = express();

app.listen(3000, () => {
  process.stdout.write('listening on port 3000');
});

const grades = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Jazzmine Jimenez',
    course: 'JavaScript',
    grade: 9002
  }
];

app.get('/api/grades', function (req, res) {
  res.json(grades);
});

app.delete('/api/grades/:id', function (req, res) {
  const deleteId = Number(req.params.id);
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === deleteId) {
      grades.splice(i, 1);
    }
  }
  res.sendStatus(204);
});
