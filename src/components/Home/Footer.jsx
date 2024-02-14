import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-title">MEDIOS DE PAGO</h3>
        <div className="footer-images-content">
          <img
            src="../tarjetas-credito/visa.png"
            alt="visa"
            className="footer-images"
          />
          <img
            src="../tarjetas-credito/mastercard.png"
            alt="mastercard"
            className="footer-images"
          />
          <img
            src="../tarjetas-credito/american.png"
            alt="american"
            className="footer-images"
          />
          <img
            src="../tarjetas-credito/efectivo.png"
            alt="cash"
            className="footer-images"
          />
          <img
            src="../tarjetas-credito/transferencia.png"
            alt="transferencia"
            className="footer-images"
          />
          <img
            src="../tarjetas-credito/naranja.png"
            alt="naranja"
            className="footer-images"
          />
          <img
            src="../tarjetas-credito/mp.png"
            alt="mp"
            className="footer-images"
          />
          <img
            src="../tarjetas-credito/cabal.png"
            alt="cabal"
            className="footer-images"
          />
        </div>
        <h3 className="footer-title">FORMAS DE ENVIO</h3>
        <div className="footer-images-content">
          <img
            src="../tarjetas-credito/correoArg.png"
            alt="correo argentino"
            className="footer-images"
          />
          <img
            src="../tarjetas-credito/oca.png"
            alt="oca"
            className="footer-images"
          />
        </div>
      </div>
      <div className="footer-content">
        <h3 className="footer-title">CONTACTANOS</h3>
        <div className="footer-content-contacts">
          <p className="footer-text">
            <FaPhoneAlt size={20}/>+54 11-4543-2960
          </p>
          <p className="footer-text">
            <FaLocationDot size={20}/>
            Paraná 3745 Unicenter Shopping, B1640 Martínez
          </p>
          <p className="footer-text">
            <MdEmail size={20} />NewLook@hotmail.com
          </p>
        </div>
      </div>

      <div className="footer-content">
        <h3 className="footer-title">ESTAMOS EN</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13151.074251140326!2d-58.5231127!3d-34.5087512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0f18f076e67%3A0x71a098e4603a34a3!2sMoov!5e0!3m2!1ses-419!2sar!4v1707581038527!5m2!1ses-419!2sar"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="footer-map"
        ></iframe>
      </div>

      <div className="footer-content">
        <h3 className="footer-title">REDES SOCIALES</h3>
        <a
          href="https://www.instagram.com/newlookba/"
          className="instagram"
          target="_blank"
        >
          <img
            src="../UI/instagram.svg"
            alt="instagram"
            className="instagram-img"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
