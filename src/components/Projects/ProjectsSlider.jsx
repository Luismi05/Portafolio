import ProjectCard from "./ProjectsCard";

const ProjectsSlider = ({ projects = [] }) => {
    const chunkSize = 3;

    if (!projects.length) return null;

    const slides = [];
    for (let i = 0; i < projects.length; i += chunkSize) {
        slides.push(projects.slice(i, i + chunkSize));
    }

    const showControls = slides.length > 1;

    return (
        <div
            id="projectsCarousel"
            className="carousel slide projects-carousel"
            data-bs-ride="carousel"
        >
            <div className="carousel">
                <div className="carousel-inner">
                    {slides.map((group, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className="row g-4 justify-content-center">
                                {group.map(project => (
                                    <div key={project.id} className="col-md-4">
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showControls && (
                <>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#projectsCarousel"
                        data-bs-slide="prev"
                        aria-label="Previous"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#projectsCarousel"
                        data-bs-slide="next"
                        aria-label="Next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                    </button>
                </>
            )}
        </div>
    );
};

export default ProjectsSlider;