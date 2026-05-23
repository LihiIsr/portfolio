import React from 'react'
import LogoLoop from './LogoLoop';
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

export default function TechStack() {
  return (
     <div className="logo-loop-container">
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
  )
}
