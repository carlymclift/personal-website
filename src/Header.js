import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header-sec">
      <Link className="nav-home-button" to='/'>HOME</Link>
      <div className="small-nav-sec"> 
        <Link className="nav-button" to="/projects">PROJECTS</Link>
        <Link className="nav-button" to="/contact">CONTACT</Link>
      </div>
    </div>
  )
}

export default Header