import React, { useState, useEffect } from "react";
import CardInspect from "../ListCards/CardInspect";
import { useLocation, useParams } from "react-router-dom";

const InspectMap = () => {
  const [prendas, setPrendas] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    fetch(`../prendas.json`)
      .then((reponse) => reponse.json())
      .then((data) => {
        setPrendas(data);
      })
      .catch((error) => console.error("error al cargar los datos:", error));
  }, []);

  const productSelect = prendas.find((item) => item.id === parseInt(id));

  return (
    <div className="flex justify-center items-center pt-20">
      {productSelect ? (
        <CardInspect
          img={productSelect.img}
          titulo={productSelect.titulo}
          precio={productSelect.precio}
          cuotas={productSelect.cuotas}
          colores={productSelect.colores}
        />
      ) : (
        <p className="text-white text-2xl">Producto no encontrado</p>
      )}
    </div>
  );
};

export default InspectMap;
