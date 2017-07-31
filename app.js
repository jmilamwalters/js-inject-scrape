const express = require('express');
const cors = require('cors')
const app = express();

// Enable use of CORS.
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/button', (req, res) => {
  res.json({
    title: 'Finance now!',
    url: 'http://localhost:3000/finance-redirect',
  });
});

app.get('/finance-redirect', (req, res) => {
  res.send('Successfully redirected!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
