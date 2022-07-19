import React from 'react';

class TopResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      top:[]
    };
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