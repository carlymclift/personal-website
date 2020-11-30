import React from 'react'
import './ProjectsPage.css'
import careerDayPhoto from '../images/career-day.png'
import cozyCocktailsPhoto from '../images/cozy-cocktails.png'
import exCorpsePhoto from '../images/ex-co.png'
import rancidTomatillosPhoto from '../images/rancid-tomatillos.png'

const ProjectsPage = () => {
  return (
    <div className='project-page'>
      <h2 className='name-heading' >Projects</h2>
      <div className='projects-sec' >
        <div className="project" >
          <img className="project-images" src={careerDayPhoto} alt="Screenshot of Career Day App"></img>
          <h2>Career Day</h2>
        </div>
        <div className="project" >
          <img className="project-images" src={cozyCocktailsPhoto} alt="Screenshot of Cozy Cocktails App"></img>
          <h2>Cozy Cocktails</h2>
        </div>
        <div className="project" >
          <img className="project-images" src={rancidTomatillosPhoto} alt="Screenshot of Rancid Tomatillos App"></img>
          <h2>Rancid Tomatillos</h2>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage