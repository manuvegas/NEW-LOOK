import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OffCanvasCarrito = ({ closeCanvas, isOpen, children }) => {
  return (
    <>
     <div
        className={`fixed top-0 right-0 w-full sm:w-[450px] md:w-[550px] lg:w-[650px] h-screen bg-black z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="bg-transparent border-none cursor-pointer"
          onClick={closeCanvas}
        >
          <IoCloseOutline className="text-white m-2" size={45} />
        </button>

        <div>{children}</div>
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
