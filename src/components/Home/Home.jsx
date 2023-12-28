import React from "react";
import Data from "./Data";
import ListPrincipales from "./ListPrincipales";
import Destacados from "./Destacados";
import { FaInstagram, FaCcMastercard, FaPhoneAlt } from "react-icons/fa";
import { SiAmericanexpress, SiMercadopago } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaCcVisa, FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <main>
        <section>
          <div className="ofertas">
            <img src="ofertas.png" alt="OFERTAS" />
          </div>
        </section>
        <section>
          <Data />
          <h1 className="titulos">CATEGORIAS</h1>
          <ListPrincipales />
        </section>
        <section>
          <h1 className="titulos">DESTACADOS</h1>
          <Destacados />
          <Data />
        </section>
        <section>
          <div className="instagram">
            <a href="https://www.instagram.com/_manuvegas_/">
              <FaInstagram size={60} color="white" />
            </a>
          </div>
          <div className="instagram">
            <h3>NUESTRO INSTAGRAM</h3>
          </div>
        </section>
        <footer>
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
        </footer>
      </main>
    </>
  );
};

export default Home;
