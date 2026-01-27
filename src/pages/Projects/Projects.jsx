import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import ProjectsGrid from '../../components/Projects/ProjectsGrid';
import Parrafo from '../../components/Texts/Parrafo';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [selectProject, setSeletedProject] = useState(null);

  const handleProject = (project) => {
    setSeletedProject(project);
  };

  return (
    <div className='w-50 mt-5 mb-3'>
      <header className="projects__title">
        <h1>Mis proyectos</h1>

        <Parrafo
          text="En esta sección presento mis proyectos más relevantes.
           A través de ellos muestro mi curva de aprendizaje y cómo, con el tiempo, 
           he evolucionado en el mundo de la tecnología, desde mis primeros retos hasta los más recientes. 
           Cada proyecto ha sido desarrollado de manera integral, 
           asumiendo todas las etapas del proceso: planeación, desarrollo, implementación y entrega."
        />

        <p className="text-center">
          <strong>
            Los siguientes proyectos son privados, por lo que no es posible mostrar el código fuente.
          </strong>
        </p>
      </header>

      <ProjectsGrid
        projects={projects}
        onSelectProject={handleProject}
      />

      <Modal
        id="projects"
        tamaño="xl"
        title={selectProject?.title}
        contenido={
          selectProject && (
            <div className='container w-75'>
              <p>{selectProject.descripcion2}</p>

              <div className='preview__images'>
                <img
                  src={selectProject.image}
                  alt={selectProject.title}
                  className="img-fluid mb-3"
                />
              </div>
              <h1 className='preview__title'>Caracteristicas</h1>
              <p>{selectProject.descripcion2}</p>

              <h1 className='preview__title'>Principales tecnologias utilizadas</h1>
              <p>{selectProject.descripcion2}</p>
            </div>
          )
        }
      />

    </div>
  )
}

export default Projects