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
  ListBermudas,
  ListBuzo,
  ListCargos,
  ListJoggins,
  ListRemeras,
  ListZapas,
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
            <Route path="/ListRemeras" element={<ListRemeras />} />
            <Route path="/ListBuzos" element={<ListBuzo />} />
            <Route path="/ListJoggins" element={<ListJoggins />} />
            <Route path="/ListCargos" element={<ListCargos />} />
            <Route path="/ListZapas" element={<ListZapas />} />
            <Route path="/ListBermudas" element={<ListBermudas />} />
            <Route path="/" element={<Home />} />
            <Route path="/Contactos" element={<Contactos />} />
            <Route path="/Navegacion" element={<Informacion />} />
            <Route path="/Cambios" element={<Cambios />} />
          </Routes>
        </div>
        <div>
          <Whatsapp/>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
