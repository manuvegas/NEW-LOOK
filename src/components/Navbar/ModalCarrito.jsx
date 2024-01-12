import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const ModalCarrito = ({ closeCanvas }) => {
  return (
    <div className="modalCarrito">
      <div className="canvas-content">
        <div className="divCarrito">
          <button className="cerrarCarrito">
            <IoCloseOutline className="cerrar" size={45} onClick={closeCanvas} />
          </button>
        </div>
        <p className="CarritoVacio">CARRITO VACÍO</p>
      </div>
    </div>
  );
};

export default ModalCarrito;
