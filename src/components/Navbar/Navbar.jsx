import { useState, useEffect } from "react";
import "./Navbar.css";

const THEME_KEY = "theme";

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        // Se ejecuta solo una vez...
        return localStorage.getItem(THEME_KEY) || "light";
    });

    // Aplica el tema al HTML y lo guarda en el stoarge....
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-logo">
                    <a className="text-decoration-none" href="/">✦</a>
                </div>

                <ul className="navbar-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/projects">Proyectos</a></li>
                    <li><a href="/about">Sobre mí</a></li>
                </ul>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Cambiar tema"
                >
                    {theme === "light" ? "☀️ Modo claro" : "🌙 Modo oscuro"}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;