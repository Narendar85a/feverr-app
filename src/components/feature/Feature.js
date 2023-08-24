import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <div className='feature'>
    <div className='container'>
         <div className='text'>
            <h1>Find the perfect freelancer service for your business</h1>
        </div>
        <div className='search'>
         <div className='searchInput'>
            <img src='./img/search.png' alt=''/>
            <input type="text" placeholder='Try "building mobil app"'/>
         </div>
         <button >search</button>
        </div>
        <div className='popular'>
            <span>Popular:</span>
            <button>WebDesign</button>
            <button>WebPress</button>
            <button>LogoDesign</button>
            <button>AiService</button>
        </div>
    </div>
       
    </div>
  )
}

export default Feature