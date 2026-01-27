import { FaGithub, FaLinkedin } from "react-icons/fa"
import Parrafo from "../../components/Texts/Parrafo"
import Social from "../../components/Social/Social"

export const Description = () => {

    const skills = [
        { label: 'Lenguajes', value: 'JavaScript, PHP, CSS, SQL' },
        { label: 'Frameworks', value: 'Laravel, React, Bootstrap' },
        { label: 'Seguridad', value: 'Sanctum, JWT' },
        { label: 'Bases de datos', value: 'PostgreSQL, MySQL' },
        { label: 'Control de versiones', value: 'Git, GitHub' },
    ]
    return (
        <div>
            {/* Title */}
            <header className="home__title">
                <h1>
                    Hola, <br />
                    Soy Luis Miguel.
                </h1>
            </header>

            {/* Description */}
            <section className="home__description w-50 mt-5">
                <Parrafo
                    text="Soy desarrollador full-stack y disfruto convertir desafíos
          en soluciones digitales. No se trata solo de escribir código,
          sino de crear experiencias claras, funcionales y bien pensadas."
                />

                <Parrafo
                    text="Lo que más disfruto de mi profesión es ver cómo los problemas reales
          pueden resolverse de forma digital, y cómo ese proceso genera un impacto positivo.
          Eso es lo que realmente me motiva."
                />
            </section>

            {/* Skills */}
            <section className="home__skills mt-4">
                <h5>Mis habilidades principales son:</h5>

                {skills.map(({ label, value }) => (
                    <p key={label}>
                        {label}: <span>{value}</span>
                    </p>
                ))}
            </section>

            {/* CV */}
            <div className="home__cv mt-4">
                <a
                    href="/cv.pdf"
                    className="btn btn-dark dark text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mi CV
                </a>
            </div>

            {/* Social */}
            <div className="home__social mt-3 dark">
                <Social
                    url="https://www.linkedin.com/in/luismi0296"
                    Icon={<FaLinkedin />}
                />

                <Social
                    url="https://github.com/Luismi05"
                    Icon={<FaGithub />}
                />
            </div>
        </div>
    )
}
