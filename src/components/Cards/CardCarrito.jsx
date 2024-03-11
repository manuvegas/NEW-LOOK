import React from "react";
import Button from "../UI/Button"

const CardCarrito = ({ producto, eliminarProducto }) => {
  return (
    <div className="mx-auto max-w-[450px]">
      <div className="flex justify-center border-b py-3">
        <img
          src={producto.img}
          alt={producto.titulo}
          className="w-16 h-24 object-cover mr-4"
        />
        <div className="me-5">
          <h3 className="text-lg font-extrabold">{producto.titulo}</h3>
          <p className="">Precio: <span className="font-semibold">${producto.precio}</span></p>
          <p className="">Cantidad: <span className="font-semibold">{producto.cantidad}</span></p>
          <p className="">Cuotas: <span className="font-semibold">{producto.cuotas} sin interes</span></p>
        </div>
        <Button
          className="text-white font-extrabold top-6"
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default CardCarrito;
