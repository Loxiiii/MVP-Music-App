import React from 'react';

class Favorites extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      favorites: []
    };
    this.load = this.load.bind(this);
  }

  load () {

  }



  render () {
    return (
      <div>
        <div>Hello this is the saved list!</div>
      </div>
    )
  }

}

export default Favorites;