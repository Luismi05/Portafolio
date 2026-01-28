import Card from '../../components/Cards/Card';
import Parrafo from '../../components/Texts/Parrafo';
import Divider from '../../components/Divider/Divider';
import { skills } from '../../data/skills';

const Skills = () => {

    return (
        <div className='mt-5'>
            <Divider
                text='Skills'
            />
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
                {skills.map(({ label, icon: Icon, className }, index) => (
                    <Card
                        key={index}
                        icon={<Icon className={`skill-icon ${className}`} />}
                        alt={label}
                    />
                ))}
            </div>


        </div>
    )
}
export default Skills