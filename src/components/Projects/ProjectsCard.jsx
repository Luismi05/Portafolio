const ProjectCard = ({ project }) => {
    const { title, descripcion, image } = project;

    return (
        <article className="project-card">

            {/* Imagen */}
            {image && (
                <div className="project-card__image">
                    <img
                        src={image}
                        alt={`Vista previa del proyecto ${title}`}
                        loading="lazy"
                        draggable='false'
                    />
                </div>
            )}

            {/* Contenido */}
            <div className="project-card__content">
                <h3 className="project-card__title">
                    {title}
                </h3>

                <p className="project-card__description">
                    {descripcion}
                </p>
            </div>
        </article>
    );
};

export default ProjectCard;
