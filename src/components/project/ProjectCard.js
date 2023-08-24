import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({card}) => {
  return (
    <div className='projectCard'>
    <img src={card.img} alt='' />
      <div className='project'>
      <img src={card.pp} alt="" />
      <div className='project-user'>
      <h2>{card.cat}</h2>
      <span>{card.username}</span>
      </div>
      </div>
    </div>
  )
}

export default ProjectCard