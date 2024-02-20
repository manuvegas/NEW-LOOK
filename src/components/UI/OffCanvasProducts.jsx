import React from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const OffCanvasProducts = ({ isOpen, closeCanvas }) => {
  // Función para manejar el cierre del offcanvas
  const handleClose = () => {
    closeCanvas();
  };

  // Función para manejar la selección de un producto
  const handleProductClick = () => {
    // Aquí puedes implementar la lógica para redirigir a la página de productos
    // Por ahora, solo cerraremos el offcanvas
    closeCanvas();
  };

  return (
    <div
      className={`fixed sm:w-2/4 md:w-2/4 top-0 right-0 h-full lg:w-1/4 bg-dark z-50   ${
        isOpen ? "" : ""
      }`}
    >
      <div className="p-5 flex flex-col h-full">
        <button
          className="absolute top-0 left-0 m-4 bg-transparent border-none"
          onClick={handleClose}
        >
          <IoCloseOutline className="text-white m-2" size={45} />
        </button>
        <div className="flex justify-center mt-16">
          <h1 className="text-white text-xl font-bold ">PRODUCTOS</h1>
        </div>
        <div className="mt-8 flex flex-col items-start mx-5 gap-5 bg-black p-5 rounded-lg">
          <div>
            <Link
              to="/productos/remeras"
              className=" flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
            >
              <img
                src="../img(remeras)/remera2.jpeg"
                alt="REMERA"
                className="w-14 h-auto"
              />
              <li
                className="text-white cursor-pointer flex flex-col"
                onClick={handleProductClick}
              >
                <h1 className="text-lg font-bold">REMERAS</h1>
              </li>
            </Link>
          </div>
          <div>
            <Link
              to="/productos/pantalones"
              className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
            >
              <img
                src="../img(buzos)/buzo4.jpeg"
                alt="REMERA"
                className="w-14 h-auto"
              />
              <li
                className="text-white cursor-pointer flex flex-col hover:text-gray-300"
                onClick={handleProductClick}
              >
                <h1 className="text-lg font-bold ">BUZOS</h1>
              </li>
            </Link>
          </div>
          <div>
            <Link
              to="/productos/zapatos"
              className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
            >
              <img
                src="../img(remeras)/remera2.jpeg"
                alt="REMERA"
                className="w-14 h-auto"
              />
              <li
                className="text-white cursor-pointer flex flex-col hover:text-gray-300"
                onClick={handleProductClick}
              >
                <h1 className="text-lg font-bold ">JOGGINS</h1>
              </li>
            </Link>
          </div>
          <div>
            <Link
              to="/productos/zapatos"
              className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
            >
              <img
                src="../img(remeras)/remera2.jpeg"
                alt="REMERA"
                className="w-14 h-auto"
              />
              <li
                className="text-white cursor-pointer flex flex-col hover:text-gray-300"
                onClick={handleProductClick}
              >
                <h1 className="text-lg font-bold">BERMUDAS</h1>
              </li>
            </Link>
          </div>
          <div>
            <Link
              to="/productos/zapatos"
              className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
            >
              <img
                src="../img(remeras)/remera2.jpeg"
                alt="REMERA"
                className="w-14 h-auto"
              />
              <li
                className="text-white cursor-pointer flex flex-col hover:text-gray-300"
                onClick={handleProductClick}
              >
                <h1 className="text-lg font-bold"> ZAPAS</h1>
              </li>
            </Link>
          </div>
          <div>
            <Link
              to="/productos/zapatos"
              className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
            >
              <img
                src="../img(remeras)/remera2.jpeg"
                alt="REMERA"
                className="w-14 h-auto"
              />
              <li
                className="text-white cursor-pointer flex flex-col hover:text-gray-300"
                onClick={handleProductClick}
              >
                <h1 className="text-lg font-bold">CARGOS</h1>
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasProducts;
