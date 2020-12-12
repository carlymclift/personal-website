import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className='Contact-page'>
      <h2 className='name-heading' >Contact</h2>
      <div className="contact-info" >
        <a className="contact-text contact-email" href="mailto:carlymclift@gmail.com">carlymclift@gmail.com</a>
        <a className="contact-text" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlyclift/">LinkedIn</a>
        <a className="contact-text" target="_blank" rel="noreferrer" href="https://github.com/carlymclift/">Github</a>
        <a className="contact-text" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlyclift/">Resume</a>
      </div>
    </div>
  )
}

export default ContactPage