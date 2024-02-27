import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OffCanvasFiltros = ({ isOpen, toggleFilters, children, handleClose }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full sm:w-[450px] md:w-[550px] lg:w-[650px] h-screen bg-black z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          {children}
          <button
            className="absolute top-[3.8em] left-4 text-white"
            onClick={handleClose}
          >
            <IoCloseOutline className="text-white m-2" size={45} />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleFilters}
      ></div>
    </>
  );
};

export default OffCanvasFiltros;
