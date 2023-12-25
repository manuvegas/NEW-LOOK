import React from "react";
import "./Inicio.css";

const AppNavbar = () => {
  return (
    <nav className="navbar-tesla">
      <div>
        <h1 className="navbar-tesla__logo">TESLA</h1>
      </div>
      <div className="navbar-tesla__links">
        <ul>
          <li>
            <a href="#model-s">HOME</a>
          </li>
          <li className="dropdown">
            <a href="#model-3" className="dropbtn">
              PRODUCTOS
            </a>
            <div className="dropdown-content">
              <a href="#interior">.</a>
              <a href="#exterior">.</a>
              <a href="#specs">.</a>
            </div>
          </li>
          <li>
            <a href="#model-x">INFORMACION</a>
          </li>
          <li>
            <a href="#model-y">ENVIOS</a>
          </li>
          <li>
            <a href="#model-x">CONTACTOS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-tesla__cta">
        <a href="#shop">CARRITO</a>
        <a href="#account">SEARCH</a>
      </div>
    </nav>
  );
};

export default AppNavbar;
