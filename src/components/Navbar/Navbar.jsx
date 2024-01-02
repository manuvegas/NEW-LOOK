import "./Inicio.css";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar-tesla">
      <div>
        <h1 className="navbar-tesla__logo">NEW LOOK</h1>
      </div>

      <div
        className={
          isOpen ? "navbar-tesla__links open" : "navbar-tesla__links hidden"
        }
      >
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li className="dropdown">
            <a href="#model-3" className="dropbtn">
              PRODUCTOS
            </a>
            <div className="dropdown-content">
              <Link to="#">REMERAS</Link>
              <Link to="#">BUZOS</Link>
              <Link to="#">JOGGINS</Link>
              <Link to="#">BERMUDAS</Link>
              <Link to="#">ZAPAS</Link>
              <Link to="#">CARGOS</Link>
              <Link to="#">BACKPACKS</Link>
              <Link to="#">GORRAS</Link>
            </div>
          </li>
          <li>
            <Link to="/Navegacion">INFORMACION</Link>
          </li>
          <li>
            <Link to="/Envios">ENVIOS</Link>
          </li>
          <li>
            <Link to="/Contactos">CONTACTOS</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-tesla__cta">
        <a href="#account">
          <RiSearchLine className=" search" size={20} />
        </a>
        <a href="#shop">
          <IoCartSharp className="carito" size={20} />
        </a>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <FiAlignJustify className="burguer" size={20} />
        </button>
      </div>
    </nav>
  );
};

export default AppNavbar;
