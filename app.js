const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/button', (req, res) => {
  res.json({
    title: 'Finance now!',
    url: 'http://localhost/finance-redirect',
  });
});

app.get('/cors', (req, res) => {
  res.send('CORS requests now enabled for all origins!');
});

app.get('/finance-redirect', (req, res) => {
  res.send('Successfully redirected!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
