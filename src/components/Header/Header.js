import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <img src="../film.png" className="logo" alt="film" />
        </header>
    );
}

export default Header;
