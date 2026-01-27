import { FaBootstrap, FaCss3, FaGitAlt, FaGithub, FaJs, FaLaravel, FaPhp, FaReact, FaWordpress } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiJsonwebtokens, SiVite, } from 'react-icons/si';
import Card from '../../components/Cards/Card';
import Parrafo from '../../components/Texts/Parrafo';
import { MdApi, MdSecurity } from 'react-icons/md';
import Divider from '../../components/Divider/Divider';

const Skills = () => {

    const list = [
        { label: 'JavaScript', icon: <FaJs className='skill-icon icon-js' /> },
        { label: 'React', icon: <FaReact className='skill-icon icon-react' /> },
        { label: 'Php', icon: <FaPhp className='skill-icon icon-php' /> },
        { label: 'Laravel', icon: <FaLaravel className='skill-icon icon-laravel' /> },
        { label: 'Css', icon: <FaCss3 className='skill-icon icon-css' /> },
        { label: 'Bootstrap', icon: <FaBootstrap className='skill-icon icon-bootstrap' /> },
        { label: 'PostgreSQL', icon: <SiPostgresql className='skill-icon icon-postgresql' /> },
        { label: 'MySQL', icon: <SiMysql className='skill-icon icon-mysql' /> },
        { label: 'Jwt', icon: <SiJsonwebtokens className='skill-icon icon-jwt' /> },
        { label: 'Sanctum', icon: <MdSecurity className='skill-icon icon-laravel' /> },
        { label: 'Git', icon: <FaGitAlt className='skill-icon icon-git' /> },
        { label: 'GitHub', icon: <FaGithub className='skill-icon icon-github' /> },
        { label: 'Vite', icon: <SiVite className='skill-icon icon-vite' /> },
        { label: 'REST API', icon: <MdApi className='skill-icon icon-api' /> },
        { label: 'WordPress', icon: <FaWordpress className='skill-icon icon-wordpress' /> },
    ]

    return (
        <div className='mt-5'>
            <Divider
                text='Skills'
            />

            {/* Title */}
            <header className="skills__title">
                <h1>
                    Skills más utilizadas en mis proyectos
                </h1>
            </header>
            <section className='home__description'>
                <Parrafo
                    text='En mi trayectoria como desarrallador he utilizado
                    y aprendido diversas Skills que han tenido gran impacto positivo en mis proyectos.
                    Me encanta seguir aprendiendo y perfeccionando mis habilidades, soy una persona
                    que le encanta estar en constante evolución y asumir nuevos retos que me permitan 
                    seguir creciendo como desarrollador.'
                />
            </section>

            <div className="skills-grid">
                {list.map((skill, index) => (
                    <Card
                        key={index}
                        icon={skill.icon}
                        alt={skill.label}
                    />
                ))}
            </div>

        </div>
    )
}

export default Skills