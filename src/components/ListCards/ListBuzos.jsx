import React from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";

const buzos = [
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo1.jpeg",
    titulo: "BUZO 1",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo2.jpeg",
    titulo: "BUZO 2",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo3.jpeg",
    titulo: "BUZO 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo4.jpeg",
    titulo: "BUZO 4",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo5.jpeg",
    titulo: "BUZO 5",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo6.jpeg",
    titulo: "BUZO 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo7.jpeg",
    titulo: "BUZO 7",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo8.jpeg",
    titulo: "BUZO 8",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo9.jpeg",
    titulo: "BUZO 9",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo10.jpeg",
    titulo: "BUZO 10",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo11.jpeg",
    titulo: "BUZO 11",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo12.jpeg",
    titulo: "BUZO 12",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo13.jpeg",
    titulo: "BUZO 13",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo14.jpeg",
    titulo: "BUZO 14",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
];

const ListBuzo = () => {
  return (
    <nav className="navCard">
      {buzos.map((item, index) => (
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

export default ListBuzo;
