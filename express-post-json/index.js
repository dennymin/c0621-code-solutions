const express = require('express');
const app = express();
const grades = {
  // 12: {
  //   id: 12,
  //   name: 'Tim Berners-Lee',
  //   course: 'HTML',
  //   score: 95
  // },
  // 47: {
  //   id: 47,
  //   name: 'Brendan Eich',
  //   course: 'JavaScript',
  //   score: 100
  // },
  // 273: {
  //   id: 273,
  //   name: 'Forbes Lindsay',
  //   course: 'JavaScript',
  //   score: 92
  // }
};
let gradesIndex = 1;
app.use('/api/grades', express.json());
app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const props in grades) {
    gradesArray.push(grades[props]);
  }
  res.json(gradesArray);
});
app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = gradesIndex;
  res.status(201).send(newGrade);
  grades[gradesIndex] = newGrade;
  gradesIndex++;
});

app.listen(3000, () => {
});
