import React from 'react'
import NavItem from './UI/NavItem'
export default function NavBar({ onAboutClick, onProjectsClick, onContactClick }) {
  return (
  <div className='navigation'>
    <div className="nav-bar">
           <NavItem
           text="About"
           onClick={onAboutClick}
            />
           <NavItem
            text="Projects"
            onClick={onProjectsClick}
           />
           <NavItem
             text="Contact Me"
             onClick={onContactClick}
           />
    </div>
     <div className="logo">
            <div className="div">Lihi Israeli</div>
            <div className="frontend-developer">Frontend Developer</div>
    </div>
  </div>
   
  )
}
