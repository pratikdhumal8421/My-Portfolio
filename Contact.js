import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine}  from 'react-icons/ri'
import {BsWhatsapp}  from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const  Contact=()=> {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6n1kt2s', 'template_ppzj6h8', form.current, 'uwBCaoKXfUiqQZXqP')

       e.target.reset();
      
  };

  return (
  
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
      
        <article className="contact__option">
         <MdOutlineEmail size={25}className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>My Personal Mail</h5>
          <a href="mailto:pbdhumal8421@gmail.com" target="_blank" rel="noreferrer">Send a Message </a>
        </article>

        <article className="contact__option">
        <RiMessengerLine   size={25}className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Tutorials me</h5>
          <a href="https://www.facebook.com/profile.php?id=100009155728549" target="_blank" rel="noreferrer">Send a Message </a>
        </article>

        <article className="contact__option">
         <BsWhatsapp   size={25}className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>Ping Me Personally</h5>
          <a href="https://wa.me/8600585673" target="_blank" rel="noreferrer">Send a Message </a>
        </article>
        </div>
         
      {/* End of Contact Options */}
      <form  ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />

      <input type="email" name='email' placeholder='Your Email' required />

      <textarea name="message" placeholder='Your message'  rows="7"></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact;   