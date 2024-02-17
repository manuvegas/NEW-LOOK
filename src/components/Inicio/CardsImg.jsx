import React from "react";
import "./CardsImg.css";
import { Link } from "react-router-dom";

const CardsImg = ({ titulo, img,}) => {
  return (
    <div className="divCard">
      <Link to={`/CardMap/${titulo}`}>
        <div className="btnCard">
          <img src={img} alt={titulo} className="imgCard" />
          <div className="tituloCard">{titulo}</div>
        </div>
      </Link>
    </div>
  );
};

export default CardsImg;
