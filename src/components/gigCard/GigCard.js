import React from 'react'
import { Link } from 'react-router-dom'
import './Gigcard.css'

const GigCard = ({item}) => {
  return (
    <Link to='./gig' className='gigCard-link'>
    <div className='gigCard'>
         <img src={item.img} alt='' />
        
        <div className='gigCard-info'>
            <div className='card-pp'>
                <img src={item.pp} alt='' />
                <span>{item.username}</span>
            </div>

            <p>{item.desc}</p>

            <div className='gigCard-star'>
             <img src='./img/star.png' alt='' />
             <span>{item.star}</span>
            </div>
        </div>

        {/* <hr/> */}
        <div className='gigCard-details'>
            <img src='./img/heart.png' alt='' />

          <div className='gigCard-price'>
            <span>STARTING AT</span>
            <h2>${item.price}<sup>99</sup></h2>
          </div>
        </div>
    </div>

    </Link>
  )
}

export default GigCard