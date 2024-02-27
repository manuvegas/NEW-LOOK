import React from "react";
import ListPrincipales from "../Inicio/ListPrincipales";

const Home = () => {
  return (
    <>
      <main>
        <div>
          <h1 className="text-4xl font-bold text-center pt-24">CATEGORIAS</h1>
          <ListPrincipales />
        </div>
        <div className="flex justify-center mb-16">
          <div className=" bg-black rounded-lg p-8 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl  font-bold mb-4">
              SOMOS LO QUE LE FALTA A TU ARMARIO
            </h1>
            <p className="text-md sm:text-lg">
              Tenemos más de 5000 clientes que compraron nuestros productos
            </p>
          </div>
        </div>

        <div></div>
      </main>
    </>
  );
};

export default Home;
