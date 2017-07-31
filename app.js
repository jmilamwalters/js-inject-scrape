const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();

// Enable use of CORS.
app.use(cors());

// Specify directory for storage of client-side app files.
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/public/:name', (req, res) => {
  res.sendFile( path.join(__dirname, 'public', req.params.name));
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
