import React from 'react'
import './header.css'
import CTA from './CTA'
import CUP from '../../image/cup.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Paramjeet Kour</h1>
        <h5 classname="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={CUP} alt="me"></img>
        </div>
        <a href="#contact" className='scroll__down'>scroll down</a>

      </div>
    </header>
    
  )
}

export default header