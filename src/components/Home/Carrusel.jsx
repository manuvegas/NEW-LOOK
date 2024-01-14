import React from "react";
import "./Carrusel.css"; // Asegúrate de tener la ruta correcta

const Carrusel = ({ prevSlide, nextSlide, children }) => {
  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-content">{children}</div>
      <button className="carousel-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carrusel;
