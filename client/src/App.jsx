import React from 'react';
import ReactDOMClient from 'react-dom/client';
import SearchBar from './Components/SearchBar.jsx'
import TopResults from './Components/TopResults.jsx'
import Lyrics from './Components/Lyrics.jsx'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      results: [],
      favorites: [],
      lyrics: ''
    };
  }

  render () {
    return (
      <div>
        <h1> Lyric.ly </h1>
        <SearchBar />
        <TopResults />
        <Lyrics />
      </div>
    )
  }
}

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<App /> );


