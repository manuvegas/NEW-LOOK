import React from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";

const remeras = [
  {
    id: uuidv4(),
    img: "/img(remeras)/remera1.jpeg",
    titulo: "REMERA 1",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera2.jpeg",
    titulo: "REMERA 2",
    off: "20",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera3.jpeg",
    titulo: "REMERA3",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera4.jpeg",
    titulo: "REMERA 4",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera5.jpeg",
    titulo: "REMERA 5",
    off: "23",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera6.jpeg",
    titulo: "REMERA 6",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera7.jpeg",
    titulo: "REMERA 7",
    off: "20",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera8.jpeg",
    titulo: "",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera9.jpeg",
    titulo: "",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera10.jpeg",
    titulo: "",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera11.jpeg",
    titulo: "",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera12.jpeg",
    titulo: "",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera13.jpeg",
    titulo: "",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera14.jpeg",
    titulo: "",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera15.jpeg",
    titulo: "",
    off: "23",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera16.jpeg",
    titulo: "",
    off: "15",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
];

const ListRemeras = () => {
  return (
    <nav className="navCard">
      {remeras.map((item, index) => (
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

export default ListRemeras;
