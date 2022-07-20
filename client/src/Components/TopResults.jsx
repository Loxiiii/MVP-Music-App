import React from 'react';
import axios from 'axios';
import MUSIC_MATCH_KEY from '../../../config.js'
import Result from './Result.jsx';

const topUsURL =  'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=6&country=us&f_has_lyrics=1&apikey='

class TopResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      top:[]
    };
  }

  componentDidMount() {
    console.log('This is the key: ', MUSIC_MATCH_KEY);
    axios.get(topUsURL + MUSIC_MATCH_KEY).then((result) => {
      // render() {
      //   <div>
      //     {result.data.message.body.track_list.map((track) => {
      //       return (
      //         <div>track.track_name</div>
      //       )
      //     })}
      //   </div>
      // }
      console.log(result.data.message.body.track_list);
      this.setState({
        top: result.data.message.body.track_list
      });
    }).catch((e) => {
      console.log(e);
    })
  }

  render () {
    return (
      <div>
        {
          this.state.top.map((num, index) => {
            return (
              <div>
                <div>{index+1}</div>
                <Result track={num.track} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TopResults;

// https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=e30b0b6f5ac2fde14681627305f7bf2b
//