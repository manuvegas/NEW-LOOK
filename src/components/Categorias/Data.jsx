import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { FaTruck } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import "./CardsImg.css";

const Data = () => {
  const iconsData = [
    {
      icon: <FaTruck className="iconosCarrusel" />,
      text: "ENVIOS GRATIS A TODO EL PAIS",
      span: "COMPRA SIN SALIR DE TU CASA",
    },
    {
      icon: <CiCreditCard1 className="iconosCarrusel" />,
      text: "3 CUOTAS SIN INTERES",
      span: "CON TODAS LAS TARJETAS",
    },
    {
      icon: <BsBank2 className="iconosCarrusel" />,
      text: "15% OFF",
      span: "TRANSFERENCIA BANCARIA",
    },
  ];

  return (
    <div className="container mt-4">
      <Carousel>
        {iconsData.map((item, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex flex-column align-items-center justify-content-center carruselInicio">
              {item.icon}
              <p className="text-center">{item.text}</p>
              <span className="text-center">{item.span}</span>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Data;
