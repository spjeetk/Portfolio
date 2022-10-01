/* eslint-disable no-unused-vars */
import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from 'react-icons/ai'
import{ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rw4u6t9', 'template_a1ssipr', form.current, 'oSTwMQUuzLGOfYiAo')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>koursp848@gmail.com</h5>
            <a href='mailto:koursp848@gmail.com'target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>Message</h4>
            <h5>linkedin</h5>
            <a href='https://in.linkedin.com/'target='_blank' rel="noreferrer" >Send a message</a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=+917420840994"target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
           {/* END OF CONTACT OPTION */}
          <form ref={form} onSubmit= {sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn priamry'>Send Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contact