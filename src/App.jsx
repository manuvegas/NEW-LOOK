import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNavbar, Home, ListRemeras } from "./components";
function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <AppNavbar/>
          </header>
          <Routes>
            <Route path="/ListRemeras" element={<ListRemeras/>} />
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
