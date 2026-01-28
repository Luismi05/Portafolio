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
                    text='Aquí presento una vista previa de algunos de mis proyectos más relevantes. 
                    Cada uno de ellos representa un reto distinto que asumí de manera individual, 
                    desde la concepción de la idea hasta su desarrollo y puesta en marcha. 
                    A través de estos trabajos busco mostrar mi evolución técnica, la capacidad de resolver 
                    problemas reales y el interés constante por aprender, mejorar y enfrentar nuevos desafíos en el desarrollo de software.'
                />
            </section>

            <section className='projects-section'>
                <div className='container'>
                    <ProjectsSlider
                        projects={projects}
                    />
                </div>
                <div className='text-center'>
                    <button className="btn btn-dark mt-4">
                        <a href="/projects" className="text-decoration-none text-white">Ver más</a>
                    </button>
                </div>

            </section>
        </div>
    )
}

export default Projects