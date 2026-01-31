import { useState, useEffect } from "react";
import "./Navbar.css";

const THEME_KEY = "theme";

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem(THEME_KEY) || "light";
    });

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <nav className="navbar container">
            <div className="navbar-logo">
                <a href="/">✦</a>
            </div>

            <button
                className="navbar-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
            >
                ☰
            </button>

            <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <li><a href="/" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                <li><a href="/projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
                <li><a href="/about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>

                <li className="theme-item">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Cambiar tema"
                    >
                        {theme === "light" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;