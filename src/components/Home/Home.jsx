import React from "react";
import Data from "./Data";
import ListPrincipales from "./ListPrincipales";
import Destacados from "./Destacados";
import { FaInstagram} from "react-icons/fa";


const Home = () => {
  return (
    <>
      <main>
        <section>
          <div className="ofertas">
            <img className="ofertasImg" src="ofertas.png" alt="OFERTAS" />
          </div>
        </section>
        <section>
          <Data />
          <h1 className="titulos">CATEGORIAS</h1>
          <ListPrincipales />
        </section>
        <div className="divSpan">
          <h1 className="tituloSpan">SOMOS LO QUE LE FALTA A TU ARMARIO</h1>
          <span className="span">Tenemos mas +5000 clientes que compraron nuestros productos</span>
        </div>
        <section>
          <h1 className="titulos">DESTACADOS</h1>
          <Destacados />
          <Data />
        </section>
        <section>
          <div className="instagram">
            <a href="https://www.instagram.com/_manuvegas_/" target="_blank">
              <FaInstagram size={60} color="white" />
            </a>
          </div>
          <div className="instagram">
            <h3>NUESTRO INSTAGRAM</h3>
          </div>
        </section>
        
      </main>
    </>
  );
};

export default Home;
