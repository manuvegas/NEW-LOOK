import React from "react";
import { Link } from "react-router-dom";
import  Button  from "../ComponentsUI/Button";

const Card = ({ precio, titulo, img, id, cuotas,className }) => {
  return (
    <div>
    <div className={` bg-[#060606] border-transparent overflow-hidden text-center  relative  rounded-none bg-gradient-to-br shadow-2xl ${className}`}>
      <Link to={`/InspectMap/${id}`} className="block relative">
        <div className="relative">
          <img src={img} alt={titulo} className="w-full h-full object-cover"/>
        </div>
      </Link>
      <div className="p-2">
        <Link to={`/InspectMap/${id}`} className="text-sm font-base">
          {titulo}
        </Link>
        <div className="mt-1">
          <span className=" font-base">${precio}</span>
        </div>
        

        <Button
          className="transition-transform duration-500 ease-in-out transform-gpu hover:scale-110 py-1 px-2 mt-2 rounded border-none bg-black"
        >
          COMPRAR
        </Button>
      </div></div>
    </div>
  );
};

export default Card;
