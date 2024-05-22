import React from "react";
import { Link } from "react-router-dom";

const CardsHome = ({ titulo, img }) => {
  return (
    <>
      <div className="relative w-[360px] h-[620px] ">
        <Link to={`/CardMap/${titulo}`} className="">
          <img
            src={img}
            alt={titulo}
            className="w-ful max-w-full h-full object-cover brightness-95 hover:brightness-50"
          />
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
