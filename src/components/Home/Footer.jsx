import React from 'react'
import "./CardsImg.css"
import { SiAmericanexpress, SiMercadopago } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaCcVisa, FaLocationDot } from "react-icons/fa6";
import { FaCcMastercard, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="metodos">
        <h1 className="titulosFooter">FORMAS DE PAGO</h1>
        <div className="datoFooter1">
          <FaCcVisa size={30} /> <FaCcMastercard size={30} />
          <SiAmericanexpress size={30} />
          <SiMercadopago size={30} />
        </div>
      </div>
      <div className="metodos">
        <h1 className="titulosFooter">CONTACTANOS</h1>
        <div className="datoFooter2">
          <span>
            <FaPhoneAlt size={20} />
            1143567865
          </span>
          <span>
            <FaLocationDot size={20} />
            Av. General Rojo 5432, Laferrere, Buenos Aires, Argentina 6531
          </span>
          <span>
            <MdEmail size={20} />
            shop@NewLook.com
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer