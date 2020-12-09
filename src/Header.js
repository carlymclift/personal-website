import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header-sec">
      <Link className="nav-home-button" to='/'>home</Link>
      <div className="small-nav-sec"> 
        <Link className="nav-button" to="/projects">projects</Link>
        <Link className="nav-button" to="/contact">contact</Link>
      </div>
    </div>
  )
}

export default Header