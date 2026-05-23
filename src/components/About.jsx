import React from 'react'
import myCv from '../assets/files/ליהי ישראלי- קוח.pdf'
import cookieSrc from '../assets/images/cookie3.png';
import characterSrc from '../assets/images/animated.png';

export default function About() {
  return (
    <>
        <div className="about">
                <p>
                  Hi! i'm a front-end developer specializing in UI/UX design and interactive web experiences using modern technologies like React and Vue.js.
                </p>
                <p>
                I'm focused on clean design, responsive interfaces, and thoughtful user experiences.
                </p>
                <p className="cookie-text">
                My adorable kitten, Cookie, appreciates your visit :)
                </p>
              </div>
      
              <div className="float-wrapper">
                  <img className="cookie" src={cookieSrc}/>
              </div>
      
              <div className="frame">
                <a href="mailto:lihiisr@gmail.com" className="let-s-talk">Let’s Talk!</a>
              </div>
      
            <a href={myCv} download="ליהי ישראלי- קוח" target='_blank'  className="download-text">
             download my cv
            </a>
      
            <img className="character" src={characterSrc}/>
    </>
  )
}
