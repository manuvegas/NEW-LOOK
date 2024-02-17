import React from "react";
import Data from "./Data";
import ListPrincipales from "./ListPrincipales";
import "./Home.css"

const Home = () => {
  return (
    <>
      <main>
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
