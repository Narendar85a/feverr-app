import React from 'react'
import './Home.css'
import Feature from '../../components/feature/Feature'
import Trusted from '../../components/trusted/Trusted'
import Slide from '../../components/slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/project/ProjectCard'
import {cards, projects} from '../../data'

const Home = () => {
  return (
    <div>
        <Feature/>
        <Trusted/>
         <Slide slidesToShow={5} arrowScroll={5}>
           {cards.map((card) =>(
            <CatCard key= {card.id} card={card}/>
           ))}
        </Slide> 
        

        <div className='features'>
          <div className='check'>

            <div className='item1'>

              <h1>A whole world of freelance talent at your fingertips</h1>

              <div className='title'>
                <img src='./img/check.png' alt='' />
                The best for every budget
              </div>
              <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
              <div className='title'>
                <img src='./img/check.png' alt='' />
                Quality work done quickly
              </div>
                <p>Find the right freelancer to begin working on your project within minutes.</p>
                <div className='title'>
                  <img src='./img/check.png' alt='' />
                  Protected payments, every time
                </div>
                <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                <div className='title'>
                  <img src='./img/check.png' alt='' />
                  24/7 support
                </div>
                <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
              </div>

                <div className='item2'>
                <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls />
                </div>
          </div>
        </div>


    <div className='explore'>
      <div className='explore-container'>
        <h1>Explore the marketplace</h1>

        <div className='items'>
        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt='' />
          <span>Graphics & Design</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg" alt='' />
          <span>Digital Marketing</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" alt='' />
          <span>Writing & Translation</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" alt='' />
          <span>Video & Animation</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" alt='' />
          <span>Music & Audio</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg" alt='' />
          <span>Programming & Tech</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt='' />
          <span>Business</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg" alt='' />
          <span>Lifestyle</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg" alt='' />
          <span>Data</span>
        </div>

        <div className='items-item'>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg" alt='' />
          <span>Photography</span>
        </div>

        </div>  
      </div>
    </div>    


   <div className='liverr-business'>
      <div className='business-container'>
        <div className='team'>
          <h1>liverr <i>business</i></h1>
          <h1>A business solution designed for <i>teams</i></h1>
          <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
       
        <div className='sight'>
          <img src='./img/check.png' alt='' />
           Connect to freelancers with proven business experience
        </div>

        <div className='sight'>
          <img src='./img/check.png' alt='' />
          Get matched with the perfect talent by a customer success manager
        </div>

        <div className='sight'>
          <img src='./img/check.png' alt='' />
           Manage teamwork and boost productivity with one powerful workspace
        </div>
        <div className='btn-btn'>
          <button>Explore liver Business</button>
        </div>
        
        </div>

        <div className='team-member'>
           <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png' alt='' />
        </div>
      </div>
    </div>
     
     <Slide slideToShow={4} arrowsScroll={4}>
      {projects.map((card) => (
        <ProjectCard key={card.id} card={card} />
        ))}
     </Slide>
    </div>
  )
}

export default Home