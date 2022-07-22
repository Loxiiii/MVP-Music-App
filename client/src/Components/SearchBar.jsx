import React from 'react';



class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query:''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      query: e.target.value
    })
  }

  render () {

    return (
      <div>
        {/* <form>
          <label>Song: <input></input></label>
          <br></br>
          <<button type="button" onClick={props.onSearch}>Search</button>>
        </form> */}

        {/* <form onSubmit={this.props.onSearch(this.state.query)}> */}
        <form>
          <label>
            Name:
            <input type="text" value ={this.state.query} onChange={this.onChange}/>
          </label>
          {/* <input type="button" value="Submit"/> */}
          <button type="button" onClick={(e) => (
            this.props.onSearch(e, this.state.query))}>Search</button>
        </form>
      </div>
    )
  }
}



export default SearchBar;