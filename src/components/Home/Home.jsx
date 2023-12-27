import React from "react";
import Data from "./Data";
import ListPrincipales from "./ListPrincipales";

const Home = () => {
  return (
    <>
      <main>
        <section>
          <ListPrincipales/>
        </section>
        <section>
          <Data />
        </section>
      </main>
    </>
  );
};

export default Home;
