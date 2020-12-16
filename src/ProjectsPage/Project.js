import React from 'react'
import './ProjectsPage.css'
import careerDayPhoto from '../images/career-day.png'
import cozyCocktailsPhoto from '../images/cozy-cocktails.png'
import rancidTomatillosPhoto from '../images/rancid-tomatillos.png'

const Project = ( { displayProjectPopup, selectedProject } ) => {
    let photos = [careerDayPhoto, cozyCocktailsPhoto, rancidTomatillosPhoto]
    let image = photos.find(pic => pic.includes(selectedProject.photo))
    let id = Date.now()
    let techs = selectedProject.technologies.map(tech => {
      id += 1
      return (
        <li key={id}>{tech}</li>
      )
    })
    return (
      <div className="project-box">
        <div className="project-content">
          <span className="close" onClick={displayProjectPopup}>
            &times;
          </span>
          <div className="top-sec-popup" >
            <img className="popup-images" src={image} alt="Screenshot of Career Day App"></img>
          </div>
          <div className='popup-description-sec'>
            <p className='popup-description-paragraph'>{selectedProject.description}</p>
          </div>
          <div className='popup-bottom' >
            <ul>
              {techs}
            </ul>
            <div className='links-sec' >
              <a href={selectedProject.site} target="_blank" className='popup-links' rel="noreferrer" >{selectedProject.title} Site</a><br />
              <a href={selectedProject.gitHub} target="_blank" className='popup-links' rel="noreferrer" >Github Repo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Project