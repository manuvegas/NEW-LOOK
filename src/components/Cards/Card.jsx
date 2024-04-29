import React from "react";
import { FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import  {Button } from "../UI/Button";

const Card = ({ precio, titulo, img, off, antiguo, id, cuotas }) => {
  let precioFinal = precio;

  if (off && antiguo) {
    precioFinal = (antiguo - (antiguo * off) / 100).toFixed();
  }
  let precioPorCuota = null;

  if (cuotas && cuotas !== "no") {
    precioPorCuota = (precio / cuotas).toFixed();
  }

  return (
    <div className="bg-black w-80 p-2 border border-transparent overflow-hidden text-center mx-2 my-5 relative h-full rounded-none bg-gradient-to-br shadow-2xl">
      <Link to={`/InspectMap/${id}`} className="block relative">
        <div className="relative">
          <img src={img} alt={titulo} className="w-80 h-96 object-cover" />
          {off && off !== "no" && (
            <span className="absolute top-0 right-0 bg-black bg-opacity-75  px-2 py-1">
              {off}% OFF
            </span>
          )}
          <span className="absolute bottom-2 bg-black bg-opacity-75  py-1 px-2 left-1/2 transform -translate-x-1/2 text-xs">
            ENVIOS GRATIS <FaTruck size={18} className="inline" />
          </span>
        </div>
      </Link>
      <div className="p-2">
        <Link to={`/InspectMap/${id}`} className=" text-lg font-bold">
          {titulo}
        </Link>
        <div className="mt-2">
          {antiguo && antiguo !== "no" && (
            <>
              <p className="line-through inline">${antiguo}</p>
              <span className=" mx-2">|</span>
            </>
          )}
          <span className=" font-bold">${precioFinal}</span>
        </div>
        <span className="block text-sm mt-2">
          {cuotas} cuotas sin interés de ${precioPorCuota}
        </span>

        <Button
          className="transition-transform duration-500 ease-in-out transform-gpu hover:scale-110 py-2 px-4 mt-2 rounded hover:bg-dark hover:text-white"
          variant="outline"
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default Card;
