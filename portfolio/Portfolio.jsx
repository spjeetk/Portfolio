import React from 'react'
import './portfolio.css'
import IMG1 from '../../image/portfolio.jpg'
import IMG2 from '../../image/code.jpg'
import IMG3 from '../../image/cup.jpg'

const data = [
  {
    id: 1,
    image : IMG1,
    title : "Portfolio",
    github : 'https://github.com',
    demo : 'https://github.com'
  },

  {
    id: 2,
    image : IMG2,
    title : "Social media",
    github : 'https://github.com',
    demo : 'https://github.com'

  },

  {
    id: 3,
    image : IMG3,
    title : "Notes app",
    github : 'https://github.com',
    demo : 'https://github.com'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className='container portfolio__container'>
        {
        data.map(({id, image, title, github, demo}) =>{
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href ={github} className="btn" target='__blank'>Github</a> 
                <a href ={demo} className="btn" target='__blank'>Live demo</a>            
              </div>
            </article>
          )
        })
       } 

          
      </div>
    </section>
  )
}

export default Portfolio