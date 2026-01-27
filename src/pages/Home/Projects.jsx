import Divider from '../../components/Divider/Divider'
import ProjectsSlider from '../../components/Projects/ProjectsSlider'
import Parrafo from '../../components/Texts/Parrafo'
import { projects } from '../../data/projects'

const Projects = () => {
    return (
        <div className='mt-5'>
            <Divider 
            text='Mis proyectos'
            />

            <header className="skills__title">
                <h1>
                    Proyectos
                </h1>
            </header>
            <section className='home__description'>
                <Parrafo
                    text='Aqui presento una vista rapida de mis proyectos mas relevantes siempre busco asumir nuevos 
                    retos por eso aqui te dejo algunos de ellos.'
                />
            </section>

            <section className='projects-section'>
                <div className='container'>
                    <ProjectsSlider
                        projects={projects}
                    />
                </div>

            </section>
        </div>
    )
}

export default Projects