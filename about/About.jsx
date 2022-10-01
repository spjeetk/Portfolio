import React from 'react'
import './about.css'
import OFFICE from '../../image/office.jpg'
import {FaAward} from 'react-icons/fa'
import {BsFolderPlus} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
       <div className="about__me-image">
        <img src={OFFICE}alt="About me" />
       </div>
      </div>

      <div className='about__content'>
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="About__icon"/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>

          <article className="about__card">
            <BsFolderPlus className="About__icon"/>
            <h5>projects</h5>
            <small>2+ Completed </small>
          </article>
        </div>

        <p>
          Development and integration with intuitive problem solving skills.proficient in PYTHON, SQL, REACT,DJANGO.
          Passionate About implementing and launching new projects.Ability to translate business requirements into technical solution.
          Looking to start the as an entry-level software engineer with a reputed firm driven by technology.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section>
  )
}

export default About