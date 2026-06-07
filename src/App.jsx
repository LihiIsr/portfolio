
import "./App.css";
import { useRef } from 'react';

import Projects from "./components/Projects/Projects";
import ScrollToTopButton from "./components/UI/ScrollToTopBtn";
import ContactMe from "./components/ContactMe/ContactMe";
import About from "./components/About/About";
import CustomHeader from "./components/UI/CustomHeader";
import Stats from "./components/Stats/Stats";
import TechStack from "./components/UI/LogoLoop/TechStack";
import Nav from "./components/Nav/Nav";

export const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-wrapper">

      <Nav onProjectsClick={() => scrollToSection(projectsRef)} 
      onAboutClick={() => scrollToSection(aboutRef)} 
      onContactClick={() => scrollToSection(contactRef)}/>

      <div ref={aboutRef} className="hero">
        <About/>
      </div>

      <TechStack/>

      <div className="stats">
        <Stats/>
      </div>

      <div  ref={projectsRef} className="projects">
        <CustomHeader className='custom-header'>Projects</CustomHeader>
        <Projects/>
      
      </div>

      
      <div ref={contactRef} className="contact">
        <ContactMe/>
      </div>

      <ScrollToTopButton/>
    </div>
  );
};
