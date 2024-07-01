import React from "react";
import { FaLocationDot, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CreditCards from "../components/Icons/CreditCards";
import Shipping from "../components/Icons/Shipping";
import { Link } from "react-router-dom";
import Products from "@/components/ComponentsUI/Products";

const Footer = () => {
  return (
    <footer>
      <div className="flex sm:flex-row flex-col items-baseline mb-5 ">
        <div className="flex flex-col mx-auto mt-5">
          <div className="flex flex-col font-bold text-center sm:text-left text-sm">
            <Link to="/">INICIO</Link>
            <Products className={"sm:text-left"} />
            <Link to="/Contactos">CONTACTO</Link>
            <Link to="/Cambios">CAMBIOS</Link>
            <Link to="/PregFrecuentes">PREGUNTAS FRECUENTES</Link>
            <Link to="/Devolucion">POLITICAS DE DEVOLUCION</Link>
            <Link to="/Xmayor">VENTAS X MAYOR</Link>
            <Link to="/Origins">ORIGINS NEW-LOOK</Link>
          </div>
        </div>
        <div className="mt-5 flex mx-auto">
          <div className="flex flex-col items-center gap-5 justify-center">
            <h2 className="font-bold text-md">REDES SOCIALES</h2>
            <a href="https://www.instagram.com/newlookba/" target="_blank">
              <FaInstagram size={50} />
            </a>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <h2 className="text-md font-semibold text-center sm:text-left">
            MEDIOS DE PAGO
          </h2>
          <CreditCards />
          <h2 className="text-md font-semibold text-center sm:text-left">
            FORMAS DE ENVIO
          </h2>
          <Shipping />
        </div>
        <div className="mt-5 flex flex-col gap-1 mx-auto">
          <h2 className="text-md font-semibold text-center lg:text-left">
            CONTACTANOS
          </h2>
          <div className="flex flex-col max-w-[220px] gap-1 pb-8">
            <a
              href="https://wa.me/541133888936"
              target="_blank"
              className="flex mt-1 items-center gap-2"
            >
              <FaWhatsapp size={20} />
              +54 11-3388-8936
            </a>
            <p className="text-white flex mt-1 items-center gap-2">
              <FaLocationDot size={25} />
              Paraná 3745 Unicenter Shopping, B1640 Martínez
            </p>
            <p className="text-white flex mt-1 items-center gap-2">
              <MdEmail size={20} />
              NewLook@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
