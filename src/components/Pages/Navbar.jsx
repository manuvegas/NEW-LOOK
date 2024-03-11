import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OffCanvasSearch from "../UI/OffCanvasSearch";
import OffCanvasCarrito from "../UI/OffCanvasCarrito";
import OffCanvasProducts from "../UI/OffCanvasProducts";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchCanvas, setShowSearchCanvas] = useState(false);
  const [showCarritoCanvas, setShowCarritoCanvas] = useState(false);
  const [showProductsCanvas, setShowProductsCanvas] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const openSearchCanvas = () => {
    setShowSearchCanvas(true);
    setShowCarritoCanvas(false);
    setShowProductsCanvas(false);
    setIsOpen(false); // Cerrar el menú al abrir otros elementos
  };

  const openCarritoCanvas = () => {
    setShowCarritoCanvas(true);
    setShowSearchCanvas(false);
    setShowProductsCanvas(false);
    setIsOpen(false); // Cerrar el menú al abrir otros elementos
  };

  const openProductsCanvas = () => {
    setShowProductsCanvas(true);
    setShowSearchCanvas(false);
    setShowCarritoCanvas(false);
    setIsOpen(false); // Cerrar el menú al abrir otros elementos
  };

  const closeCanvas = () => {
    setShowSearchCanvas(false);
    setShowCarritoCanvas(false);
    setShowProductsCanvas(false);
    setIsOpen(false); // Cerrar el menú al cerrar otros elementos
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cerrar el menú al hacer clic en un enlace
  };

  return (
    <section className="flex justify-center">
      <nav className="bg-black text-white fixed top-0 w-full z-50 max-w-[1020px]">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="hiden">
                <img
                  className="h-8 w-auto"
                  src="../UI/Logo.png"
                  alt="NewLook"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/Login" className="text-white">
                <FaUser className="h-5 w-5" />
              </Link>
              <button
                onClick={openSearchCanvas}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              >
                <RiSearchLine className="h-6 w-6" />
              </button>
              <button
                onClick={openCarritoCanvas}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              >
                <IoCartSharp className="h-6 w-6" />
              </button>
              <div className="-ml-2 mr-2 flex items-center">         
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="">
            <div className="flex flex-col items-end px-2 pb-2  space-y-1 sm:px-3 max-w-[1450px]">
              <Link
                to="/"
                className="text-white hover:bg-black hover:text-white  px-3 py-2 rounded-md text-base font-medium inline-block"
                onClick={closeCanvas}
              >
                HOME
              </Link>
              <button
                onClick={openProductsCanvas}
                className="text-white hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white"
              >
                PRODUCTOS
              </button>
              <Link
                to="/Contactos"
                className="text-white hover:bg-black hover:text-white inline-block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeCanvas}
              >
                CONTACTOS
              </Link>
            </div>
          </div>
        )}

        {showSearchCanvas && (
          <OffCanvasSearch
            isOpen={showSearchCanvas}
            closeCanvas={closeCanvas}
          />
        )}
        {showCarritoCanvas && (
          <OffCanvasCarrito
            isOpen={showCarritoCanvas}
            closeCanvas={closeCanvas}
          >
            <p className="text-xs md:text-1xl text-center ">CARRITO VACÍO</p>
          </OffCanvasCarrito>
        )}
        {showProductsCanvas && (
          <OffCanvasProducts
            isOpen={showProductsCanvas}
            closeCanvas={closeCanvas}
          />
        )}
      </nav>
    </section>
  );
};

export default AppNavbar;
