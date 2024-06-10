import React from "react";
import ListPrincipales from "../components/Inicio/ListPrincipales";
import Publicidad from "../components/Inicio/Publicidad";

const Home = () => {
  return (
    <>
      <main className="animate__animated animate__fadeIn">
        <section className="pt-20">
          <Publicidad />
        </section>
        <section className="py-10">
          <ListPrincipales />
        </section>
      </main>
    </>
  );
};

export default Home;
