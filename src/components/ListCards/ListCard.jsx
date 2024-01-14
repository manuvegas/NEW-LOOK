import React from "react";
import "./ListCard.css";
import { FaTruck } from "react-icons/fa";

const ListCard = ({ precio, titulo, img, off, antiguo }) => {
  return (
    <div className="card">
      <a href="" className="product-image-link">
        <div className="image-container">
          <img src={img} alt={titulo} className="product-image" />
          <span className="free-shipping-bottom-inside">ENVIOS GRATIS <FaTruck  size={12}/> </span>
        </div>
        <span className="free-shipping-top-right">{off}% OFF</span>
      </a>
      <div className="card-body">
        <a href="#product-link" className="product-title-link">
          <h3 className="product-title">{titulo}</h3>
        </a>
        <div className="product-details">
          <div className="price-section">
            <p className="product-price">{antiguo}</p>
            <span className="price-divider"></span>
            <span className="price-text">${precio}</span>
          </div>
          <span className="installments">3 cuotas sin interés de </span>
          <button className="add-to-cart-btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
