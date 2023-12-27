import React from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";

const backs = [
  {
    id: uuidv4(),
    img: "../../../public/mochilas/back1.jpeg",
    titulo: "Back 1",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "../../../public/mochilas/back2.jpeg",
    titulo: "Back 2",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "../../../public/mochilas/back3.jpeg",
    titulo: "Back 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "../../../public/mochilas/back4.jpeg",
    titulo: "Back 4",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  }
];

const ListBackpacks = () => {
  return (
    <nav className="navCard">
      {backs.map((item, index) => (
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

export default ListBackpacks;
