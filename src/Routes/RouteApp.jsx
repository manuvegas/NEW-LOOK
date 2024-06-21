import { verificarToken } from "@/Fetching/auth.fetching";
import {
  Cambios,
  CardCompleta,
  Contactos,
  Inicio,
  InspectMap,
  Login,
  Register,
  Configs,
  ResetPassword,
} from "@/components";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const RouteApp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    verificarToken().then((resultado) => {
      if (resultado.status == 200) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cambios" element={<Cambios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cardMap/:titulo" element={<CardCompleta />} />
        <Route path="/inspectMap/:id" element={<InspectMap />} />
        <Route path="/configs" element={<Configs />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default RouteApp;
