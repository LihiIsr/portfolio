import Hamburger from "./UI/Hamburger";
import NavItem from './UI/NavItem';
import "./Nav.css";

import { useState } from 'react';

export default function Nav({onAboutClick, onProjectsClick, onContactClick}){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen);
    }

    const closeNav = () =>{
        setHamburgerOpen(false);
    }

    return(

        <div>
            <div className="navigation">
               <ul className={hamburgerOpen ? "nav-list-open" : ""}>                 
                <NavItem
                   text="About"
                   onChoose={onAboutClick}
                   closeNav={closeNav}
                    />
                   <NavItem
                    text="Projects"
                    onChoose={onProjectsClick}
                    closeNav={closeNav}
                   />
                   <NavItem
                     text="Contact Me"
                     onChoose={onContactClick}
                    closeNav={closeNav}
                   />

                    
                </ul>
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
            </div>

             <div className="logo">
                    <div className="my-name">Lihi Israeli</div>
                    <div className="frontend-developer">Frontend Developer</div>
            </div>

        </div>
    )

}