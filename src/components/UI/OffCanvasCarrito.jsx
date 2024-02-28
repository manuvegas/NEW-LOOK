import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OffCanvasCarrito = ({ closeCanvas, isOpen }) => {
  return (
    <>
      <div
        className={`fixed w-5/6 sm:w-2/4 md:w-2/4 top-0 right-0 h-full lg:w-2/6 bg-black z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="bg-transparent border-none cursor-pointer"
          onClick={closeCanvas}
        >
          <IoCloseOutline className="text-white m-2" size={45} />
        </button>
        <div className="flex items-center justify-center">
          <div className="p-5 rounded-lg text-white bg-neutral-950">
            <div className="flex justify-between items-center "></div>
            <p className="text-xs md:text-1xl text-center ">CARRITO VACÍO</p>
          </div>
        </div>
      </div>
      {isOpen && ( 
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-40"
          onClick={closeCanvas}
        ></div>
      )}
    </>
  );
};

export default OffCanvasCarrito;
