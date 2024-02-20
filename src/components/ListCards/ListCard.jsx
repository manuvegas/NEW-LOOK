import React from "react";
import { FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListCard = ({ precio, titulo, img, off, antiguo }) => {
  return (
    <div className="bg-black text-white w-80 p-2 border border-transparent transition-transform duration-500 ease-in-out transform-gpu hover:scale-110  rounded-lg overflow-hidden text-center mx-2 my-5 relative h-full">
      <Link to="" className="block relative">
        <div className="relative">
          <img src={img} alt={titulo} className="w-80 h-96 object-cover" />
          <span className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1">
            {off}% OFF
          </span>
          <span className="absolute bottom-0 bg-black bg-opacity-75 text-white py-1 px-2 left-1/2 transform -translate-x-1/2">
            {off}% OFF <FaTruck size={18} className="inline" />
          </span>
        </div>
      </Link>
      <div className="p-2">
        <Link href="#product-link" className="text-white text-lg font-bold">
          {titulo}
        </Link>
        <div className="mt-2">
          <p className="text-gray-400 line-through inline">${antiguo}</p>
          <span className="text-white mx-2">|</span>
          <span className="text-white font-bold">${precio}</span>
        </div>
        <span className="block text-white text-sm mt-2">
          3 cuotas sin interés de
        </span>
        <button className="bg-black text-white py-2 px-4 mt-2 rounded hover:bg-dark hover:text-white">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ListCard;
