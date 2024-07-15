import { verificarToken } from "@/Fetching/auth.fetching";
import {
  Cambios,
  CardCompleta,
 
  Inicio,
  CardDetail,
  Login,
  Register,
  Configs,
  ResetPassword,
  PregFrecuentes,
  Xmayor,
  Origins,
  ComoComprar,
  RequestPasswordReset,
  VerifyResetCode,
  UpdateCard,
} from "@/components";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const RouteApp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    verificarToken().then((resultado) => {
      if (resultado.status !== 200) {
        navigate("/login");
      }
    });
  }, []);

  const role = localStorage.getItem("Role");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
       
        <Route path="/register" element={<Register />} />
        <Route path="/cambios" element={<Cambios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cardMap/:categoria" element={<CardCompleta />} />
        <Route path="/detail/:pid" element={<CardDetail />} />
        {role === "admin" && <Route path="/configs" element={<Configs />} />}
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/PregFrecuentes" element={<PregFrecuentes />} />
        <Route path="/Xmayor" element={<Xmayor />} />
        <Route path="/Origins" element={<Origins />} />
        <Route path="/ComoComprar" element={<ComoComprar />} />
        <Route path="/requestPasswordReset" element={<RequestPasswordReset />} />
        <Route path="/verify-reset-code" element={<VerifyResetCode />} />
        <Route path="/updateCard/:pid" element={<UpdateCard />} />
      </Routes>
    </div>
  );
};

export default RouteApp;
