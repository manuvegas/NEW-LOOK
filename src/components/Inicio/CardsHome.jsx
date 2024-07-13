import React from "react";
import { Link } from "react-router-dom";

const CardsHome = ({ titulo, img, categoria }) => {
  return (
    <div className=" w-full overflow-hidden">
      <Link to={`/CardMap/${categoria}`}>
        <div className="h-full w-full overflow-hidden group">
          <img
            src={img}
            alt={titulo}
            className="h-full w-full object-cover transition-transform duration-500 transform-gpu group-hover:scale-105"
          />
        </div>
      </Link>
    </div>
  );
};

export default CardsHome;
