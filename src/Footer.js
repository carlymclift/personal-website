import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer" >
      <Link>Projects</Link>
      <Link>LinkedIn</Link>
      <Link>Email</Link>
    </footer>
  )
}

export default Footer