import { FaGithub, FaLinkedin } from "react-icons/fa";
import Parrafo from "../../components/Texts/Parrafo";
import Social from "../../components/Social/Social";
import cv from '../../assets/home/cv_luis_miguel.pdf';
import image from '../../assets/home/personal.png';

const Description = () => {

    const skills = [
        { label: 'Lenguajes', value: 'JavaScript, PHP, CSS, SQL' },
        { label: 'Frameworks', value: 'Laravel, React, Bootstrap' },
        { label: 'Seguridad', value: 'Sanctum, JWT' },
        { label: 'Bases de datos', value: 'PostgreSQL, MySQL' },
        { label: 'Control de versiones', value: 'Git, GitHub' },
    ];

    return (
        <section className="home">
            <div className="home__container">

                {/* LEFT */}
                <div className="home__content">

                    <header className="home__title">
                        <h1>
                            Hola <br />
                            Soy Luis Miguel.
                        </h1>
                    </header>

                    <section className="home__description">
                        <Parrafo text="Soy desarrollador full-stack y 
                        disfruto convertir desafíos en soluciones digitales. No se trata solo de escribir código, 
                        sino de crear experiencias claras, funcionales y bien pensadas." />

                        <Parrafo text="Lo que más disfruto de mi profesión es ver cómo los 
                        problemas reales pueden resolverse de forma digital, y cómo ese 
                        proceso genera un impacto positivo. Eso es lo que realmente me motiva." />
                    </section>

                    <section className="home__skills">
                        <h5>Mis habilidades principales son:</h5>

                        {skills.map(({ label, value }) => (
                            <p key={label}>
                                <strong>{label}:</strong> <span>{value}</span>
                            </p>
                        ))}
                    </section>

                    <div className="home__actions">
                        <a
                            href={cv}
                            className="btn btn-dark text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mi CV
                        </a>

                        <div className="home__social">
                            <Social url="https://www.linkedin.com/in/luismi0296" Icon={<FaLinkedin />} />
                            <Social url="https://github.com/Luismi05" Icon={<FaGithub />} />
                        </div>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="home__image">
                    <div className="home__image-frame">
                        <img
                            src={image}
                            alt="Luis Miguel | Desarrollador Full Stack"
                            loading="lazy"
                            draggable='false'
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Description;