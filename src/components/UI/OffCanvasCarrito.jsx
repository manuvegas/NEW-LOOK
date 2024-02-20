import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OffCanvasCarrito = ({ closeCanvas, isOpen,children }) => {
  return (
    <div
      className={`fixed w-5/6 sm:w-2/4 md:w-2/4 top-0 right-0 h-full lg:w-2/6 bg-dark z-50  transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={closeCanvas}
    >
      <button
        className="bg-transparent border-none cursor-pointer "
        onClick={closeCanvas}
      >
        <IoCloseOutline className="text-white m-2" size={45} />
      </button>
      <div className="flex items-center justify-center">
        <div className="p-5 rounded-lg text-white bg-neutral-950">
          <div className="flex justify-between items-center "></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default OffCanvasCarrito;
