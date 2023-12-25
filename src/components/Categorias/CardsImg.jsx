import React from "react";
import "./CardsImg.css";

const CardsImg = ({ titulo, img }) => {
  return (
    <div className="divCard">
      <a href="#">
        <div className="btnCard">
          <img src={img} alt={titulo} className="imgCard" />
          <div className="tituloCard">{titulo}</div>
        </div>
      </a>
    </div>
  );
};

export default CardsImg;
