import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardCompleta from "./CardCompleta";

const CardMap = () => {
  const [prendas, setPrendas] = useState([]);
  const location = useLocation();
  const { titulo } = useParams();

  useEffect(() => {
    fetch(`../prendas.json`)
      .then((reponse) => reponse.json())
      .then((data) => {
        const prendasFiltradas = data.filter(
          (item) => item.categoria === titulo
        );
        setPrendas(prendasFiltradas);
      })
      .catch((error) => console.error("error al cargar los datos:", error));
  }, [titulo]);

  prendas.forEach((prenda) => {
    prenda.precio = prenda.antiguo - (prenda.antiguo * prenda.off) / 100;
  });

  return <CardCompleta data={prendas} defaultSortBy="default" categoria={titulo} />;
};

export default CardMap;
