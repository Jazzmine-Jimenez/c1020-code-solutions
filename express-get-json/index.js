const express = require('express');

const newArray = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Jazzmine Jimenez',
    course: 'Express',
    grade: 9002
  }
];

const app = express();
app.listen(3000);
app.get('/api/grades', function (req, res) {
  res.send(newArray);
});
