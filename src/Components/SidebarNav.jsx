import React from 'react'
import '../Styles/main.css'
import spotify from '../assets/spotlogo.png'



const SidebarNav = () => {
  return (
    <div className='sidebar-mainwrapper'>
    <img src={spotify} alt="" className='spotlogo' />
    <div className='menu-list'>
        <p>Home</p>
        <p>Search</p>
        <p>Your Library</p>
    </div>

    <div className='menu-list'>
        <p>Create Playlist</p>
        <p>Liked Songs</p>
        
    </div>
    
    </div>
  )
}

export default SidebarNav