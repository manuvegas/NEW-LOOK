import React from "react";
import "./CardsImg.css";

const CardsImg = ({titulo,img}) => {
  return (
    <a href="#">
      <div class="btnCard">
        <img src={img} alt={titulo} class="imgCard" />
        <div class="tituloCard">{titulo}</div>
      </div>
    </a>
  );
};

export default CardsImg;
