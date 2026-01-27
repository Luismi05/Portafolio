import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className="NotFound d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <section className="text-center">
                <h1 className='title mb-5'>¡ 404 !</h1>
                <h2>Esta página no está disponible</h2>
                <p>Es posible que el enlace esté roto o que se haya eliminado la página.</p>
                <p>Verifica que el enlace que quieres abrir es correcto.</p>
                <div>
                    <button onClick={handleRedirect} className="btn btn-success">Volver al inicio</button>
                </div>
            </section>
        </div>
    );
};

export default NotFound;