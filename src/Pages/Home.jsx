import React from "react";
import ListPrincipales from "../components/Inicio/ListPrincipales";

const Home = () => {
  return (
    <>
      <main className="animate__animated animate__fadeIn">
        <section className="py-10">
          <ListPrincipales />
        </section>
      </main>
    </>
  );
};

export default Home;
