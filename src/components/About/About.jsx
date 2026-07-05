import './About.css'
import myCv from '../../assets/files/ליהי ישראלי- קוח.pdf'
import cookieSrc from '../../assets/images/cookie.svg';
import characterSrc from '../../assets/images/heroAnim.webp';

export default function About() {
  return (
    <>
        <div className="about">
              <p>
                Hi! I create interactive e-learning experiences that make complex information engaging, accessible, and easy to understand.
              </p>
              <p>
                Using tools like Articulate Storyline alongside React and Vue.js, I develop digital learning solutions that blend thoughtful design with modern development.
              </p>
                {/* <p>
                  Hi! i'm a front-end developer specializing in UI/UX design and interactive web experiences using modern technologies like React and Vue.js.
                </p>
                <p>
                I'm focused on clean design, responsive interfaces, and thoughtful user experiences.
                </p> */}
                <p className="cookie-text">
                My adorable kitten, Cookie, appreciates your visit :)
                </p>

          <div className='actions'>
            <div className="frame">
                    <a href="mailto:lihiisr@gmail.com" className="let-s-talk">Let’s Talk!</a>
                  </div>
          
              <a href={myCv} download="ליהי ישראלי- קוח" target='_blank'  className="download-text">
                download my cv
              </a>
          </div>
        </div>
      
        <div className="float-wrapper">
            <img className="cookie" src={cookieSrc} alt='cookie the kitten'/>
        </div>
             
        <img
        className="character"
        src={characterSrc}
        alt="Lihi"
        loading="eager"
        fetchPriority="high"
      />
    </>
  )
}
