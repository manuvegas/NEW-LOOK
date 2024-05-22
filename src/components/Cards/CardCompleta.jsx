import React from "react";
import Card from "./Card";
import BreadCumbs from "../UI/BreadCumbs";
import "animate.css";
import Filtros from "../ComponentsUI/Filtros";

const CardCompleta = ({ data, categoria }) => {
  return (
    <div className="mx-auto px-4 animate__animated animate__fadeIn">
      <div className="mx-auto text-white">
        <div className="flex justify-around items-center pt-24 mx-auto sm:justify-between">
          <div className="rounded-full">
            <Filtros className="flex items-center"/>
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
          {data.length === 0 ? (
            <p className="text-white">
              No se encontraron resultados con tu búsqueda.
            </p>
          ) : (
            data.map((item, index) => (
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
