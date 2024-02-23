import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CreditCards from "../UI/CreditCards"
import Shipping from "../UI/Shipping"

const Footer = () => {
  return (
    <footer className="bg-black max-w-[720px] mx-auto text-sm aling-it flex flex-col items-center text-center sm:max-w-[640px] lg:max-w-[1020px] lg:flex-row lg:justify-around lg:items-baseline lg:text-left">
      <div className="mt-5 flex flex-col gap-1 mb-5">
        <h3 className="text-white text-lg font-semibold">MEDIOS DE PAGO</h3>
        <CreditCards/>
        <h3 className="text-white text-lg font-semibold">FORMAS DE ENVIO</h3>
        <Shipping/>
      </div>
      <div className="mt-5 flex flex-col gap-1">
        <h3 className="text-white text-lg font-semibold text-center lg:text-left">
          CONTACTANOS
        </h3>
        <div className="flex flex-col max-w-[220px] gap-1 pb-8">
          <p className="text-white flex mt-1 items-center gap-2">
            <FaPhoneAlt size={20}/>
            +54 11-4543-2960
          </p>
          <p className="text-white flex mt-1 iteems.centes gap-2">
            <FaLocationDot size={25}/>
            Paraná 3745 Unicenter Shopping, B1640 Martínez
          </p>
          <p className="text-white flex mt-1 items-center gap-2">
            <MdEmail size={20} />
            NewLook@hotmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
