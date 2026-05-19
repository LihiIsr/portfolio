
import "./style.css";
import uxuilogo1 from "./assets/images/uxuilogo.png";

import seatedCharacterSrc from './assets/images/seatedAnim.png';

import { useRef } from 'react';

import Cards from "./components/UI/Cards";
import NavBar from "./components/NavBar";
import CountUp from './components/UI/CountUp';
import ScrollToTopButton from "./components/UI/ScrollToTopBtn";
import ContactMe from "./components/UI/ContactMe";
import About from "./components/About";

import LogoLoop from './components/UI/LogoLoop';
import { SiReact, SiVuedotjs, SiTailwindcss, SiFirebase, SiFigma, SiJavascript, SiCss3, SiHtml5, SiGit, SiNextdotjs } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiVuedotjs />, title: "vue.js", href: "https://vuejs.org/" },
  { node: <SiFigma />, title: "figma", href: "https://www.figma.com/" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiHtml5 />, title: "html5", href: "https://en.wikipedia.org/wiki/HTML5" },
  { node: <SiFirebase />, title: "firebase", href: "https://firebase.google.com/" },
  { node: <SiNextdotjs />, title: "next.js", href: "https://nextjs.org" },
  { node: <SiGit />, title: "git", href: "https://git-scm.com/" },

];

export const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="desktop">
      <NavBar   
      onProjectsClick={() => scrollToSection(projectsRef)} 
      onAboutClick={() => scrollToSection(aboutRef)} 
      onContactClick={() => scrollToSection(contactRef)} />

      <div className="logo">
        <div className="div">Lihi Israeli</div>
        <div className="frontend-developer">Frontend Developer</div>
      </div>

      <div ref={aboutRef}  className="hero">
        <About/>
      </div>

      

 <div style={{ height: '200px', position: 'relative', overflow: 'hidden', top:'990px'}}>
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff1b"
        ariaLabel="Technology partners"
      />
      
    
    </div>

      <div  ref={projectsRef} className="projects">
        <div className="projects-2">Projects</div>
        <Cards/>
      
      </div>

    
      <div ref={contactRef} className="contact">
        <ContactMe className="contact-box"/>
      </div>

      <div className="contactCharacter">
        <img className="characterSeat" src={seatedCharacterSrc}/>
        <p className="characterText">looking forward to hearing from you ;)</p>
      </div>


      <div className="stats">

        <div className="clients-stats">
          <div className="text-wrapper-4">
          <CountUp
          from={0}
          to={5}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
          startCounting={true}
        />
            +
            </div>

          <div className="text-wrapper-5">happy clients</div>
        </div>

        <div className="hours-stats">
          <div className="text-wrapper-6">
              <CountUp
              from={4000}
              to={4200}
              separator=","
              direction="up"
              duration={5}
              className="count-up-text"
              startCounting={true}
            />
            +
            </div>

          <p className="p">hours of loving what i do</p>
        </div>
      </div>

      <ScrollToTopButton/>
    </div>
  );
};
