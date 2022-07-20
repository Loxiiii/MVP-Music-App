import React from 'react';


const Result = (props) => {
  return (
    <div>
      <div>{props.track.track_name}</div>
      <div>{props.track.artist_name}</div>
      <div>{props.track.album_name}</div>
    </div>
  )
}

export default Result;