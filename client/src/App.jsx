import React from 'react';
import ReactDOMClient from 'react-dom/client';
import SearchBar from './Components/SearchBar.jsx'
import TopResults from './Components/TopResults.jsx'
import Lyrics from './Components/Lyrics.jsx'
import axios from 'axios';
import MUSIC_MATCH_KEY from '../../config.js'

const searchTracksURL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?'
const selectTrackURL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 0,
      query:'',
      results: [],
      favorites: [],
      lyrics: ''
    };
    this.search = this.search.bind(this);
    this.select = this.select.bind(this);
  }

  select(q) {
    // e.preventDefault();
    console.log(q);
    this.setState({
      selected: q
    }, () => {
      axios({
        method: 'get',
        url: selectTrackURL,
        params: {
          track_id:this.state.selected.track_id,
          apikey:MUSIC_MATCH_KEY
        }
      }).then((lyric) => {
        console.log('These are the lyrics: ', lyric.data.message.body.lyrics.lyrics_body);
        this.setState({
          lyrics: lyric.data.message.body.lyrics.lyrics_body
        })
      })
    })
  }

  search (e, q) {
    e.preventDefault();
    console.log(q);
    this.setState({
      query: q
    }, () => {
      axios({
        method: 'get',
        url: searchTracksURL,
        params: {
          q_track: q,
          f_has_lyrics: true,
          page_size: 6,
          apikey:MUSIC_MATCH_KEY
        }
      }).then((results) => {
        console.log(results.data.message.body.track_list);
        this.setState({
          results: results.data.message.body.track_list
        })
      }).catch((e) => {
        console.log(e);
      })

    });

    // this.setState({
    //     query: q
    //   })
  }

  render () {
    return (
      <div>
        <h1> Lyric.ly </h1>
        <SearchBar onSearch={this.search}/>
        <div>
          <TopResults results={this.state.results} onSelect={this.select}/>
        </div>
        <Lyrics lyric={this.state.lyrics} info={this.state.selected} />
      </div>
    )
  }
}

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<App /> );


