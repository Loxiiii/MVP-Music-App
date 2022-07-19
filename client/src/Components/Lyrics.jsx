import React from 'react';

class Lyrics extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lyrics:[]
    };
  }

  render () {
    return (
      <div>
        <h4> Lyrics: </h4>
      </div>
    )
  }
}

export default Lyrics;