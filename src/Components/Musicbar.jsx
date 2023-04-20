import React from 'react'
import '../Styles/musicbar.css'
import posty from '../assets/posty.jpeg'

const Musicbar = () => {
return ( 
<>
<div className="bottom-bar">
    <div className="bottom-bar--left-col">
        <div className="bottom-bar--left-col--song">
            <div className="bottom-bar--left-col--song--img">
                <div className="bottom-bar--left-col--song--img--pull-up">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 15 12 9 18 15" />
</svg>
                </div>
                <img src={posty} alt=""/>
            </div>
            <div className="bottom-bar--left-col--song--details">
                <div className="bottom-bar--left-col--song--details--wrapper">
                    <a href="#" className="bottom-bar--left-col--song--details--title">Deja Vu</a>
                </div>
                <div class="bottom-bar--left-col--song--details--wrapper">
                    <a href="#" className="bottom-bar--left-col--song--details--artist">Post Malone</a>
                </div>
            </div>
        </div>
        <div className="bottom-bar--left-col--actions">
            <button className="bottom-bar--left-col--actions--favorite">
                <i className='lni lni-heart'></i>
            </button>
            <button className="bottom-bar--left-col--actions--pip">
                <i className="pip-icon"></i>
            </button>
        </div>
    </div>
</div>
</>
)
}

export default Musicbar