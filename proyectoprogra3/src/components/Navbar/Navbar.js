import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = ({peli}) => {
    return (
        <>
        <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/peliculas">Peliculas</Link></li>
        </ul>
        <ul classNamne="user">
            <li><img src="./img/peli.jpg" alt="" /></li>
        </ul>
        </>
    );
  }

export default Navbar;