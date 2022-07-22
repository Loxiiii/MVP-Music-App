const express = require('express');
const app = express();
const port = 1234;
const path = require('path');
const addFav = require('../database/helpers.js');
const loadFav = require('../database/helpers.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/save', (req, res) => {
  // console.log('This is the the post request to /save: ', req);
  // console.log('This is the the post request to /save: ', res)
  console.log(req.body)
  addFav.addFav(req.body.name, req.body.artist, req.body.album)
  loadFav.loadFav();

  res.end();
})

app.listen(port, () => {
  console.log('Successfully connected at port ' + port);
})