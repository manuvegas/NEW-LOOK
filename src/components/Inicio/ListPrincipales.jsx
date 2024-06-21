import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardsHome from "./CardsHome";
import "./Principales.css"

const principales = [
  {
    id: uuidv4(),
    titulo: "REMERAS",
    img: "./img(remeras)/remera15.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "BUZOS",
    img: "./img(buzos)/buzo5.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "JOGGINS",
    img: "./img(joggins)/joggin15.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "BERMUDAS",
    img: "./bermudas/bermuda6.jpeg",
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
          key={index}
        />
      ))}
    </div>
  );
};

export default ListPrincipales;
