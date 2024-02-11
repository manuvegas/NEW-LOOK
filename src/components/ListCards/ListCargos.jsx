import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardCompleta from "./CardCompleta";

const cargos = [
  {
    id: uuidv4(),
    img: "/cargos/cargo1.jpeg",
    titulo: "CARGO 1",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "GREEN",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo2.jpeg",
    titulo: "CARGO 2",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BEIGE",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo3.jpeg",
    titulo: "CARGO 3",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo4.jpeg",
    titulo: "CARGO 4",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo5.jpeg",
    titulo: "CARGO 5",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo6.jpeg",
    titulo: "CARGO 6",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo7.jpeg",
    titulo: "CARGO 7",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo8.jpeg",
    titulo: "CARGO 8",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo9.jpeg",
    titulo: "CARGO 9",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo10.jpeg",
    titulo: "CARGO 10",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo11.jpeg",
    titulo: "CARGO 11",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo12.jpeg",
    titulo: "CARGO 12",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color: "BLACK",
  },
];

const ListCargos = () => {
  cargos.forEach((cargo) => {
    cargo.precio = cargo.antiguo - (cargo.antiguo * cargo.off) / 100;
  });

  return <CardCompleta data={cargos} defaultSortBy="default" />;
};

export default ListCargos;
