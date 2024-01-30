const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bmi.html'));
});

app.post('/calculate', (req, res) => {
  const { weight, height, age } = req.body;
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  res.redirect(`/result?weight=${weight}&height=${height}&age=${age}&bmi=${bmi}`);
});

app.get('/notfound', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'notfound.html'));
});

app.get('/result', (req, res) => {
  const { weight, height, age, bmi } = req.query;
  res.sendFile(path.join(__dirname, 'public', 'result.html'));
});

app.get('*', (req, res) => {
  res.redirect('/notfound');
});

app.listen(3000, () => {
  console.log(`Server is running `);
});
