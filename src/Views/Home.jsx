import React from 'react'
import SidebarNav from '../Components/SidebarNav'
import Pagenav from '../Components/Pagenav'
import '../Styles/home.css'
import PlaylistCards from '../Components/PlaylistCards'
import Musicbar from '../Components/Musicbar'

const Home = () => {
  return (
    <div className='mainwrapper'>
        <Pagenav/>
        <SidebarNav/>
       <div className='playlist-wrap'>
        <PlaylistCards/>
       </div>
        <Musicbar/>
    </div>
  )
}

export default Home