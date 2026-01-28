import Modal from '../../components/Modal/Modal'
import Parrafo from '../../components/Texts/Parrafo'
import { useEffect, useState } from 'react';
import { skills } from '../../data/skills';
import Card from '../../components/Cards/Card';

const PreviewProject = ({ selectProject }) => {
    const [activeSection, setActiveSection] = useState(null);


    const section = selectProject?.caracteristicas?.[activeSection];

    useEffect(() => {
        if (selectProject?.caracteristicas) {
            const firstKey = Object.keys(selectProject.caracteristicas)[0];
            setActiveSection(firstKey);
        }
    }, [selectProject]);

    if (!selectProject) return null;

    const projectSkills = skills.filter(skill =>
        selectProject.skills.includes(skill.id)
    );

    return (
        <Modal
            id="projects"
            tamaño="xl"
            title={selectProject.title}
            contenido={
                <div className='container w-75'>
                    {/* descripcion2 es un array */}
                    {selectProject.descripcion2.map((text, i) => (
                        <Parrafo key={i} text={text} />
                    ))}

                    <div className='preview__images'>
                        <img
                            src={selectProject.image}
                            alt={selectProject.title}
                            className="img-fluid mb-3"
                        />
                    </div>

                    {/* SIDEBAR */}
                    <aside className='preview__sidebar'>
                        {Object.entries(selectProject.caracteristicas).map(([key, item]) => (
                            <button
                                key={key}
                                className={activeSection === key ? 'active' : ''}
                                onClick={() => setActiveSection(key)}
                            >
                                {item.title}
                            </button>
                        ))}
                    </aside>

                    {/* CONTENT */}
                    {section && (
                        <div className='preview__content'>
                            <header className='preview__title'>
                                <h1>{section.title}</h1>
                            </header>

                            {section.content.map((text, index) => (
                                <Parrafo key={index} text={text} />
                            ))}
                        </div>
                    )}

                    <div className='preview__skills'>
                        <header>
                            <h1 className='preview__title'>Principales Tecnologías Utilizadas</h1>
                        </header>

                        <div className="project-skills d-flex gap-1 mt-5">
                            {projectSkills.map(({ label, icon: Icon, className }, index) => (
                                <Card
                                    key={index}
                                    icon={<Icon className={`skill-icon ${className}`} />}
                                    alt={label}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default PreviewProject;
