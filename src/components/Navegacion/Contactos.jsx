import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contactos() {
  const location = useLocation();

  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual

  return (
    <div className="bg-black text-white p-8 rounded-lg max-w-sm lg:max-w-xl mx-auto mt-32 shadow-lg mb-10 animate__animated animate__fadeIn">
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

        <label htmlFor="telefono" className="mb-2">
          Teléfono (opcional):
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          className="bg-dark text-white px-3 py-2 rounded-md mb-4"
        />

        <label htmlFor="mensaje" className="mb-2">
          Mensaje:
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          className="bg-dark text-white px-3 py-2 rounded-md mb-4 resize-y"
          required
        ></textarea>

        <button className="bg-white text-black font-bold py-2 rounded-md hover:bg-gray-200 transition duration-300">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contactos;
