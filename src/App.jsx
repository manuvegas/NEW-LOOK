import React from "react";
import "./App.css";
import {
  AppNavbar,
  Footer, 
  Whatsapp,
} from "./components";
import RouteApp from "./Routes/RouteApp";

function App() {
  return (
    <>
      <main>
        <AppNavbar />
        <RouteApp />
        <>
          <Whatsapp />
        </>
          <Footer />
      </main>
    </>
  );
}

export default App;
