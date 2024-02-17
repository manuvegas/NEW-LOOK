import React from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import "./OffCanvas.css"

const OffCanvasProducts = ({ isOpen, closeCanvas }) => {
  // Función para manejar el cierre del offcanvas
  const handleClose = () => {
    closeCanvas();
  };

  // Función para manejar la selección de un producto
  const handleProductClick = () => {
    // Aquí puedes implementar la lógica para redirigir a la página de productos
    // Por ahora, solo cerraremos el offcanvas
    closeCanvas();
  };

  return (
    <div className={`offcanvas ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div className="offcanvas-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          <IoCloseOutline className="cerrar" size={45} />
        </button>
        <div className="products-list">
          <h2>Productos</h2>
          <ul>
            <li onClick={handleProductClick}>
              <Link to="/productos/remeras">Remeras</Link>
            </li>
            <li onClick={handleProductClick}>
              <Link to="/productos/pantalones">Pantalones</Link>
            </li>
            <li onClick={handleProductClick}>
              <Link to="/productos/zapatos">Zapatos</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasProducts;