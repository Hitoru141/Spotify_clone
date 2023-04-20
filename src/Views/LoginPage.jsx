import React from 'react'
import '../Styles/login.css'
import spotify  from '../assets/spotifyblack.png'

const LoginPage = () => {
return (
    <div className='login-wrapper'>
        <div className='topbar'>
            <img src={spotify} alt=""  className='topbar-logo'/>
        </div>
    <div className='login-content'>
        <p>To continue, log in to Spotify.</p>
    </div>
    </div>
)
}

export default LoginPage