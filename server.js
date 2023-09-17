const express = require('express');
const app = express();
const port = 3000;


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


app.get('/hello', (req, res) => {
  res.send('Hello world from Express.js server!');
});

app.get('/budget', (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`Example app is listening on http://localhost:${port}`);
});

// static
app.use('/', express.static('public'));

// app.get('/public')