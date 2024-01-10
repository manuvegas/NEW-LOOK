import React,{ useEffect }  from "react";
import CardsImg from "./CardsImg";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const principales = [
  {
    id: uuidv4(),
    titulo: "REMERAS",
    img: "air jordan.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "BUZOS",
    img: "jordan overside.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "JOGGINS",
    img: "classic nike.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "BERMUDAS",
    img: "bermuda.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "ZAPAS",
    img: "retro.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "CARGOS",
    img: "cargo.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "BACKPACKS",
    img: "mochila.jpeg",
  },
  {
    id: uuidv4(),
    titulo: "GORRAS",
    img: "gorra.jpeg",
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
