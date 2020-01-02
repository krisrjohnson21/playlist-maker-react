import React from 'react'

const Playlist = (props) => {

  return(
    <div className={props.playlistClass} onClick={props.setSelectedPlaylistIdClosure}>
      {props.name}
    </div>
  )
}

export default Playlist
