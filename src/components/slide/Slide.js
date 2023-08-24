import React from 'react'
import './Slide.css'
import Slider from 'infinite-react-carousel'


const Slide = ({children, slidesToShow, arrowScroll}) => {
  return (
    <div className='slide'>
    <div className='slide-container'>
       <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
       {children}
    </Slider>
    </div>
    </div>
  )
}

export default Slide