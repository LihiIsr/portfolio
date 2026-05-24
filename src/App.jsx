
import "./style.css";
import { useRef } from 'react';

import Projects from "./components/UI/Projects";
import NavBar from "./components/NavBar";
import ScrollToTopButton from "./components/UI/ScrollToTopBtn";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
import CustomHeader from "./components/UI/CustomHeader";
import Stats from "./components/Stats";
import TechStack from "./components/UI/TechStack";

import Nav from "./components/Nav";

export const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="desktop">

      {/* <NavBar   
      onProjectsClick={() => scrollToSection(projectsRef)} 
      onAboutClick={() => scrollToSection(aboutRef)} 
      onContactClick={() => scrollToSection(contactRef)} /> */}

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
        <CustomHeader>Projects</CustomHeader>
        <Projects/>
      
      </div>

      
      <div ref={contactRef} className="contact">
        <ContactMe/>
      </div>

      <ScrollToTopButton/>
    </div>
  );
};
