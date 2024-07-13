import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardsHome from "./CardsHome";
import "./Principales.css"

const principales = [
  {
    id: uuidv4(),
    img: "./assets/remera17.jpeg",
    categoria:"remera"
  },
  {
    id: uuidv4(),
    img: "./assets/buzo5.jpeg",
    categoria:"buzo"
  },
  {
    id: uuidv4(),
    img: "./assets/pantalones.png",
    categoria:"pantalon"
  },
  {
    id: uuidv4(),
    img: "./assets/abrigos.png",
    categoria:"campera"
  },
];

const ListPrincipales = () => {
  return (
    <div className="contenedor mt-4">
      {principales.map((item, index) => (
        <CardsHome
          id={item.id}
          titulo={item.titulo}
          img={item.img}
          categoria={item.categoria}
          key={index}
        />
      ))}
    </div>
  );
};

export default ListPrincipales;
