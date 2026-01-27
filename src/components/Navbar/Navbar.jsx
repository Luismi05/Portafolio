import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-logo">MiLogo</div>

                <ul className="navbar-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/projects">Proyectos</a></li>
                    <li><a href="/about">Sobre mí</a></li>
                </ul>

                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </nav>
        </div>

    );
};

export default Navbar;