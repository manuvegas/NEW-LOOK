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
    <div className="mt-5 animate__animated animate__fadeIn">
     
      <div className="text-white flex mb-5">
        <div className="flex flex-col pt-24">
          <div className="mb-2">
            <BreadCumbs />
          </div>
          <div className="">
            <Filtros className="flex items-center" />
          </div>
        </div>
      </div> 
      <div className="flex mx-auto flex-wrap justify-center">
        <nav className="contenedor2 mb-10">
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
