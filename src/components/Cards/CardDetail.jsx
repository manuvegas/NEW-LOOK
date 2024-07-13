import React, { useState, useEffect } from "react";
import CardInspect from "../Cards/CardInspect";
import { useParams } from "react-router-dom";
import { getProductById } from "@/Fetching/products.feching";
import Loader from "../Icons/Loader";

const CardDetail = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductById(pid).then((producto) => {
      setLoading(false);
      setProduct(producto);
    });
  }, []);

  return (
    <div className="flex justify-center items-center pt-20 pb-48">
      {loading ? (
        <Loader />
      ) : (
        <CardInspect
          _id={product._id}
          img={product.img}
          titulo={product.titulo}
          precio={product.precio}
          cuotas={product.cuotas}
          colores={product.colores}
          descripcion={product.descripcion}
        />
      )}
    </div>
  );
};

export default CardDetail;
