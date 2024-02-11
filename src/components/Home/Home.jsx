import React from "react";
import Data from "./Data";
import ListPrincipales from "./ListPrincipales";

const Home = () => {
  return (
    <>
      <main>
        <div>
          <div className="ofertas">
            <img className="ofertasImg" src="./UI/oferta1.png" alt="OFERTAS" />
          </div>
        </div>

        <div>
          <h1 className="titulos">CATEGORIAS</h1>
          <ListPrincipales />
        </div>
        <div className="span-container">
          <div className="divSpan">
            <h1 className="tituloSpan">SOMOS LO QUE LE FALTA A TU ARMARIO</h1>
            <span className="span">
              Tenemos mas de 5000 clientes que compraron nuestros productos
            </span>
          </div>
        </div>

        <div>
          <Data />
        </div>
      </main>
    </>
  );
};

export default Home;
