import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "./Card";
import BreadCumbs from "../UI/BreadCumbs";
import "animate.css";
import Filtros from "../ComponentsUI/Filtros";
import { getAllProducts } from "../../Fetching/products.feching";

const CardCompleta = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [prendas, setPrendas] = useState([]);
  const { titulo } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        const prendasFiltradas = data.productos.filter(
          (item) => item.categoria === titulo
        );
        setPrendas(prendasFiltradas);
      } catch (error) {
        console.error("Error al cargar los datos:", error.message);
      }
    };
    fetchProducts();
  }, [titulo]);

  return (
    <div className="mt-5 animate__animated animate__fadeIn">
      <div className="text-white flex mb-5 max-w-[1100px] mx-auto">
        <div className="flex flex-col pt-24">
          <div className="mb-2">
            <BreadCumbs />
          </div>
          <div>
            <Filtros className="flex items-center" />
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto">
        <nav className="contenedor2 mb-10">
          {(
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
