
const Favorite = require('./index.js');

const addFav = (title, artist, album) => {

  Favorite.create({
    title: title,
    artist: artist,
    album: album,
  }, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

const loadFav = () => {
  console.log ('These are the loaded favs: ', Favorite.find());
}

module.exports.addFav = addFav;
module.exports.loadFav = addFav;
