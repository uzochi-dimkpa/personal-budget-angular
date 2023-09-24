// Budget API
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
var data = require('./data.json');



// serving static content
// app.use('/', express.static('public'));
app.use(cors());

const budget = {
  myBudget: [
    {
      title: 'Eat out',
      cost: 30
    },
    {
      title: 'Rent',
      cost: 350
    },
    {
      title: 'Groceries',
      cost: 90
    },
    {
      title: 'Laundry',
      cost: 45
    }
  ]
};


// serving static content
/*
app.get('/hello', (req, res) => {
  res.send('Hello world from Express.js server!');
});
/**/

/**/
app.get('/budget', (req, res) => {
  // res.json(budget);
  res.json(data);
});
/**/

/*
app.get('/budget', (req, res) => {
  fs.readFile('./data.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});
/**/

app.listen(port, () => {
  console.log(`Example API is listening on http://localhost:${port}`);
});

// app.get('/public')