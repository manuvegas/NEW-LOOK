import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "./Card";
import BreadCumbs from "../UI/BreadCumbs";
import "animate.css";
import Filtros from "../ComponentsUI/Filtros";

const CardCompleta = ({ categoria }) => {
  const location = useLocation();
  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual
  const [prendas, setPrendas] = useState([]);
  const { titulo } = useParams();

  useEffect(() => {
    fetch("../prendas.json") // Asegúrate de que esta ruta sea correcta
      .then((response) => response.json())
      .then((data) => {
        const prendasFiltradas = data.filter(
          (item) => item.categoria === titulo
        );
        setPrendas(prendasFiltradas);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, [titulo]);

  return (
    <div className="mx-auto px-4 animate__animated animate__fadeIn">
      <div className="mx-auto text-white">
        <div className="flex justify-around items-center pt-24 mx-auto sm:justify-between">
          <div className="rounded-full">
            <Filtros className="flex items-center" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">{categoria}</h1>
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <BreadCumbs />
        </div>
      </div>
      <div>
        <nav className="flex flex-wrap justify-center items-center mx-auto my-1 ">
          {prendas.length === 0 ? (
            <p className="text-white">
              No se encontraron resultados con tu búsqueda.
            </p>
          ) : (
            prendas.map((item, index) => (
              <Card
                id={item.id}
                titulo={item.titulo}
                img={item.img}
                antiguo={item.antiguo}
                cuotas={item.cuotas}
                off={item.off}
                precio={item.precio}
                key={index}
              />
            ))
          )}
        </nav>
      </div>
    </div>
  );
};

export default CardCompleta;
