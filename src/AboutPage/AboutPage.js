import React from 'react'
import './AboutPage.css'
import { Link } from 'react-router-dom'
import proPhoto from '../images/proPhoto.png'

const AboutPage = () => {
  return (
    <div className='home-page-sec'>
      <div>
        <h2 className='name-heading' >Carly<br />Clift</h2>
        <p className='sub-title' >Software Engineer</p>
        <p className='personal-description-text' >
          Software development is my passion because of the seemingly limitless 
          possibilities it holds. I believe the ability create and renew
          something that can benefit everyday users is one of the many things 
          that drew me to this field.
          Outside of software development I'm an artist 
          who thrives on the freedom of creativity and the parallel limitlessness of art.
           <br /><br />
          At the age of 22 I became a Medical Esthetician, and started a business 
          in South Denver. I worked as a skincare specialist and a Master Permanent 
          Makeup and Microblading technician. It was a dream to be able to use my skills to help people,
          whilst being able to stay creative. 
          As my business grew, my desire to be involved in the tech 
          industry was also growing. I knew I could focus my skills and my varied 
          professional background into developing software that could make an impact.
          <br /><br />
          I made a big shift when I decided to immerse myself into 7 months of intensive 
          technical training at Turing School of Software and Design. Through this
          experience I found where my passion really lie.
          Now I’m looking to become part of a team that also shares a 
          passion for people and the impact that tech has on the everyday user.
          <br /><br />
          View the projects I've worked on <Link to='/projects' className="page-text-links">here ➡</Link>
          </p>
      </div>
      <img className='head-shot' src={proPhoto} alt='Professional head shot'></img>
    </div>
  )
}

export default AboutPage