import React from "react";
import { FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const ListCard = ({ precio, titulo, img, off, antiguo, id, cuotas }) => {
  let precioFinal = precio;

  if (off && antiguo) {
    precioFinal = (antiguo - (antiguo * off) / 100).toFixed();
  }
  let precioPorCuota = null;

  if (cuotas && cuotas !== "no") {
    precioPorCuota = (precio / cuotas).toFixed();
  }

  return (
    <div className="bg-black text-white w-80 p-2 border border-transparent transition-transform duration-500 ease-in-out transform-gpu hover:scale-110  rounded-lg overflow-hidden text-center mx-2 my-5 relative h-full">
      <Link to={`/InspectMap/${id}`} className="block relative">
        <div className="relative">
          <img src={img} alt={titulo} className="w-80 h-96 object-cover" />
          {off && off !== "no" && (
            <span className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1">
              {off}% OFF
            </span>
          )}
          <span className="absolute bottom-2 bg-black bg-opacity-75 text-white py-1 px-2 left-1/2 transform -translate-x-1/2 text-xs">
            ENVIOS GRATIS <FaTruck size={18} className="inline" />
          </span>
        </div>
      </Link>
      <div className="p-2">
        <Link to={`/InspectMap/${id}`} className="text-white text-lg font-bold">
          {titulo}
        </Link>
        <div className="mt-2">
          {antiguo && antiguo !== "no" && (
            <>
              <p className="text-gray-400 line-through inline">${antiguo}</p>
              <span className="text-white mx-2">|</span>
            </>
          )}
          <span className="text-white font-bold">${precioFinal}</span>
        </div>
        {cuotas && cuotas !== "no" && (
          <span className="block text-white text-sm mt-2">
            {cuotas} cuotas sin interés de ${precioPorCuota}
          </span>
        )}
        <Button className=" text-white py-2 px-4 mt-2 rounded hover:bg-dark hover:text-white">
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ListCard;
