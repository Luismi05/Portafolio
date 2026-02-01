import { useEffect, useState } from "react";
import ProjectCard from "./ProjectsCard";

const ProjectsSlider = ({ projects = [] }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleResize();
        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    const chunkSize = isMobile ? 1 : 3;

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
            <div className="carousel-inner">
                {slides.map((group, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <div className="row g-4 justify-content-center">
                            {group.map(project => (
                                <div
                                    key={project.id}
                                    className={isMobile ? "col-12" : "col-md-4"}
                                >
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
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