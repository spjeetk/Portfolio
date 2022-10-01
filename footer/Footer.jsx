/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import{GrTwitter} from 'react-icons/gr'
import{SiGmail} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <ul className='parmalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/paramjeetkour-hardip-singh-45154b1a2/'><BsLinkedin /></a>
        <a href="https://twitter.com/paramje25628638"><GrTwitter /></a>
        <a href="https://mail.google.com/mail/u/0/#drafts?compose=new"><SiGmail /></a>
      </div>

      <div className='footer__copyright'>
        <small> &copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer