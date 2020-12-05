const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const values = [name, course, score];

  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
      returning *
    `;
  db.query(sql, values)
    .then(result => {
      const newGrade = result.rows[0];
      if (score < 0 || score > 100 || !Number.isInteger(score)) {
        res.status(404).json(
          { error: 'Ensure score is a interger between 1 - 100' });
      } else if (typeof newGrade.name === 'undefined') {
        res.status(404).json(
          { error: 'Must include a name' });
      } else {
        res.status(200).json(newGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  process.stdout.write('listening on port 3000!');
});
