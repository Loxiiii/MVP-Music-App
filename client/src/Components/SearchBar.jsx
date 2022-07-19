import React from 'react';


const SearchBar = () => {
  return (
    <div>
      <form>
        <label>Title: <input></input></label>
        <br></br>
        <label>Artist: <input></input></label>
        <br></br>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  )
}

export default SearchBar;