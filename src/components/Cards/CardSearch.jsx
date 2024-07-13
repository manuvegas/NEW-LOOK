import React from "react";
import { Link } from "react-router-dom";

const CardSearch = ({ product,_id }) => {
  return (
    <div className="flex p-4 border-b border-gray-200">
      <Link to={`/detail/${_id}`}>
        <img
          src={product.img}
          alt={product.titulo}
          className="w-16 h-16 object-cover rounded-md mr-4"
        />
        <div>
          <h3 className="font-semibold">{product.titulo}</h3>
          <p className="text-sm">Precio: ${product.precio}</p>
          <p className="text-sm text-blue-700 font-extrabold">
            {product.cuotas} cuotas sin interes
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardSearch;
