import React from 'react';
import axios from 'axios';

class Lyrics extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lyrics:'',
      info: '',
    };
    this.save = this.save.bind(this);
  }

  save () {

    var options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios.post('/save', {
      name: this.state.info.track_name,
      artist: this.state.info.artist_name,
      album: this.state.info.album_name,
      track_id: this.state.info.track_id,
      lyrics: this.state.lyrics
    }, options).then((res) => {
      console.log('The post request to /save was succesful, and this is the response: ', res);
    }).catch((err) => {
      console.log(err)
    }).then(() => {

    })

    // axios.post('/save', {
    //   name: this.state.info.track_name,
    //   artist: this.state.info.artist_name,
    //   album: this.state.info.album_name,
    //   lyrics: this.state.lyrics
    // }, options).then((res) => {
    //   console.log('The post request to /save was succesful, and this is the response: ', res);
    // }).catch((err) => {
    //   console.log(err)
    // })

  }

  render () {
    return (
      <div>
        <h3> Lyrics: </h3>
        <h5>{this.state.info.track_name}</h5>
        <h6>{this.state.info.artist_name}</h6>
        <button onClick={this.save}>Save</button>
        <div>{this.state.lyrics}</div>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lyric !== this.props.lyric) {
      this.setState({
        lyrics: this.props.lyric,
        info: this.props.info
      })
    }
  }
}

export default Lyrics;