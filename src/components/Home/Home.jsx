import React from "react";
import Data from "./Data";
import AppNavbar from "../Navbar/Navbar";
import ListPrincipales from "./ListPrincipales";

const Home = () => {
  return (
    <>
      <main>
        <header>
          <AppNavbar />
        </header>
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
