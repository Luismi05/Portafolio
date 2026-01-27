import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        // mapear las rutas...

        const titles = {
            '/': 'Inicio | Portafolio',
            '/projects': 'Proyectos | Portafolio',
            '/about': 'Sobre mi | Portafolio',
            '/NotFound': 'Página no encontrada | Portafolio',
        }

        document.title = titles[location.pathname] || 'Portafolio';
    }, [location])


    return null;
}

export default PageTitle