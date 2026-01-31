import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Parrafo from '../../components/Texts/Parrafo';
import Card from '../../components/Cards/Card';

import { skills } from '../../data/skills';

const PreviewProject = ({ selectProject }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    const hasProject = Boolean(selectProject);

    // seccion activa...
    const section = selectProject?.caracteristicas?.[activeSection];

    useEffect(() => {
        if (selectProject?.caracteristicas) {
            const [firstKey] = Object.keys(selectProject.caracteristicas);
            setActiveSection(firstKey);
        } else {
            setActiveSection(null);
        }
    }, [selectProject]);

    //blindar los skills...
    const projectSkills = hasProject
        ? skills.filter(skill =>
            selectProject.skills?.includes(skill.id)
        )
        : [];

    // imagenes ....
    const images = hasProject
        ? [
            selectProject.image2,
            selectProject.image3,
            selectProject.image4,
        ].filter(Boolean)
        : [];

    /* Bloquea scroll cuando el lightbox está activo */
    useEffect(() => {
        document.body.style.overflow = activeImage ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [activeImage]);

    return (
        <Modal
            id="projects"
            tamaño="xl"
            title={selectProject?.title || ''}
            contenido={
                hasProject ? (
                    <div className="container w-75">

                        {selectProject.descripcion2?.map((text, index) => (
                            <Parrafo key={index} text={text} />
                        ))}

                        {images.length > 0 && (
                            <div className="preview__images">
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="preview__image-card"
                                        onClick={() => setActiveImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`Vista ${index + 1} del proyecto ${selectProject.title}`}
                                            loading="lazy"
                                            draggable="false"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

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

                        {activeImage && (
                            <div
                                className="lightbox"
                                onClick={() => setActiveImage(null)}
                            >
                                <span className="lightbox__close">×</span>
                                <img
                                    src={activeImage}
                                    alt={`Vista ampliada del proyecto ${selectProject.title}`}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        )}

                    </div>
                ) : null
            }
        />
    );
};

export default PreviewProject;