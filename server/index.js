const express = require('express');
const app = express();
const port = 1234;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/hello', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log('Successfully connected at port ' + port);
})