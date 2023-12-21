import React from 'react'
import CardsImg from "./CardsImg"

const principales = [
    {
      id: 1,
      titulo: "REMERAS",
      img:"air jordan.jpeg",
    },
    {
      id: 2,
      titulo: "BUZOS",
      img:"jordan overside.jpeg",
    },
    {
      id: 3,
      titulo: "JOGGINS",
      img: "classic nike.jpeg",
    },
    {
      id: 4,
      titulo: "BERMUDAS",
      img: "bermuda.jpeg",
    },
    {
      id: 5,
      titulo: "ZAPATILLAS",
      img: "retro.jpeg",
    },
    {
      id: 6,
      titulo: "CARGO",
      img: "cargo.jpeg",
    },
    {
      id: 7,
      titulo: "BACKPACKS",
      img: "mochila.jpeg",
    },
    {
      id: 8,
      titulo: "GORRA",
      img: "gorra.jpeg",
    }
  ];
  
  const ListPrincipales = () => {
    return (
      <nav className='linkCard'>
        {principales.map((item) => (
          <CardsImg
            id={item.id}
            titulo={item.titulo}
            img={item.img}
            key={item.id}
          />
        ))}
      </nav>
    );
  };
  
  export default ListPrincipales;