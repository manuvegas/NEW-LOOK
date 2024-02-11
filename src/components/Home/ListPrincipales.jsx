import React,{ useEffect }  from "react";
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
    img: "./img(buzos)/buzo4.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "JOGGINS",
    img: "./img(joggins)/joggin6.jpeg",
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
  const location = useLocation();

  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual

  return (
    <nav className="linkCard">
      {principales.map((item) => (
        <CardsImg
          id={item.id}
          titulo={item.titulo}
          img={item.img}
          key={item.id}
          routeTo={`/List${item.titulo.charAt(0).toUpperCase()}${item.titulo
            .slice(1)
            .toLowerCase()}`}
        />
      ))}
    </nav>
  );
};

export default ListPrincipales;
