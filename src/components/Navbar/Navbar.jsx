import "./Inicio.css";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OffCanvasSearch from "./OffCanvasSearch";
import OffCanvasCarrito from "./OffCanvasCarrito";
import OffCanvasProducts from "./OffCanvasProducts";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchCanvas, setShowSearchCanvas] = useState(false);
  const [showCarritoCanvas, setShowCarritoCanvas] = useState(false);
  const [showProductsCanvas, setShowProductsCanvas] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const openSearchCanvas = () => {
    setShowSearchCanvas(true);
  };

  const openCarritoCanvas = () => {
    setShowCarritoCanvas(true);
  };

  const openProductsCanvas = () => {
    setShowProductsCanvas(true);
  };

  const closeCanvas = () => {
    setShowSearchCanvas(false);
    setShowCarritoCanvas(false);
    setShowProductsCanvas(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cerrar el menú al hacer clic en un enlace
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="../UI/Logo.png" alt="NewLook" className="logo" />
        </Link>
      </div>

      <div className={isOpen ? "navbarLinks open" : "navbarLinks"}>
        <ul className="ul-navbar">
          <li className="li-navbar">
            <Link to="/" onClick={handleLinkClick}>
              HOME
            </Link>
          </li>
          <li className="li-navbar">
            <button className="btn-products" onClick={openProductsCanvas}>
              PRODUCTOS
            </button>
          </li>
          <li className="li-navbar">
            <Link to="/Contactos" onClick={handleLinkClick}>
              CONTACTOS
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbarCta">
        <Link className="user-navbar">
          <FaUser className="icono" size={22} />
        </Link>
        <button className="iconos" onClick={openSearchCanvas}>
          <RiSearchLine className="icono" size={25} />
        </button>
        <button className="iconos" onClick={openCarritoCanvas}>
          <IoCartSharp className="icono" size={25} />
        </button>
        <button className="iconos" onClick={toggleMenu}>
          <FiAlignJustify className="icono" size={25} />
        </button>
      </div>
      {showSearchCanvas && (
        <OffCanvasSearch isOpen={showSearchCanvas} closeCanvas={closeCanvas} />
      )}
      {showCarritoCanvas && (
        <OffCanvasCarrito
          isOpen={showCarritoCanvas}
          closeCanvas={closeCanvas}
        />
      )}
      {showProductsCanvas && (
        <OffCanvasProducts
          isOpen={showProductsCanvas}
          closeCanvas={closeCanvas}
        />
      )}
    </nav>
  );
};

export default AppNavbar;
