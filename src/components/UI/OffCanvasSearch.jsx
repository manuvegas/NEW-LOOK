import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const OffCanvasSearch = ({ isOpen, closeCanvas }) => {
  return (
    <div
      className={`fixed sm:w-96 top-0 right-0 h-full lg:w-2/6 bg-dark z-50   ${
        isOpen ? "" : ""
      }`}
      onClick={closeCanvas}
    >
      <div className="p-4 flex flex-col items-center  h-full">
        <button
          className="absolute top-0 left-0 m-4 bg-transparent border-none"
          onClick={closeCanvas}
        >
          <IoCloseOutline className="text-white m-2" size={45} />
        </button>
        <div className="search-box mt-16">
          <form className="flex">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-60 px-4 py-2 mb-2 border rounded-lg me-2 bg-white"
            />
            <button
              type="submit"
              className=" flex justify-center items-center w-14 h-10 px-4 py-2 rounded-lg bg-white text-black"
            >
              <FaSearch size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasSearch;
