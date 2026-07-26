import  Card  from "./ProjectCard";

import siteCover from '../../assets/images/machtzavim.jpg';
import lomdaCover from '../../assets/images/lomda.jpg';
import lomda2Cover from '../../assets/images/lomda2.jpg';
import riseCover from '../../assets/images/risePhising.jpg';
import geniallyCover from '../../assets/images/geniallySafety.jpg';


import './Projects.css'

export default function Cards() {
  return (
      <div className="cards">
                 <Card
                coverImg={geniallyCover}
                className="card-instance"
                title="Micro-Learning module"
                text={
                  <>
            
                  A gamified microlearning experience, created in Genially.
                  <br/>
                   designed to improve safety awareness by challenging learners to identify potential hazards and make safer decisions in the workplace.                  </>
                }
                mostRecent
                tags={['genially', 'canva', 'gemini', 'chatGPT']}
                openProject="https://view.genially.com/6a638c692374438654152fc9"
          />
         <Card
                coverImg={riseCover}
                className="card-instance"
                title="Micro-Learning module"
                text={
                  <>
                   An interactive phishing awareness microlearning module built in Articulate Rise.
                   <br/>
                    designed to help learners identify phishing attempts, understand common risks, and develop safer digital habits.
                  </>
                }
                
                tags={['rise', 'canva', 'gemini', 'chatGPT']}
                openProject="https://lihiisr.github.io/phishing-course/#/"
          />
         <Card
                coverImg={lomda2Cover}
                className="card-instance"
                title="E-Learning module"
                text={
                  <>
                    An interactive learning module built in Storyline 360, 
                    showcasing accessibility barriers through realistic situations.                   

                  </>
                }
                
                tags={['storyline', 'figma','gemini', 'chatGPT', 'claude']}
                openProject="https://lihiisr.github.io/accessibility-course/story.html"
          />
          <Card
                coverImg={lomdaCover}
                className="card-instance"
                title="E-Learning platform"
                text={
                  <>
                    an e-learning platform about organization safety, made for and
                    with a client.
                    <br />
                    includes an interactive map of the building with all the info needed
                    for a new employee.
                  </>
                }
                tags={['react', 'javascript', 'css', 'figma']}
                openProject="https://elearning-safety-benatav.web.app/"
                openGitHub="https://github.com/LihiIsr/safety-benatav"
              />
              <Card 
              coverImg={siteCover} 
              className="card-instance" 
              title="Brand Site "
              text='A branded site for the IDF unit "machtzavim", features include a CRUD application with firestore for an admin.'
              tags={['vue', 'javascript', 'css','firestore', 'crud-application']}
              openProject="https://machtzavim-site.web.app/"
              openGitHub="https://github.com/LihiIsr/machtzavim-site-origin"
               />
    
              
             
        </div>
  )
}
