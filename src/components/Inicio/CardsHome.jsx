import React from "react";
import { Link } from "react-router-dom";

const CardsHome = ({ titulo, img }) => {
  return (
    <>
      <div className="relative w-full">
        <Link to={`/CardMap/${titulo}`}>
          <img src={img} alt={titulo} className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-xl font-bold tracking-wider hover:font-bold">
              {titulo}
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardsHome;
