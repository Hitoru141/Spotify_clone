import React from 'react'
import '../Styles/PlaylistCards.css'
import Cards from './Cards'
import piano from '../assets/piano.jpeg'
import posty from '../assets/posty.jpeg'

const PlaylistCards = () => {
  return (
    <div className='Mainwrapper'>
        <div className='Content'>
            <h2>Focus</h2>
                <div className='card-wrapper'>
                {[...Array(8)].map((_, index) => (
                    <Cards img={piano}
                    title="Peaceful Piano"
                    description="Relax and indulge with beautiful piano pieces"/>
                ))}
                </div>
            <h2>Spotify Playlists</h2>
                <div className='card-wrapper'>
                {[...Array(8)].map((_, index) => (
                    <Cards
                    img={posty}
                    title={`Playlist ${index + 1}`}
                    description={`Description for Playlist ${index + 1}`}
                    />
                ))}
          </div>   
      </div> 
  </div>
  )
}

export default PlaylistCards