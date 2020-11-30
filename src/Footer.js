import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer" >
      <Link className="footer-nav-button" to="/projects">Projects</Link>
      <a className="footer-nav-button" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlyclift/">LinkedIn</a>
      <p><a className="footer-nav-button" href="mailto:carlymclift@gmail.com">Email</a></p>
    </footer>
  )
}

export default Footer