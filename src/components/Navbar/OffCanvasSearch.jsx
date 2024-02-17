import React from "react";
import "./OffCanvas.css"
import { IoCloseOutline } from "react-icons/io5";

const OffCanvasSearch = ({ isOpen, closeCanvas }) => {
  return (
    <div className={`offcanvas ${isOpen ? "open" : ""}`} onClick={closeCanvas}>
      <div className="offcanvas-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeCanvas}>
          <IoCloseOutline className="cerrar" size={45} />
        </button>
        <div className="search-box">
          <form>
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasSearch;
