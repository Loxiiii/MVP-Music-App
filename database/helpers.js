
const Favorite = require('./index.js');

const addFav = (title, artist, album, track_id) => {

  Favorite.find({
    track_id: track_id
  }).then((result) => {
    console.log('this is the result: ', result);
    if (result.length === 0 && track_id) {
      console.log('The track does not exist already in the DB')
      Favorite.create({
        track_name: title,
        artist_name: artist,
        album_name: album,
        track_id: track_id
      }, (err) => {
        if (err) {
          console.log(err)
        }
      })

    }
  })
}

const loadFav = () => {
  Favorite.findAll().then((results) => {
    return results;
  })
}

module.exports.addFav = addFav;
module.exports.loadFav = addFav;
