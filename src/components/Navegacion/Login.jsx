import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual
  return (
    <>
      <div className="bg-black text-white p-8 rounded-lg max-w-sm lg:max-w-xl mx-auto mt-32 shadow-lg mb-10 animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold text-center mb-4">LOGIN</h2>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="nombre" className="mb-2">
            Email
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="bg-dark text-white px-3 py-2 rounded-md mb-4"
            required
          />

          <label htmlFor="email" className="mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-dark text-white px-3 py-2 rounded-md mb-4"
            required
          />

          <button className="bg-white text-black font-bold py-2 rounded-md hover:bg-gray-200 transition duration-300">
            Enviar
          </button>
          <span className="mt-2 text-center text-lg">
            ¿No tienes una cuenta?pulsa aqui
            <Link to="/Register" className="underline">
              Registrate
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
