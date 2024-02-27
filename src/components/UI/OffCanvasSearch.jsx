import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import InputUI from "./InputUI"
import Button from "./Button"

const OffCanvasSearch = ({ isOpen, closeCanvas }) => {
  const handleInnerClick = (e) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor principal (el off-canvas)
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed sm:w-96 top-0 right-0 h-full lg:w-2/6 bg-black z-50"
          onClick={closeCanvas}
        >
          <div
            className="p-4 flex flex-col items-center h-full"
            onClick={handleInnerClick}
          >
            <button
              className="absolute top-0 left-0 m-4 bg-transparent border-none"
              onClick={closeCanvas}
            >
              <IoCloseOutline className="text-white m-2" size={45} />
            </button>
            <div className="search-box mt-16">
              <form className="flex items-center">
                <InputUI
                  type="text"
                  placeholder="Buscar..."
                  variant="underlined"
                  className="w-60 px-4 h-8"
                />
                <Button
                  type="submit"
                  className="flex justify-center items-center w-14 px-4 py-2 rounded-lg bg-dark text-white"
                >
                  <FaSearch size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OffCanvasSearch;
