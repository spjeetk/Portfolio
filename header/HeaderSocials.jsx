import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/paramjeetkour-hardip-singh-45154b1a2/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/spjeetk" target="_blank" rel="noreferrer"><BsGithub/></a>
       
    </div>
  )
}

export default HeaderSocials