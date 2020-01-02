import React, { useState } from 'react'
import Song from './Song'

const SongCollection = (props) => {
  const [selectedSongId, setSelectedSongId] = useState(null)

  const songObjectArray = props.data.songs.map((songObject) => {
    const setSelectedSongIdClosure = (event) => {
      if (songObject.id === selectedSongId) {
        setSelectedSongId(null)
      } else {
        setSelectedSongId(songObject.id)
      }
    }

    let songClass = ""
    if (songObject.id === selectedSongId) {
      songClass += "selected"
    }

    return(
      <Song
        key={songObject.id}
        name={songObject.name}
        artist={songObject.artist}
        songClass={songClass}
        setSelectedSongIdClosure={setSelectedSongIdClosure}
      />
    )
  })

  return(
    <div>
      {songObjectArray}
    </div>
  )
}

export default SongCollection
