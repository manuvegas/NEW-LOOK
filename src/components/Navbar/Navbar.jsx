import "./Inicio.css";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ModalSearch from "./ModalSearch";
import ModalCarrito from "./ModalCarrito";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOutsideCanvas, setShowOutsideCanvas] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const openCanvas = () => {
    setShowOutsideCanvas(true);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const closeCanvas = () => {
    setShowOutsideCanvas(false);
  };

  const handleLinkClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <nav className="navbar-tesla">
      <div className="divNavbar">
        <h1 className="navbar-tesla__logo">NEW LOOK</h1>
      </div>

      <div
        className={
          isOpen
            ? "navbar-tesla__links open "
            : "navbar-tesla__links hidden divNavbar"
        }
      >
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>HOME</Link>
          </li>
          <li className="dropdown">
            <a href="#model-3" className="dropbtn">
              PRODUCTOS
            </a>
            <div className="dropdown-content">
              <Link to="#" onClick={handleLinkClick}>REMERAS</Link>
              <Link to="#" onClick={handleLinkClick}>BUZOS</Link>
              <Link to="#" onClick={handleLinkClick}>JOGGINS</Link>
              <Link to="#" onClick={handleLinkClick}>BERMUDAS</Link>
              <Link to="#" onClick={handleLinkClick}>ZAPAS</Link>
              <Link to="#" onClick={handleLinkClick}>CARGOS</Link>
              <Link to="#" onClick={handleLinkClick}>BACKPACKS</Link>
              <Link to="#" onClick={handleLinkClick}>GORRAS</Link>
            </div>
          </li>
          <li>
            <Link to="/Navegacion" onClick={handleLinkClick}>INFORMACION</Link>
          </li>
          <li>
            <Link to="/Cambios" onClick={handleLinkClick}>CAMBIOS</Link>
          </li>
          <li>
            <Link to="/Contactos" onClick={handleLinkClick}>CONTACTOS</Link>
          </li>
          <li className="dropdown">
            <a href="#model-3" className="dropbtn">
              LOGIN
            </a>
            <div className="dropdown-content">
              <Link to="#" onClick={handleLinkClick}>INICIAR SESION</Link>
              <Link to="#" onClick={handleLinkClick}>REGISTRARSE</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-tesla__cta divNavbar">
        <button className="iconos" onClick={openModal}>
          <RiSearchLine size={20} />
        </button>
        <button className="iconos" onClick={openCanvas}>
          <IoCartSharp size={20} />
        </button>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <FiAlignJustify size={20} />
        </button>
      </div>
      {showModal && <ModalSearch closeModal={closeModal} />}
      {showOutsideCanvas && (
        <ModalCarrito closeCanvas={closeCanvas} />
      )}
    </nav>
  );
};

export default AppNavbar;
