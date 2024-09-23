import React from "react";
import "./Navbar.css";  // Importa los estilos específicos para la barra de navegación
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="main-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
        <li><Link to="/peliculas/populares">Peliculas Populares</Link></li>
        <li><Link to="/peliculas/toprated">Peliculas Top Rated</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
