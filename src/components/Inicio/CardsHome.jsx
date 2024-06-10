import React from "react";
import { Link } from "react-router-dom";

const CardsHome = ({ titulo, img }) => {
  return (
    <>
      <div className="relative xs:w-full sm:w-[320px] md:w-[340px] lg:w-[465px]">
        <Link to={`/CardMap/${titulo}`}>
          <img src={img} alt={titulo} className="h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold tracking-wider hover:font-bold">
              {titulo}
            </h2>
          </div>
          <div className="absolute bottom-4 left-4">
            <Link
              to={`/CardMap/${titulo}`}
              className="p-1 text-sm border text-white font-bold rounded transition"
            >
              SHOP NOW!
            </Link>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardsHome;
