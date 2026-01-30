import { useState } from 'react';
import './Projects.css'
import ProjectsGrid from '../../components/Projects/ProjectsGrid';
import Parrafo from '../../components/Texts/Parrafo';
import { projects } from '../../data/projects';
import PreviewProject from './PreviewProject';

const Projects = () => {
  const [selectProject, setSeletedProject] = useState(null);

  const handleProject = (project) => {
    setSeletedProject(project);
  };

  return (
    <div className='w-50 mt-5 mb-3'>
      <header className="project__title">
        <h1 className='mb-5'>Mis proyectos</h1>

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

      <PreviewProject
        selectProject={selectProject}
      />
    </div>
  )
}

export default Projects