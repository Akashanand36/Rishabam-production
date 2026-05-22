import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
       <img src="/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">Rishabam Production</span>
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;