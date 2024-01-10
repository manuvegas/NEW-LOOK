import React,{ useEffect }  from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const zapas = [
  {
    id: uuidv4(),
    img: "/zapas/zapa1.jpeg",
    titulo: "ZAPA 1",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa2.jpeg",
    titulo: "ZAPA 2",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa3.jpeg",
    titulo: "ZAPA 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa4.jpeg",
    titulo: "ZAPA 4",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa5.jpeg",
    titulo: "ZAPA 5",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa6.jpeg",
    titulo: "ZAPA 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa7.jpeg",
    titulo: "ZAPA 7",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa8.jpeg",
    titulo: "ZAPA 8",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa9.jpeg",
    titulo: "ZAPA 9",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa10.jpeg",
    titulo: "ZAPA 10",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa11.jpeg",
    titulo: "ZAPA 11",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa12.jpeg",
    titulo: "ZAPA 12",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa13.jpeg",
    titulo: "ZAPA 13",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa14.jpeg",
    titulo: "Back 14",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
];

const ListZapas = () => {
  const location = useLocation();

  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual
  return (
    <nav className="navCard">
      {zapas.map((item, index) => (
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

export default ListZapas;
