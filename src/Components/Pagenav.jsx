import React from 'react'
import '../Styles/main.css'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



const Pagenav = () => {
  return (
    <div className='pagenav'>
        <div className='btn-wrapper'>
    <Tooltip title="Go back" arrow>
        <div className='button-nav'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            class="icon icon-tabler icon-tabler-chevron-left" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="white" fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none">
        </path>
        <path d="M15 6l-6 6l6 6">
        </path>
        </svg>
        </div>
        </Tooltip>
        <Tooltip title="Go forward" arrow>
        <div className='button-nav'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
        </svg>
        </div>
        </Tooltip>
        </div>
    <p className='p-signup'> Sign up</p>
      <div className='login-btn'>Log In</div>
    </div>
   
  )
}

export default Pagenav