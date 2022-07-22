const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp')
  .then(() => {
    console.log('Connection with the database succesful');
  });

let favoriteSchema = mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  lyrics: String
});

let Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;

