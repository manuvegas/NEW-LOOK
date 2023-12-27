import React from "react";
import ListCard from "./ListCard";

const remeras = [
  {
    id: 12313,
    img: "../../../public/img(remeras)/remera1.jpeg",
    titulo: "REMERA 1",
    precio: 20000,
    cuotas: "",
  },
  {
    id: 5462,
    img: "../../../public/img(remeras)/remera2.jpeg",
    titulo: "REMERA 2",
    precio: 20000,
    cuotas: "",
  },
  {
    id: 786,
    img: "../../../public/img(remeras)/remera3.jpeg",
    titulo: "REMERA3",
    precio: 20000,
    cuotas: "",
  },
  {
    id: 18923,
    img: "../../../public/img(remeras)/remera4.jpeg",
    titulo: "REMERA 4",
    precio: 20000,
    cuotas: "",
  },
  {
    id: 235532,
    img: "../../../public/img(remeras)/remera5.jpeg",
    titulo: "REMERA 5",
    precio: 20000,
    cuotas: "",
  },
  {
    id: 346642,
    img: "../../../public/img(remeras)/remera6.jpeg",
    titulo: "REMERA 6",
    precio: 20000,
    cuotas: "",
  },
  {
    id: 4423442,
    img: "../../../public/img(remeras)/remera7.jpeg",
    titulo: "REMERA 7",
    precio: 20000,
    cuotas: "",
  },
  {
    id: 794579,
    img: "../../../public/img(remeras)/remera8.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  },
  {
    id: 567268,
    img: "../../../public/img(remeras)/remera9.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  },
  {
    id: 4807433,
    img: "../../../public/img(remeras)/remera10.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  },
  {
    id: 4807444,
    img: "../../../public/img(remeras)/remera11.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  },
  {
    id: 4807443,
    img: "../../../public/img(remeras)/remera12.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  },
  {
    id: 4807443,
    img: "../../../public/img(remeras)/remera13.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  },
  {
    id: 48072334,
    img: "../../../public/img(remeras)/remera14.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  },
  {
    id: 4807674,
    img: "../../../public/img(remeras)/remera15.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  },
  {
    id: 480767409,
    img: "../../../public/img(remeras)/remera16.jpeg",
    titulo: "",
    precio: "",
    cuotas: "",
  }
];

const ListRemera = () => {
  return (
    <nav className="navCard">
      {remeras.map((item, index) => (
        <ListCard
          id={item.id}
          titulo={item.titulo}
          img={item.img}
          cuotas={item.cuotas}
          precio={item.precio}
          key={index}
        />
      ))}
    </nav>
  );
};

export default ListRemera;
