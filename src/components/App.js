import React from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
  return (
    <div className="app row callout">
      <h2 className="title">React Music Player</h2>
      <div className="columns small-6">
        <h3>Playlists</h3>
        <PlaylistCollection
          data={props.data}
        />
      </div>
      <div className="columns small-6">
        <h3>Songs</h3>
        <SongCollection
          data={props.data}
        />
      </div>
    </div>
  );
}

export default App
