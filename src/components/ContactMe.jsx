import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import CustomHeader from './UI/CustomHeader';
import seatedCharacterSrc from '../assets/images/seatedAnim.png';


export default function ContactMe({className}) {
  return (
    <>
   
    <CustomHeader>Contact Me</CustomHeader>
        <div className='contact-icons'>
             <a href="https://www.linkedin.com/in/israeli-lihi/" target='_blank'   rel="noopener noreferrer">
                <FaLinkedin className='contact-icon' />
            </a>
            <a href="mailto:lihiisr@gmail.com">
                <MdEmail className='contact-icon'/>
            </a>
            <a href="https://wa.me/972502119663" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='contact-icon'/>

            </a>
        </div>

      <div className="contactCharacter">
        <img className="characterSeat" src={seatedCharacterSrc}/>
        <p className="characterText">looking forward to hearing from you ;)</p>
      </div>

    </>

  )
}
