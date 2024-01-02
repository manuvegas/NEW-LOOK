import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AppNavbar,
  Contactos,
  Envios,
  Home,
  Informacion,
  ListBackpacks,
  ListBermudas,
  ListBuzo,
  ListCargos,
  ListGorras,
  ListJoggins,
  ListRemeras,
  ListZapas,
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
            <Route path="/ListGorras" element={<ListGorras />} />
            <Route path="/ListJoggins" element={<ListJoggins />} />
            <Route path="/ListCargos" element={<ListCargos />} />
            <Route path="/ListBackpacks" element={<ListBackpacks />} />
            <Route path="/ListZapas" element={<ListZapas />} />
            <Route path="/ListBermudas" element={<ListBermudas />} />
            <Route path="/" element={<Home />} />
            <Route path="/Contactos" element={<Contactos />} />
            <Route path="/Informacion" element={<Informacion />} />
            <Route path="/Envios" element={<Envios />} />
         
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
