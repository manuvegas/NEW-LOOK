import React from "react";
import "./Carrusel.css";
import { FaTruck } from "react-icons/fa";

const ListDestacados = ({ precio, titulo, img, off, antiguo }) => {
  return (
    <div className="card-destacados">
      <a href="" className="product-image-link-destacados">
        <div className="image-container-destacados">
          <img src={img} alt={titulo} className="product-image-destacados" />
          <span className="free-shipping-bottom-inside">ENVIOS GRATIS <FaTruck  size={12}/> </span>
        </div>
        <span className="free-shipping-top-right-destacados">{off}% OFF</span>
      </a>
      <div className="card-body-destacados">
        <a href="#product-link" className="product-title-link-destacados">
          <h3 className="product-title-destacados">{titulo}</h3>
        </a>
        <div className="product-details-destacados">
          <div className="price-section-destacados">
            <p className="product-price-destacados">{antiguo}</p>
            <span className="price-divider-destacados"></span>
            <span className="price-text-destacados">${precio}</span>
          </div>
          <span className="installments-destacados">3 cuotas sin interés de </span>
          <button className="add-to-cart-btn-destacados">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ListDestacados;