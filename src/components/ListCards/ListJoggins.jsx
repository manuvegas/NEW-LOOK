import React from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";

const joggins = [
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin1.jpeg",
    titulo: "JOGGIN 1",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin2.jpeg",
    titulo: "JOGGIN 2",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin3.jpeg",
    titulo: "JOGGIN 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin4.jpeg",
    titulo: "JOGGIN 4",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin5.jpeg",
    titulo: "JOGGIN 5",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin6.jpeg",
    titulo: "JOGGIN 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin7.jpeg",
    titulo: "JOGGIN 7",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin8.jpeg",
    titulo: "JOGGIN 8",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin9.jpeg",
    titulo: "JOGGIN 9",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin10.jpeg",
    titulo: "JOGGIN 10",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin11.jpeg",
    titulo: "JOGGIN 11",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
];

const ListJoggins = () => {
  return (
    <nav className="navCard">
      {joggins.map((item, index) => (
        <ListCard
          id={item.id}
          titulo={item.titulo}
          img={item.img}
          antiguo={item.antiguo}
          cuotas={item.cuotas}
          off={item.off}
          precio={item.precio}
          key={index}
        />
      ))}
    </nav>
  );
};

export default ListJoggins;
