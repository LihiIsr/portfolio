import  Card  from "./ProjectCard";

import siteCover from '../../assets/images/machtzavim.jpg';
import lomdaCover from '../../assets/images/lomda.jpg';
import lomda2Cover from '../../assets/images/lomda2.jpg';


import './Projects.css'

export default function Cards() {
  return (
      <div className="cards">
              <Card 
              coverImg={siteCover} 
              className="card-instance" 
              title="Brand Site "
              text='A branded site for the IDF unit "machtzavim", features include a CRUD application with firestore for an admin.'
              tags={['vue', 'javascript', 'css','firestore', 'crud-application']}
              openProject="https://machtzavim-site.web.app/"
              openGitHub="https://github.com/LihiIsr/machtzavim-site-origin"
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
                coverImg={lomda2Cover}
                className="card-instance"
                title="E-Learning module"
                text={
                  <>
                    An interactive learning module built in Storyline 360, 
                    showcasing accessibility barriers through realistic situations.                   

                  </>
                }
                mostRecent
                tags={['storyline', 'figma']}
                openProject="https://lihiisr.github.io/accessibility-course/story.html"
              />
        </div>
  )
}
