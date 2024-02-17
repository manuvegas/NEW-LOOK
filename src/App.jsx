import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AppNavbar,
  Contactos,
  Footer,
  Inicio,
  CardMap,
  Whatsapp
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
            <Route path="/" element={<Inicio/>} />
            <Route path="/Contactos" element={<Contactos />} />
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
