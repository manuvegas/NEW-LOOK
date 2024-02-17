import React from "react";

const OffCanvasFiltros = ({ isOpen, toggleFilters, children }) => {
  return (
    <>
      <div className={`offcanvas-filtros ${isOpen ? "open" : ""}`}>
        <div className="offcanvas-content-filtros">{children}</div>
      </div>
      <div
        className={`offcanvas-overlay-filtros ${isOpen ? "open" : ""}`}
        onClick={toggleFilters}
      ></div>
    </>
  );
};

export default OffCanvasFiltros;
