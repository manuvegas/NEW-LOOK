import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardCompleta from "./CardCompleta";

const remeras = [
  {
    id: uuidv4(),
    img: "/img(remeras)/remera1.jpeg",
    titulo: "REMERA 1",
    off: 30,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"WHITE"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera2.jpeg",
    titulo: "REMERA 2",
    off: 20,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera3.jpeg",
    titulo: "REMERA3",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera4.jpeg",
    titulo: "REMERA 4",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera5.jpeg",
    titulo: "REMERA 5",
    off: 23,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"WHITE"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera6.jpeg",
    titulo: "REMERA 6",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera7.jpeg",
    titulo: "REMERA 7",
    off: 20,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera8.jpeg",
    titulo: "REMERA 8",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera9.jpeg",
    titulo: "REMERA 9",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera10.jpeg",
    titulo: "REMERA 10",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BEIGE"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera11.jpeg",
    titulo: "REMERA 11",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BEIGE"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera12.jpeg",
    titulo: "REMERA 12",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera13.jpeg",
    titulo: "REMERA 13",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"BLACK"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera14.jpeg",
    titulo: "REMERA 14",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"WHITE"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera15.jpeg",
    titulo: "REMERA 15",
    off: 23,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"WHITE"
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera16.jpeg",
    titulo: "REMERA 16",
    off: 15,
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
    color:"WHITE"
  },
];

const ListRemeras = () => {
  remeras.forEach((remera) => {
    remera.precio = remera.antiguo - (remera.antiguo * remera.off) / 100;
  });

  return <CardCompleta data={remeras} defaultSortBy="default" />;
};

export default ListRemeras;
