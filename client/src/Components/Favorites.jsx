import React from 'react';
import axios from 'axios';
import Result from './Result.jsx'

class Favorites extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      favorites: []
    };
    this.load = this.load.bind(this);
  }

  load () {
    setInterval(() => {
      axios.get('/favs').then((favs) => {

        console.log('these are the favorites: ', favs);
        this.setState({
          favorites: favs.data
        })

      })
    }, 2000)

    // axios.get('/favs').then((favs) => {

    //   console.log('these are the favorites: ', favs);
    //   this.setState({
    //     favorites: favs.data
    //   })

    // })


  }

  componentDidMount() {
    this.load();
  }

  render () {
    return (
      <div className='favorites'>
        {this.state.favorites.map((fav) => {
          return (
            <Result track={fav} onSelect={this.props.onSelect}/>
          )
        })}
      </div>
    )
  }

}

export default Favorites;