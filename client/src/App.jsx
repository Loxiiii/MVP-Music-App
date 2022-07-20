import React from 'react';
import ReactDOMClient from 'react-dom/client';
import SearchBar from './Components/SearchBar.jsx'
import TopResults from './Components/TopResults.jsx'
import Lyrics from './Components/Lyrics.jsx'
import axios from 'axios';
import MUSIC_MATCH_KEY from '../../config.js'

const searchTracksURL = 'http://api.musixmatch.com/ws/1.1/track.search?'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query:'',
      results: [],
      favorites: [],
      lyrics: ''
    };
    this.search = this.search.bind(this);
  }

  search (q) {

    console.log(this)
    // this.setState({
    //   query: q
    // }, () => {
    //   axios({
    //     method: 'get',
    //     url: searchTracksURL,
    //     params: {
    //       q_track: q,
    //       page_size: 6,
    //       apikey:MUSIC_MATCH_KEY
    //     }
    //   })

    // })

    // this.setState({
    //     query: q
    //   })
  }

  render () {
    return (
      <div>
        <h1> Lyric.ly </h1>
        <SearchBar onSearch={this.search}/>
        <TopResults />
        <Lyrics />
      </div>
    )
  }
}

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<App /> );


