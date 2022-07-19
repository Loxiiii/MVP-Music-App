import React from 'react';
import axios from 'axios';
import MUSIC_MATCH_KEY from '../../../config.js'

const topUsURL =  'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1'

class TopResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      top:[]
    };
  }

  componentDidMount() {
    console.log('This is the key: ', MUSIC_MATCH_KEY);
    axios.get(topUsURL + MUSIC_MATCH_KEY)
    .then((result) => {
      console.log(result.data);
    }).catch((e) => {
      console.log(e);
    })
  }

  render () {
    return (
      <div>
        <h4> Top Results: </h4>
      </div>
    )
  }
}

export default TopResults;