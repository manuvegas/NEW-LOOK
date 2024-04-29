import React from "react";
import ListPrincipales from "../Inicio/ListPrincipales";

const Home = () => {
  return (
    <>
      <main>
        <div>
          <h1 className="text-4xl font-extrabold text-center pt-24 text-black">
            CATEGORIAS
          </h1>
          <ListPrincipales />
        </div>
      </main>
    </>
  );
};

export default Home;
