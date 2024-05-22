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
  Whatsapp,
  InspectMap,
} from "./components";

function App() {
  return (
    <>
      <main>
        <Router>
          <AppNavbar />
          <>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/Contactos" element={<Contactos />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/CardMap/:titulo" element={<CardMap />} />
              <Route path="/InspectMap/:id" element={<InspectMap />} />
            </Routes>
          </>
          <>
            <Whatsapp />
          </>
          <footer>
            <Footer />
          </footer>
        </Router>
      </main>
    </>
  );
}

export default App;
