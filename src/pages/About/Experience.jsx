import Cv from '../../components/Cv/Cv';
import { experience, studies } from '../../data/cv';
import Divider from '../../components/Divider/Divider';

const Experience = () => {
    return (
        <div>
            <Divider
                text='Experiencia'
            />

            <Cv title={'Experiencia Profesional'} data={experience} />

            <Divider
                text='Estudios'
            />

            <Cv title='Educación' data={studies} />
        </div>
    )
}

export default Experience