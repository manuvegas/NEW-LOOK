import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "./Card";
import BreadCumbs from "../UI/BreadCumbs";
import "animate.css";
import Filtros from "../ComponentsUI/Filtros";
import { getAllProducts } from "../../Fetching/products.feching";
import Loader from "../Icons/Loader";

const CardCompleta = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [prendas, setPrendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    getAllProducts()
      .then((productos) => {
        setLoading(false);
        const prendasFiltradas = productos.filter(
          (item) => item.categoria.toLowerCase() === categoria.toLowerCase()
        );
        setPrendas(prendasFiltradas);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error.message);
      });
  }, [categoria]);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const productosData = await getAllProducts();
      setProductos(productosData);
    } catch (error) {
      console.error("Error al obtener los productos:", error.message);
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = productos.filter((producto) => producto._id !== productId);
    setProductos(updatedProducts);
    setPrendas(prendas.filter((producto) => producto._id !== productId));
  };

  return (
    <div>
      <div className="mt-5 animate__animated animate__fadeIn">
        {loading ? (
          <Loader />
        ) : (
          <>
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
                {prendas.map((item) => (
                  <Card
                    _id={item._id}
                    titulo={item.titulo}
                    img={item.img}
                    precio={item.precio}
                    cuotas={item.cuotas}
                    key={item._id}
                    onDelete={handleDeleteProduct}
                  />
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardCompleta;
