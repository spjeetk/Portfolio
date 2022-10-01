import React from 'react'
import CV from '../../image/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV}Download className='btn'>My Resume</a>
      <a href="#contact" className='btn'>Let's Talk</a>

    </div>
  )
}

export default CTA
