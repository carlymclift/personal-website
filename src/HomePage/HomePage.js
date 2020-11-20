import React from 'react'
import './HomePage.css'
import proPhoto from '../images/proPhoto.png'; // with import

const HomePage = () => {
  return (
    <div className='home-page-sec'>
      <div>
        <h2 className='name-heading' >CARLY<br />CLIFT</h2>
        <p className='sub-title' >Software Engineer</p>
        <p className='personal-description-text' >I'm a driven software engineer, passionate to create a user experience that has an impact. My varied professional background as a manager and business owner has given me the tools to be an efficient problem solver. In my spare time I like to enjoy the beautiful outdoors of Colorado, or spend time on creative projects and hobbies, like oil painting. I'm currently open to work, and looking to be part of a team of diverse developers who also share a passion for people and the impact that tech has on the everyday user. </p>
      </div>
      <img className='head-shot' src={proPhoto} alt='Professional head shot'></img>
    </div>
  )
}

export default HomePage