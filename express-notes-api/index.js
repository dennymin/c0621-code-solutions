const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const errorMsg = {
  invalid: 'id must be a positive integer',
  notFound: 'cannot find note with id ',
  noContent: 'content is a required field',
  unexpected: 'An unexpected error occurred.'
};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('i am listening');
});

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const arrData = [];
  for (const keys in data.notes) {
    arrData.push(data.notes[keys]);
  }
  res.status(200).json(arrData);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: errorMsg.invalid });
  } else {
    if (data.notes[id]) {
      res.status(200).json(data.notes[id]);
    } else {
      res.status(404).json({ error: `${errorMsg.notFound} ${id}` });
    }
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: errorMsg.noContent });
  } else if (req.body.content) {
    const newData = {
      id: data.nextId,
      content: req.body.content
    };
    data.notes[data.nextId] = newData;
    const transferData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', transferData, err => {
      if (err) {
        res.status(500).json({ error: errorMsg.unexpected });
      } else {
        res.status(201).json(newData);
        data.nextId++;
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: errorMsg.invalid });
  } else {
    if (data.notes[id]) {
      delete data.notes[id];
      const transferData = JSON.stringify(data, null, 2);
      fs.writeFile('./data.json', transferData, err => {
        if (err) {
          res.send(500).json({ error: errorMsg.unexpected });
        } else {
          res.status(204).json();
        }
      });
    } else {
      res.status(404).json({ error: `${errorMsg.notFound} ${id}` });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: errorMsg.invalid });
  } else if (!req.body.content) {
    res.status(400).json({ error: errorMsg.noContent });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `${errorMsg.notFound} ${id}` });
  } else {
    data.notes[id].content = req.body.content;
    const transferData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', transferData, err => {
      if (err) {
        res.send(500).json({ error: errorMsg.unexpected });
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});
