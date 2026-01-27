const ProjectCard = ({ project }) => {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>

                <div className="d-flex gap-2 flex-wrap">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="badge bg-secondary">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;