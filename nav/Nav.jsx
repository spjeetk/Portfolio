/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillBook} from 'react-icons/ai'

import {BiMessageRounded} from 'react-icons/bi'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')  
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserAlt/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><AiFillBook/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRounded/></a>
    </nav>
  )
}

export default Nav