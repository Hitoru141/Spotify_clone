import React from 'react';
import '../Styles/cards.css';

const Cards = ({img, title, description}) => {

  return (
    <div className='main-card'>
      <div className='img-container'>
        <img src={img} className='playlist-img'/>
          <div className='play-wrap'>
            <div className='play-button'>
            <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-player-play-filled" 
                width="24"
                height="24" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor"
                fill="none"
                stroke-linecap="round" 
                stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="black"></path>
            </svg>
        </div>
        </div>
      </div>
      <div className='card-details'>
        <p className='p-title'>{title}</p>
        <p className='p-desc'>{description}</p>
      </div>
    </div>
  );
}

export default Cards;
