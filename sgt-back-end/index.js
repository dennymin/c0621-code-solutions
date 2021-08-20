const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('i am listening');
});
const errorMsg = {
  invalid: 'invalid entry',
  notFound: 'cannot find grade with id ',
  noContent: 'content is a required field',
  unexpected: 'An unexpected error occurred.'
};
const validScore = grade => {
  const validOrNot = parseInt(grade, 10);
  if (Number.isNaN(validOrNot)) {
    return false;
  } else if (validOrNot > 100 || validOrNot < 0) {
    return false;
  } else {
    return true;
  }
};

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  db.query(`
  Select *
    from "grades"`)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(() => {
      res.status(500).json({ error: errorMsg.unexpected });
    });
});

app.post('/api/grades', (req, res) => {
  if (!validScore(req.body.score) || req.body.name === undefined || req.body.course === undefined) {
    res.status(400).json({ error: errorMsg.invalid });
    return;
  }
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(`
  insert into "grades" ("name", "course", "score")
       values ($1, $2, $3)
    returning *;
  `
  , params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(() => {
      res.status(500).json({ error: errorMsg.unexpected });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const queryGradeId = parseInt(req.params.gradeId, 10);
  if (!validScore(req.body.score) || req.body.name === undefined || req.body.course === undefined || Number.isNaN(queryGradeId) || queryGradeId < 0) {
    res.status(400).json({ error: errorMsg.invalid });
    return;
  }
  const params = [req.body.name, req.body.course, req.body.score, queryGradeId];
  db.query(`
  update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;
    `, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({ error: errorMsg.notFound });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(() => {
      res.status(500).json({ error: errorMsg.unexpected });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const queryGradeId = parseInt(req.params.gradeId, 10);
  if (Number.isNaN(queryGradeId) || queryGradeId < 0) {
    res.status(400).json({ error: errorMsg.invalid });
    return;
  }
  db.query(`
  delete from "grades"
    where "gradeId" = $1
  returning *;
  `
  , [queryGradeId])
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({ error: errorMsg.notFound });
      } else {
        res.status(204).json();
      }
    }).catch(() => {
      res.status(500).json({ error: errorMsg.unexpected });
    });
});
