import React from "react";
import { Link } from "react-router-dom";

const CardsImg = ({ titulo, img }) => {
  return (
    <div className="flex justify-center opacity-100 ">
      <Link to={`/CardMap/${titulo}`} className="relative overflow-hidden">
        <div className="transition-transform duration-500 ease-in-out transform-gpu hover:scale-110 hover:opacity-80">
          <img src={img} alt={titulo} className="w-80 lg h-96 object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold  text-2xl bg-transparent p-1 rounded-md border">
            {titulo}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardsImg;
