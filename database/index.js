const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp')
  .then(() => {
    console.log('Connection with the database succesful');
  });

let favoriteSchema = mongoose.Schema({
  track_name: String,
  artist_name: String,
  album_name: String,
  track_id: Number,
  // lyrics: String
});

let Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;

