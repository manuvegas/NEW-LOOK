import React,{ useEffect }  from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const bermudas=[
  {
    id: uuidv4(),
    img: "/bermudas/bermuda1.jpeg",
    titulo: "BERMUDA 1",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda2.jpeg",
    titulo: "BERMUDA 2",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda3.jpeg",
    titulo: "BERMUDA 3",
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
    img: "/bermudas/bermuda5.jpeg",
    titulo: "BERMUDA 5",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda6.jpeg",
    titulo: "BERMUDA 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda7.jpeg",
    titulo: "BERMUDA 7",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda8.jpeg",
    titulo: "BERMUDA 8",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda9.jpeg",
    titulo: "BERMUDA 9",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda10.jpeg",
    titulo: "BERMUDA 10",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda11.jpeg",
    titulo: "BERMUDA 11",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda12.jpeg",
    titulo: "BERMUDA 12",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda13.jpeg",
    titulo: "BERMUDA 13",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda14.jpeg",
    titulo: "BERMUDA 14",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
]

const ListBermudas = () => {
  const location = useLocation();

  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual
  return (
    <nav className="navCard">
      {bermudas.map((item, index) => (
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

export default ListBermudas