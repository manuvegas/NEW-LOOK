import React from "react";
import ListPrincipales from "../components/Inicio/ListPrincipales";

const Home = () => {
  return (
    <>
      <main className="animate__animated animate__fadeIn">
        <section>
          <div className="mt-28">
            <h1 className="font-bold text-lg text-center ">CATEGORIAS</h1>
            <ListPrincipales />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
