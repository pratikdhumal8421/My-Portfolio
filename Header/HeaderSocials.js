import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'> 
     <a href="https://linkedin.com/in/pratikdhumal/" target="_blank" rel="noreferrer noopener" ><BsLinkedin size={30}/></a>
    <a href="https://github.com/pratikdhumal8421" target="_blank" rel="noreferrer noopener" ><FaGithub size={30}/></a>
    <a href="https://instagram.com/dhumal_brothers/" target="_blank" rel="noreferrer noopener" ><BsInstagram size={30}/></a>

    </div> 
  )
}

export default HeaderSocials;
