const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('listening on port 3000');
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
  const deleteId = req.params.id;
  console.log('deleteId:', deleteId);
  for (let i = 0; i < grades.length; i++) {
    console.log('grades[i].id:', grades[i].id);
    if (grades[i].id === deleteId) {
      console.log('in in');
    }
  }
});

// app.delete('/api/grades/:id', function (req, res) {
//   for (var i = 0; i < grades.length; i++) {
//     // if (grades[i].id === req.params.id) {
//     //   res.send(grades[i].id);
//     // grades.splice(i, 1);
//     // }
//     console.log(grades[i]);
//   }
//   // res.sendStatus();
// });
