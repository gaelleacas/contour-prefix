const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send('Hello World from root');
});

app.get('/myroute', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Hello World from route /myroute');
});
app.listen(process.env.PORT || 8080);