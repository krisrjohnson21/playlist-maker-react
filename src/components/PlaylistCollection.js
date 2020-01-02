import React, { useState } from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)

  const playlistObjectArray = props.data.playlists.map((playlistObject) => {
    const setSelectedPlaylistIdClosure = (event) => {
      if (playlistObject.id === selectedPlaylistId) {
        setSelectedPlaylistId(null)
      } else {
        setSelectedPlaylistId(playlistObject.id)
      }
    }

    let playlistClass = ""
    if (playlistObject.id === selectedPlaylistId) {
      playlistClass += "selected"
    }

    return(
      <Playlist
        key={playlistObject.id}
        name={playlistObject.name}
        playlistClass={playlistClass}
        setSelectedPlaylistIdClosure={setSelectedPlaylistIdClosure}
      />
    )
  })

  return(
    <div>
      {playlistObjectArray}
    </div>
  )
}

export default PlaylistCollection
