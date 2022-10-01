import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5> My Experience</h5>
      <h2>Skills I Have </h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend skills</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Intermediante</small>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediante</small>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Intermediante</small>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>REACT</h4>
              <small className='text-light'>Intermediante</small>
            </article>
            
            
            

          </div>

        </div>
        <div className='experience__backend'>
        <h3>Backend skills</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <h4>PYTHON</h4>
              <small className='text-light'>Intermediante</small>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <h4>DJANGO</h4>
              <small className='text-light'>Intermediante</small>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <h4>SQL</h4>
              <small className='text-light'>Intermediante</small>
            </article>
           
            
            
            

          </div>
          
          
        </div>
      </div>

    </section>
     

  )
}

export default Experience