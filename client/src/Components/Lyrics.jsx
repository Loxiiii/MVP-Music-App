import React from 'react';

class Lyrics extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lyrics:'',
      info: '',
    };
    this.save = this.save.bind(this);
  }

  save (q) {

  }

  render () {
    return (
      <div>
        <h3> Lyrics: </h3>
        <h5>{this.state.info.track_name}</h5>
        <h6>{this.state.info.artist_name}</h6>
        <button>Save</button>
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