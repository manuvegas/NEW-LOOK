import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardCompleta from "./CardCompleta";

const joggins = [
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin1.jpeg",
    titulo: "JOGGIN 1",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"SKYBLUE"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin2.jpeg",
    titulo: "JOGGIN 2",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin3.jpeg",
    titulo: "JOGGIN 3",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin4.jpeg",
    titulo: "JOGGIN 4",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin5.jpeg",
    titulo: "JOGGIN 5",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BEIGE"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin6.jpeg",
    titulo: "JOGGIN 6",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin7.jpeg",
    titulo: "JOGGIN 7",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin8.jpeg",
    titulo: "JOGGIN 8",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BEIGE"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin9.jpeg",
    titulo: "JOGGIN 9",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin10.jpeg",
    titulo: "JOGGIN 10",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin11.jpeg",
    titulo: "JOGGIN 11",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"GREY"
  },
];

const ListJoggins = () => {
  joggins.forEach((joggin) => {
    joggin.precio = joggin.antiguo - (joggin.antiguo * joggin.off) / 100;
  });

  return <CardCompleta data={joggins} categoryKey="titulo" />;
};

export default ListJoggins;
