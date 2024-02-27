import React, { useEffect } from "react";
import CardsImg from "./CardsImg";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

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
  {
    id: uuidv4(),
    titulo: "ZAPAS",
    img: "./zapas/zapa13.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "CARGOS",
    img: "./cargos/cargo5.jpeg",
  },
];

const ListPrincipales = () => {
  return (
    <nav className="rounded-xl py-5 flex justify-center flex-wrap gap-3 max-w-[1020px] my-8 mx-auto animate__animated animate__fadeIn">
      {principales.map((item, index) => (
        <CardsImg
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
