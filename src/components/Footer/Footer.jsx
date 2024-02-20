import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black px-20 text-sm aling-it flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-baseline lg:text-left">
      <div className="mt-5 flex flex-col gap-1">
        <h3 className="text-white text-lg font-semibold">MEDIOS DE PAGO</h3>
        <div className="flex flex-wrap max-w-56">
          <img
            src="../tarjetas-credito/visa.png"
            alt="visa"
            className="w-12 h-9 m-1"
          />
          <img
            src="../tarjetas-credito/mastercard.png"
            alt="mastercard"
            className="w-12 h-9 m-1"
          />
          <img
            src="../tarjetas-credito/american.png"
            alt="american"
            className="w-12 h-9 m-1"
          />
          <img
            src="../tarjetas-credito/efectivo.png"
            alt="cash"
            className="w-12 h-9 m-1"
          />
          <img
            src="../tarjetas-credito/transferencia.png"
            alt="transferencia"
            className="w-12 h-9 m-1"
          />
          <img
            src="../tarjetas-credito/naranja.png"
            alt="naranja"
            className="w-12 h-9 m-1"
          />
          <img
            src="../tarjetas-credito/mp.png"
            alt="mp"
            className="w-12 h-9 m-1"
          />
          <img
            src="../tarjetas-credito/cabal.png"
            alt="cabal"
            className="w-12 h-9 m-1"
          />
        </div>
        <h3 className="text-white text-lg font-semibold">FORMAS DE ENVIO</h3>
        <div className="flex flex-wrap max-w-56">
          <img
            src="../tarjetas-credito/correoArg.png"
            alt="correo argentino"
            className="w-12 h-9 m-1"
          />
          <img
            src="../tarjetas-credito/oca.png"
            alt="oca"
            className="w-12 h-9 m-1"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-1">
        <h3 className="text-white text-lg font-semibold text-center lg:text-left">
          CONTACTANOS
        </h3>
        <div className="flex flex-col items-center max-w-56  sm:items-start lg:items-start lg:text-left">
          <p className="text-white flex mt-1 items-center gap-1">
            <FaPhoneAlt size={20} />
            +54 11-4543-2960
          </p>
          <p className="text-white flex mt-1 items-center gap-1">
            <FaLocationDot size={25} />
            Paraná 3745 Unicenter Shopping, B1640 Martínez
          </p>
          <p className="text-white flex mt-1 items-center gap-1">
            <MdEmail size={20} />
            NewLook@hotmail.com
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-1">
        <h3 className="text-white text-lg font-semibold">ESTAMOS EN</h3>
        <iframe
          className="h-72"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13151.074251140326!2d-58.5231127!3d-34.5087512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0f18f076e67%3A0x71a098e4603a34a3!2sMoov!5e0!3m2!1ses-419!2sar!4v1707581038527!5m2!1ses-419!2sar "
        ></iframe>
      </div>
      <div className="mt-5 flex flex-col gap-1 ">
        <h3 className="text-white text-lg font-semibold lg:text-center">REDES SOCIALES</h3>
        <a
          href="https://www.instagram.com/newlookba/"
          className="flex justify-center"
          target="_blank"
        >
          <img
            src="../UI/instagram.svg"
            alt="instagram"
            className="w-70 h-70"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
