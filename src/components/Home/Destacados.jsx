import React from "react";
import ListCard from "../ListCards/ListCard";
import { v4 as uuidv4 } from "uuid";

const destacados = [
  {
    id: uuidv4(),
    img: "/img(remeras)/remera6.jpeg",
    titulo: "REMERA 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo3.jpeg",
    titulo: "CARGO 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda4.jpeg",
    titulo: "BERMUDA 4",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo5.jpeg",
    titulo: "BUZO 5 ",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo11.jpeg",
    titulo: "CARGO 11",
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
    img: "/img(remeras)/remera7.jpeg",
    titulo: "REMERA 7",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa10.jpeg",
    titulo: "ZAPAS 10",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa14.jpeg",
    titulo: "ZAPAS 14",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera12.jpeg",
    titulo: "REMERA 12",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
];

const Destacados = () => {
  return (
    <nav className="destacados">
      {destacados.map((item, index) => (
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

export default Destacados;
