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

  if (score < 0 || score > 100 || !Number.isInteger(score)) {
    return res.status(404).json(
      { error: 'Must include a score as an interger between 1 - 100' });
  } else if (!name) {
    return res.status(404).json(
      { error: 'Must include a name' });
  } else if (!course) {
    return res.status(404).json(
      { error: 'Must include a course' });
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
      returning *
    `;
  db.query(sql, values)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(200).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const updateId = req.params.gradeId;
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const values = [updateId, name, course, score];

  if (score < 0 || score > 100 || !Number.isInteger(score)) {
    return res.status(404).json(
      { error: 'Must include a score as an interger between 1 - 100' });
  } else if (!name) {
    return res.status(404).json(
      { error: 'Must include a name' });
  } else if (!course) {
    return res.status(404).json(
      { error: 'Must include a course' });
  }
  const sql = `
    update "grades"
       set "name" = $2,
           "course" = $3,
           "score" = $4
     where "gradeId" = $1
 returning *
    `;
  db.query(sql, values)
    .then(result => {
      const updatedGrade = result.rows[0];
      res.status(200).json(updatedGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const deleteId = Number(req.params.gradeId);
  if (deleteId < 0 || !Number.isInteger(deleteId)) {
    return res.status(300).json(
      { error: 'Must enter an integer greater than 0.' });
  }
  const params = [deleteId];
  const sql = `
   delete from "grades"
         where "gradeId" = $1
     returning *
        `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(400).json(
          { error: `Cannot find a grade with gradeId:${deleteId}` }
        );
      } else {
        res.sendStatus(204);
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
