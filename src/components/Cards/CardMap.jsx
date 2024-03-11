import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardCompleta from "./CardCompleta";
import OffCanvasCarrito from "../UI/OffCanvasCarrito";
import CardCarrito from "./CardCarrito";

const CardMap = () => {
  const [prendas, setPrendas] = useState([]);
  const location = useLocation();
  const [showCarritoCanvas, setShowCarritoCanvas] = useState(false);
  const [carrito, setCarrito] = useState([]); // Definir el estado del carrito
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

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    // Verificar si el producto ya está en el carrito
    const existenteIndex = carrito.findIndex((item) => item.id === producto.id);
    if (existenteIndex !== -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      const nuevoCarrito = [...carrito];
      nuevoCarrito[existenteIndex].cantidad++;
      setCarrito(nuevoCarrito);
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    setShowCarritoCanvas(true); // Mostrar el offcanvas del carrito después de agregar un producto
  };
  // Función para quitar un producto del carrito
  const quitarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      <CardCompleta
        data={prendas}
        defaultSortBy="default"
        categoria={titulo}
        agregar={agregarAlCarrito}
      />
      {showCarritoCanvas && (
        <OffCanvasCarrito
          isOpen={showCarritoCanvas}
          closeCanvas={() => setShowCarritoCanvas(false)}
        >
          <div>
            <ul>
              {carrito.map((producto) => (
                <li key={producto.id}>
                  <CardCarrito
                    producto={producto}
                    eliminarProducto={quitarDelCarrito}
                  />
                </li>
              ))}
            </ul>
          </div>
        </OffCanvasCarrito>
      )}
    </>
  );
};

export default CardMap;
