import React from "react";
import "./Inicio.css";
import { RiSearchLine } from "react-icons/ri";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <nav className="navbar-tesla">
      <div>
        <h1 className="navbar-tesla__logo">NEW LOOK</h1>
      </div>
      <div className="navbar-tesla__links">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li className="dropdown">
            <a href="#model-3" className="dropbtn">
              PRODUCTOS
            </a>
            <div className="dropdown-content">
              <Link to="#">.</Link>
              <Link to="#">.</Link>
              <Link to="#">.</Link>
            </div>
          </li>
          <li>
            <Link to="#">INFORMACION</Link>
          </li>
          <li>
            <Link to="#">ENVIOS</Link>
          </li>
          <li>
            <Link to="#">CONTACTOS</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-tesla__cta">
        <a href="#shop"><IoCartSharp className="carito" size={20} /></a>
        <a href="#account"><RiSearchLine className=" search" size={20}/></a>
      </div>
    </nav>
  );
};

export default AppNavbar;
