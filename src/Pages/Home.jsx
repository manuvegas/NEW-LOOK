import React from "react";
import ListPrincipales from "../components/Inicio/ListPrincipales";
import Promociones from "../components/Inicio/Promociones";

const Home = () => {
  return (
    <>
      <main className="animate__animated animate__fadeIn">
        <section>
          <Promociones/>
          <div className="mt-5">
            <h1 className="font-bold text-lg text-center ">CATEGORIAS</h1>
            <ListPrincipales />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
