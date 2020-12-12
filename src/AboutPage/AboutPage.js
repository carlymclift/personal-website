import React from 'react'
import './AboutPage.css'
import proPhoto from '../images/proPhoto.png'

const AboutPage = () => {
  return (
    <div className='home-page-sec'>
      <div>
        <h2 className='name-heading' >Carly<br />Clift</h2>
        <p className='sub-title' >Software Engineer</p>
        <p className='personal-description-text' >I’m a Colorado native, software engineer, fitness enthusiast and artist. In my spare time you’ll find me enjoying the beautiful outdoors, spending time with my fur-babies, or maybe working on my next painting. <br /><br />
          At the age of 22 I became a Medical Esthetician, and started a business in South Denver. I worked as a skincare specialist and a Master Permanent Makeup and Microblading technician. My business was my passion for a number of years, because I love helping people and making an impact. My business grew steadily but my desire to be involved in the tech industry was also growing. I knew I could focus my skills and my varied professional background to develop software that could impact and help even more people<br /><br />
          I made a big shift when I decided to attended Turing School of Software and Design. Where I received 7 months and 1600+ hours of intensive training and industry experience. Through this time I found where my passion really lie. I grew as a person and a professional through the experience. Now I’m looking to become part of a team who also share a passion for people and the impact that tech has on the everyday user. </p>
      </div>
      <img className='head-shot' src={proPhoto} alt='Professional head shot'></img>
    </div>
  )
}

export default AboutPage