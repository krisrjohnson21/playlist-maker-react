import React from 'react'

const Song = (props) => {
  let song = `${props.name} - ${props.artist}`

  return(
    <div className={props.songClass} onClick={props.setSelectedSongIdClosure}>
      {song}
    </div>
  )
}

export default Song
