import { useEffect, useState } from 'react';

import Modal from '../../components/Modal/Modal';
import Parrafo from '../../components/Texts/Parrafo';
import Card from '../../components/Cards/Card';

import { skills } from '../../data/skills';

const PreviewProject = ({ selectProject }) => {
    const [activeSection, setActiveSection] = useState(null);

    const hasProject = Boolean(selectProject);

    // Sección activa actual
    const section = selectProject?.caracteristicas?.[activeSection];

    // Inicializa la primera sección cuando cambia el proyecto
    useEffect(() => {
        if (selectProject?.caracteristicas) {
            const [firstKey] = Object.keys(selectProject.caracteristicas);
            setActiveSection(firstKey);
        } else {
            setActiveSection(null);
        }
    }, [selectProject]);

    // Skills del proyecto (blindado contra null)
    const projectSkills = hasProject
        ? skills.filter(skill =>
            selectProject.skills?.includes(skill.id)
        )
        : [];

    return (
        <Modal
            id="projects"
            tamaño="xl"
            title={selectProject?.title || ''}
            contenido={
                hasProject ? (
                    <div className="container w-75">

                        {/* Descripción general */}
                        {selectProject.descripcion2?.map((text, index) => (
                            <Parrafo key={index} text={text} />
                        ))}

                        {/* Imagen principal */}
                        <div className="preview__images">
                            <img
                                src={selectProject.image}
                                alt={`Vista previa del proyecto ${selectProject.title}`}
                                className="img-fluid mb-3"
                                draggable="false"
                                loading="lazy"
                            />
                        </div>

                        {/* Sidebar */}
                        <aside className="preview__sidebar">
                            {Object.entries(selectProject.caracteristicas || {}).map(
                                ([key, item]) => (
                                    <button
                                        key={key}
                                        type="button"
                                        className={activeSection === key ? 'active' : ''}
                                        onClick={() => setActiveSection(key)}
                                        aria-label={`Ver sección ${item.title}`}
                                    >
                                        {item.title}
                                    </button>
                                )
                            )}
                        </aside>

                        {/* Contenido dinámico */}
                        {section && (
                            <section className="preview__content">
                                <header className="project__title">
                                    <h1>{section.title}</h1>
                                </header>

                                {section.content?.map((text, index) => (
                                    <Parrafo key={index} text={text} />
                                ))}
                            </section>
                        )}

                        {/* Tecnologías */}
                        <section className="preview__skills">
                            <header>
                                <h2 className="project__title">
                                    Principales tecnologías utilizadas
                                </h2>
                            </header>

                            <div className="project-skills d-flex flex-wrap gap-1 mt-5">
                                {projectSkills.map(
                                    ({ label, icon: Icon, className }, index) => (
                                        <Card
                                            key={index}
                                            icon={<Icon className={`skill-icon ${className}`} />}
                                            alt={label}
                                        />
                                    )
                                )}
                            </div>
                        </section>

                        {/* Impacto y resultados */}
                        <section className="preview__conclutions mt-5">
                            <header>
                                <h2 className="project__title fs-3">
                                    Impacto y resultados
                                </h2>
                            </header>

                            {selectProject.impact?.map((text, index) => (
                                <Parrafo key={index} text={text} />
                            ))}
                        </section>

                    </div>
                ) : null
            }
        />
    );
};

export default PreviewProject;