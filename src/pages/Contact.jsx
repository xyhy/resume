import React from 'react'

import Container from 'react-bootstrap/Container'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'react-bootstrap/Image'

import Header from '../component/Header'
// import Footer from '../component/Footer'

import picture from '../383155.jpg'

import '../css/Contact.css'

function Contact() {
  return (
    <>
      <Header />
      <Container id='contact-container'>
        <hr id='red-line'></hr>
        <h1 id='contact-title'>C o n t a c t</h1>
        <Image id='contact-img' src={picture} />
        <a className='contact-github' href='https://github.com/xyhy' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon id='github-icon'></GitHubIcon>
          <span id='github-title'>GitHub</span>
        </a>
        <a className='contact-linkedin' href='https://www.linkedin.com/in/yancyen/' target='_blank' rel='noopener noreferrer'>
          <LinkedInIcon id='linkedin-icon'></LinkedInIcon>
          <span id='linkedin-title'>LinkedIn</span>
        </a>
        <div className='contact-email'>
          <EmailIcon id='email-icon'></EmailIcon>
          <span>xyhyjob@gmail.com</span>
        </div>
        <div className='contact-phone'>
          <ContactPhoneIcon id='phone-icon'></ContactPhoneIcon>
          <span>0975-547-231</span>
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default Contact