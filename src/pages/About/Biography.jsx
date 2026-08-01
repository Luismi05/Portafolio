import { useState } from 'react';
import Parrafo from '../../components/Texts/Parrafo';
import { sections } from '../../data/cv';
import Divider from '../../components/Divider/Divider';
import banner from '../../assets/about/bio.webp';

const Biography = () => {
    const [activeSection, setActiveSection] = useState('biografia');
    return (
        <div className=''>
            <header className='about__title'>
                <h1>Sobre mí</h1>
            </header>

            <section className="about__description  mt-5">
                <Parrafo
                    text="Aqui encontraras un poco mas sobre cual ha sido mi recorrido como
                    desarrollador y lo que me motiva a diario para seguir mejorando."
                />

                <div className='about__banner'>
                    <img src={banner} draggable='false' />
                </div>
            </section>

            <Divider
                text='Biografia'
            />

            <section className="about__tabs mt-2">

                {/* SIDEBAR / TABS */}
                <aside className="about__sidebar">
                    {Object.keys(sections).map(key => (
                        <button
                            key={key}
                            className={activeSection === key ? 'active' : ''}
                            onClick={() => setActiveSection(key)}
                        >
                            {sections[key].title}
                        </button>
                    ))}
                </aside>

                {/* CONTENT */}
                <div className="about__content">
                    <header className="about__title">
                        <h1>{sections[activeSection].title}</h1>
                    </header>

                    {sections[activeSection].content.map((text, index) => (
                        <Parrafo key={index} text={text} />
                    ))}
                </div>

            </section>

        </div>
    )
}

export default Biography