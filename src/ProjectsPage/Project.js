import React from 'react'
import './ProjectsPage.css'
import careerDayPhoto from '../images/career-day.png'
import cozyCocktailsPhoto from '../images/cozy-cocktails.png'
import rancidTomatillosPhoto from '../images/rancid-tomatillos.png'

const Project = ( { displayProjectPopup, selectedProject } ) => {
    let photos = [careerDayPhoto, cozyCocktailsPhoto, rancidTomatillosPhoto]
    let image = photos.find(pic => pic.includes(selectedProject.photo))
    let techs = selectedProject.technologies.map(tech => {
      return (
        <li key={selectedProject.id}>{tech}</li>
      )
    })
    return (
      <div className="project-box">
        <div className="project-content">
          <span className="close" role="close-pop-up" onClick={displayProjectPopup}>
            &times;
          </span>
          <div className="top-sec-popup" >
            {/* <h2>{selectedProject.title}</h2> */}
            <img className="popup-images" src={image} alt="Screenshot of Career Day App"></img>
          </div>
          <p>{selectedProject.description}</p>
        <ul>
            {techs}
        </ul>
        <a href={selectedProject.site} target="_blank" rel="noreferrer" >{selectedProject.title} Site</a><br />
        <a href={selectedProject.gitHub} target="_blank" rel="noreferrer" >Project Repo</a>
        </div>
      </div>
    )
  }

export default Project