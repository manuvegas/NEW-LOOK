import React from "react";
import { FaTimes } from "react-icons/fa";

const ModalCarrito = ({ closeCanvas }) => {
  return (
    <div className="modalCarrito">
      <div className="canvas-content">
        <div className="divCarrito">
          <h2 className="tituloCarrito">CARRITO DE COMPRAS</h2>
          <button className="cerrarCarrito">
            <FaTimes className="cerrar" size={35} onClick={closeCanvas} />
          </button>
        </div>
        <p className="CarritoVacio">CARRITO VACÍO</p>
      </div>
    </div>
  );
};

export default ModalCarrito;
