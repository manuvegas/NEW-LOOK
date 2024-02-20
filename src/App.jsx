import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AppNavbar,
  Contactos,
  Footer,
  Login,
  Inicio,
  CardMap,
  Register,
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
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login/>} />
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
