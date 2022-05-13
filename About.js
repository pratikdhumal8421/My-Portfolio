import React from 'react'
import './About.css'
import ME1 from '../../assets/me1.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
 
      <section id="about">
       <h5>Let Me know</h5>
       <h2>About Me</h2>
       <div className="container about__container">
         <div className="about__me">
         <div className="about__me-image">
      <img src={ME1} alt="mysecondImg" />
          </div>
         </div>

         <div className="about__content">
         <div className="about__cards">
           <article className='about__card'>
           <FaAward className='about__icon'/>
             <h5>Experience</h5>
             <small>Fresher</small>
           </article>

           <article className='about__card'>
           <FaUsers className='about__icon'/>
               <h5>Clients</h5>
             <small>Self Employed</small>
             </article>

             <article className='about__card'>
         <VscFolderLibrary className='about__icon'/>
             <h5>Projects</h5>
             <small>1 Project Completed</small>
           </article>
         </div>
         <p> I am Pratik Dhumal From Ashta, Maharashtra. Basically My city is now situated in South Maharashtra.
         I have done Mechanical Engineering from Annasaheb Dange College of Engineering And Technology Ashta.
         I have done Web Expert Course from Bitcode Technologies Pune and my skillsets are HTML, CSS, Bootstrap, Javascript, Reactjs and MongoDB. My Hobbies are Travelling and Bike Riding. </p>

         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
       </div>
       </section>
   
  ) 
}

export default About