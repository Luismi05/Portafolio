import './Home.css'
import Description from './Description'
import Skills from './Skills'
import Projects from './Projects'




const Home = () => {

  return (
    <div className="home my-2">
      <Description />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home

