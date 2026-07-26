import LogoLoop from './LogoLoop';
import { SiReact, SiVuedotjs, SiTailwindcss, SiFirebase, SiFigma, SiJavascript, SiCss3, SiHtml5, SiGit, SiNextdotjs } from 'react-icons/si';
import { useState, useEffect } from 'react';

import storylineLogo from "../../../assets/images/storyline.svg";
import riseLogo from "../../../assets/images/rise.svg";
import geniallyLogo from "../../../assets/images/genieLogo.svg";



const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiVuedotjs />, title: "vue.js", href: "https://vuejs.org/" },
  { node: <SiFigma />, title: "figma", href: "https://www.figma.com/" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
   {
    node: (
      <img
        src={riseLogo}
        alt="Articulate Rise"
        style={{ width: "1.5em", height: "1.5em" }}
      />
    ),
    title: "Articulate Rise",
    href: "https://articulate.com/360/rise"
  },
  { node: <SiJavascript />, title: "javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  {
    node: (
      <img
        src={storylineLogo}
        alt="Articulate Storyline"
        style={{ width: "1.5em", height: "1.5em" }}
      />
    ),
    title: "Articulate Storyline",
    href: "https://articulate.com/360/storyline"
  },
  { node: <SiHtml5 />, title: "html5", href: "https://en.wikipedia.org/wiki/HTML5" },
  { node: <SiFirebase />, title: "firebase", href: "https://firebase.google.com/" },
  {
    node: (
      <img
        src={geniallyLogo}
        alt="Genially"
        style={{ width: "1.5em", height: "1.5em" }}
      />
    ),
    title: "Genially",
    href: "https://app.genially.com/"
  },
  { node: <SiNextdotjs />, title: "next.js", href: "https://nextjs.org" },
  { node: <SiGit />, title: "git", href: "https://git-scm.com/" },

];

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
     <div className="logo-loop-container">
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={isMobile ? 40 : 60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff1b"
        ariaLabel="Technology partners"
      />
    </div>
  )
}
