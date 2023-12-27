import React from "react";
import "./ListCard.css";

const ListCard = ({precio,titulo,img}) => {
  return (
    <div className="card">
      <a href="#product-link" className="product-image-link">
        <div className="image-container">
          <img
            src={img}
            alt={titulo}
            className="product-image"
          />
          <span className="free-shipping-bottom-inside">ENVIOS GRATIS</span>
        </div>
        <span className="free-shipping-top-right">15% OFF</span>
      </a>
      <div className="card-body">
        <a href="#product-link" className="product-title-link">
          <h3 className="product-title">{titulo}</h3>
        </a>
        <div className="product-details">
          <div className="price-section">
            <p className="product-price">
              Precio
              <span className="price-divider"></span>
              <span className="price-text">${precio}</span>
            </p>
          </div>
          <span className="installments">3 cuotas sin interés</span>
          <button className="add-to-cart-btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
