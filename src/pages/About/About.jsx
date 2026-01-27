import Biography from './Biography';
import Experience from './Experience';
import './About.css';

const About = () => {
  return (
    <div className='home my-2'>
      <Biography />
      <Experience />
    </div>
  )
}

export default About