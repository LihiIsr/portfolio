import Hamburger from "./UI/Hamburger";
import NavItem from './UI/NavItem';

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
                <ul>
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


            <style>{`

                .navigation{
                    width: 100%;
                    height: 50px;
                    position:relative;
                    top:3vh;
                    z-index:6;
                }
                
                
                .navigation ul{
                    display:flex;
                    position:absolute;
                    right:2vw;
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                    z-index:6;
                    gap: 5vw;
                    font-size: 2vw;
                    color: #271c11;
                }
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;

                }



                .hamburger{
                    display: none;
                    z-index: 7;
                } 


                @media (max-width: 767px){
                  
                    .hamburger{
                        position:absolute;
                        display:flex;
                        margin-left: 10px;
                        z-index: 6;
                        right:2vw;
                    }

                
                   
                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        height: 30vh;
                        width: 40vw;
                        margin-top: 50px;
                        position: absolute;
                        font-size:4vw;
                    }

                    .nav-item{
                    border: 1px black dotted;
                    }
                }
                
               
                
            `}</style>
        </div>
    )

}