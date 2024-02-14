import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AppNavbar,
  Cambios,
  Contactos,
  Footer,
  Home,
  Informacion,
  CardMap,
  Whatsapp,
} from "./components";

function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <AppNavbar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contactos" element={<Contactos />} />
            <Route path="/Navegacion" element={<Informacion />} />
            <Route path="/Cambios" element={<Cambios />} />
            <Route path="/CardMap/:titulo" element={<CardMap />} />
          </Routes>
        </div>
        <div>
          <Whatsapp />
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
