import React from "react";
import { Link } from "react-router-dom";
import Button from "../ComponentsUI/Button";
import { MdDelete } from "react-icons/md";
import { eliminarProductoPorId } from "@/Fetching/products.feching";
import { MdEdit } from "react-icons/md";

const Card = ({ precio, titulo, img, _id, className, onDelete }) => {
  const handleDelete = async () => {
    try {
      await eliminarProductoPorId(_id);
      onDelete(_id);
    } catch (error) {
      console.error("Error al eliminar el producto:", error.message);
    }
  };
  const role = localStorage.getItem("Role");
  return (
    <div>
      <div
        className={`border-transparent overflow-hidden text-center relative rounded-none custom-shadow ${className}`}
      >
        <div className="relative">
          <div className="">
            <img src={img} alt={titulo} className="w-full h-64 object-cover" />
          </div>
          {role === "admin" && (
            <div>
              <button
                className="absolute top-2 left-2 bg-red-600 text-white rounded-full p-2 z-10"
                onClick={handleDelete}
              >
                <MdDelete size={20} />
              </button>
              <button className="absolute top-2 right-2 bg-neutral-900 text-white p-2 z-10 rounded-full">
                <Link to={`/updateCard/${_id}`}>
                  <MdEdit />
                </Link>
              </button>
            </div>
          )}
        </div>

        <div className="p-2">
          <Link to={`/detail/${_id}`} className="text-sm font-base">
            {titulo}
          </Link>
          <div className="mt-1">
            <span className="font-base">${precio}</span>
          </div>
          <Link to={`/detail/${_id}`}>
            <Button className="transition-transform duration-500 ease-in-out transform-gpu hover:scale-110 py-1 px-2 mt-2 rounded border-none bg-black">
              VER MAS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
