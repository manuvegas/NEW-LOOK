import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import DescriptionCard from "../Cards/DescriptionCard";
import Accordion from "./Accordion";
import Sizes from "../Cards/Sizes";

const OffCanvasDetails = ({ isOpen, closeCanvas,titulo }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full sm:w-[450px] md:w-[550px] lg:w-[650px] h-screen bg-black z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <button
          className="absolute top-[3.8em] left-4 text-white"
          onClick={closeCanvas}
        >
          <IoCloseOutline className="text-white m-2" size={45} />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1 className="pt-20 text-2xl font-extrabold">DETALLES</h1>
        </div>
        <div className="flex flex-col md:flex-row pt-2 gap-3 ">
          <Sizes title={titulo}/>
          <Accordion title="COMPOSICION Y CUIDADOS">
            <DescriptionCard />
          </Accordion>
        </div>
        <div className="pt-4"></div>
      </div>
    </div>
  );
};

export default OffCanvasDetails;
