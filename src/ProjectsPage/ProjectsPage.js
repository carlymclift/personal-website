import React, { useState } from 'react'
import './ProjectsPage.css'
import Project from './Project'
import careerDayPhoto from '../images/career-day.png'
import cozyCocktailsPhoto from '../images/cozy-cocktails.png'
import rancidTomatillosPhoto from '../images/rancid-tomatillos.png'
import projectData from '../projectData'

const ProjectsPage = () => {
  const [showProject, setShowProject] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  const displayProjectPopup = (project) => {
    setSelectedProject(projectData[project])
    !showProject ? setShowProject(true) : setShowProject(false)
  }

  return (
    <div className='project-page'>
      <div>
        <h2 className='name-heading' >Projects</h2>
        <p className="project-page-paragraph" >Here, are some of the many projects I have worked on. 
          All of which were developed with agile methodologies. I learned through an object oriented 
          programming approach, and test driven development.<br />
          I worked independently, with teams, and with pairs on projects each with a different 
          deliverable and technology to focus on.</p>
      </div>
      <div className='projects-sec'>
        <div className="project" key={1} onClick={() => displayProjectPopup('careerDay')} >
        <img className="project-images" src={careerDayPhoto} alt="Screenshot of Career Day App"></img>
        </div>
        <div className="project" key={2} onClick={() => displayProjectPopup('cozyCocktails')} >
        <img className="project-images" src={cozyCocktailsPhoto} alt="Screenshot of Cozy Cocktails App"></img>
        </div>
        <div className="project" key={3} onClick={() => displayProjectPopup('rancidTomatillos')} >
        <img className="project-images" src={rancidTomatillosPhoto} alt="Screenshot of Rancid Tomatillos App"></img>
        </div>
      </div>
      {showProject ? <Project displayProjectPopup={displayProjectPopup} selectedProject={selectedProject} /> : null}
    </div>
  )
}

export default ProjectsPage