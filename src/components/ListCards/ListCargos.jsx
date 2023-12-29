import React from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";

const cargos=[
  {
    id: uuidv4(),
    img: "/public/cargos/cargo1.jpeg",
    titulo: "CARGO 1",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo2.jpeg",
    titulo: "CARGO 2",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo3.jpeg",
    titulo: "CARGO 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo4.jpeg",
    titulo: "CARGO 4",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo5.jpeg",
    titulo: "CARGO 5",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo6.jpeg",
    titulo: "CARGO 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo7.jpeg",
    titulo: "CARGO 7",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo8.jpeg",
    titulo: "CARGO 8",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo9.jpeg",
    titulo: "CARGO 9",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo10.jpeg",
    titulo: "CARGO 10",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo11.jpeg",
    titulo: "CARGO 11",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/public/cargos/cargo12.jpeg",
    titulo: "CARGO 12",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
]

const ListCargos = () => {
  return (
    <nav className="navCard">
      {cargos.map((item, index) => (
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
  )
}

export default ListCargos