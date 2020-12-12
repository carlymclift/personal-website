import React from 'react'
import './WelcomePage.css'
import { Link } from 'react-router-dom'
import mountPic from '../images/mount.jpg'

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-sec'>
        <div className='floating-text'>
          <h2 className='welcome-text' >Welcome</h2>
          <h2 className='smaller-text'>get to know me <Link to='/about'>here</Link></h2>
        </div>
        <img className='mountain-pic' src={mountPic} alt='Professional head shot'></img>
      </div>
    </div>
  )
}

export default WelcomePage