import React from 'react'
import NavItem from './NavItem'
export default function NavBar({ onAboutClick, onProjectsClick, onContactClick }) {
  return (
    <div className="nav-bar">
           <NavItem className="nav-item-instance"
           text="About"
           onClick={onAboutClick}
            />
           <NavItem
             aboutClassName="design-component-instance-node"
             className="nav-item-2"
             text="Projects"
            onClick={onProjectsClick}
           />
           <NavItem
             aboutClassName="nav-item-4"
             className="nav-item-3"
             text="Contact Me"
             onClick={onContactClick}
           />
         </div>
   
  )
}
