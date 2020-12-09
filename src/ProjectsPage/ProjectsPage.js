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
        <p className="project-page-paragraph" >My technical experience was developed with agile methodologies, a strong sense of OOP, and TDD. I have experience working on solo and team projects. The ones featured on the right are all team projects that I did at my time at Turing</p>
      </div>
      <div className='projects-sec' >
        {/* <h2 className="project-name" >Explore Projects:</h2> */}
        <div className="project" onClick={() => displayProjectPopup('careerDay')} >
        <img className="project-images" src={careerDayPhoto} alt="Screenshot of Career Day App"></img>
          {/* <h2 className="project-name">Career Day</h2> */}
        </div>
        <div className="project" onClick={() => displayProjectPopup('cozyCocktails')} >
        <img className="project-images" src={cozyCocktailsPhoto} alt="Screenshot of Cozy Cocktails App"></img>
          {/* <h2 className="project-name">Cozy Cocktails</h2> */}
        </div>
        <div className="project" onClick={() => displayProjectPopup('rancidTomatillos')} >
        <img className="project-images" src={rancidTomatillosPhoto} alt="Screenshot of Rancid Tomatillos App"></img>
          {/* <h2 className="project-name">Rancid Tomatillos</h2> */}
        </div>
      </div>
      {showProject ? <Project displayProjectPopup={displayProjectPopup} selectedProject={selectedProject} /> : null}
    </div>
  )
}

export default ProjectsPage