import Divider from "../Divider/Divider";
import './ProjectsGrid.css';

const ProjectsGrid = ({ projects, onSelectProject }) => {
    return (
        <section className="projects">
            <div className="projects__grid">

                {projects.map(project => (
                    <div key={project.id} className="project__wrapper">
                        <Divider text={project.title} />

                        <article className="project__card">
                            <span className="project__tag">{project.category}</span>

                            <img
                                src={project.image}
                                alt={project.title}
                                className="project__img"
                                draggable='false'
                            />

                            <div className="project__hover">
                                <h3>{project.title}</h3>
                                <p>{project.descripcion}</p>
                            </div>

                            <div className="project__footer">
                                {project.title}
                            </div>
                        </article>

                        <button
                            className="project__btn"
                            data-bs-toggle="modal"
                            data-bs-target="#projects"
                            onClick={() => onSelectProject(project)}
                        >
                            Ver Proyecto
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsGrid