import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Register() {
  const location = useLocation();

  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual

  return (
    <section className="py-24">
    <div className="bg-black text-white p-8 rounded-lg max-w-sm lg:max-w-xl mx-auto shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Formulario de Contacto
      </h2>
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nombre" className="mb-2">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="bg-dark text-white px-3 py-2 rounded-md mb-4"
          required
        />

        <label htmlFor="email" className="mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-dark text-white px-3 py-2 rounded-md mb-4"
          required
        />
        <label htmlFor="email" className="mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-dark text-white px-3 py-2 rounded-md mb-4"
          required
        />
        <label htmlFor="email" className="mb-2">
          Confirmar Password:
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
      </form>
    </div></section>
  );
}

export default Register;