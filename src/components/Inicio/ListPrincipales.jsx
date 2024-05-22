import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardsHome from "./CardsHome";

const principales = [
  {
    id: uuidv4(),
    titulo: "REMERAS",
    img: "./img(remeras)/remera2.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "BUZOS",
    img: "./img(buzos)/buzo9.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "JOGGINS",
    img: "./img(joggins)/joggin18.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "BERMUDAS",
    img: "./bermudas/bermuda2.jpeg",
  },
];

const ListPrincipales = () => {
  return (
    <nav className="flex justify-center flex-wrap gap-3 mt-20 animate__animated animate__fadeIn">
      {principales.map((item, index) => (
        <CardsHome
          id={item.id}
          titulo={item.titulo}
          img={item.img}
          key={index}
        />
      ))}
    </nav>
  );
};

export default ListPrincipales;
