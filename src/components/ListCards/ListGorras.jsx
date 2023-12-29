import React from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";

const gorras = [
  {
    id: uuidv4(),
    img: "/gorras/gorra1.jpeg",
    titulo: "GORRAS 1",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/gorras/gorra2.jpeg",
    titulo: "GORRAS 2",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/gorras/gorra3.jpeg",
    titulo: "GORRAS 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/gorras/gorra4.jpeg",
    titulo: "GORRAS 4",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/gorras/gorra5.jpeg",
    titulo: "GORRAS 5",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/gorras/gorra6.jpeg",
    titulo: "GORRAS 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
];

const ListGorras = () => {
  return (
    <nav className="navCard">
      {gorras.map((item, index) => (
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

export default ListGorras;
