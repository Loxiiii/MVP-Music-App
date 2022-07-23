import React from 'react';



const Result = (props) => {
  var track = props.track;
  return (
    // <div onClick={props.onSelect(props.track.track_name)}>
    <div className='result' onClick={() => { props.onSelect(track) }}>
      <div>{props.track.track_name}</div>
      <div>{props.track.artist_name}</div>
      <div>{props.track.album_name}</div>
    </div>
  )
}

export default Result;