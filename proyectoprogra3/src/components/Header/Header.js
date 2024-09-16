import React from "react";
import "./Header.css"
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
    <nav>
        <Navbar />
        <img src="/film.png" className="logo-img" alt="film" />
    </nav>
    );
  }

export default Header;