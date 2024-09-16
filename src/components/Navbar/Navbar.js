import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = ({peli}) => {
    return (
        <>
        <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Favoritos</Link></li>
            <li><Link to="/peliculaspopulares">Peliculas Populares</Link></li>
            <li><Link to="/peliculastoprated">Peliculas Top Rated</Link></li>
        </ul>
        
        </>
    );
  }

export default Navbar;