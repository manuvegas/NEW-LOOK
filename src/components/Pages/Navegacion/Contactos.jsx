import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import InputUI from "../../UI/InputUI";
import TextAreaUI from "../../UI/TextAreaUI";

function Contactos() {
  const location = useLocation();

  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual

  return (
    <section className="pt-32">
      <div className="bg-black text-white p-8 rounded-lg max-w-sm lg:max-w-xl mx-auto  shadow-lg mb-10 animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold text-center">
          Formulario de Contacto
        </h2>
        <form className="flex flex-col">
          <InputUI
            type="text"
            id="nombre"
            label="Nombre:"
            name="nombre"
            variant="underlined"
            className="text-white px-3 py-2 rounded-md mb-4"
            required
          />
          <InputUI
            type="email"
            id="email"
            label="Email:"
            variant="underlined"
            name="email"
            className="text-white px-3 py-2 rounded-md mb-4"
            required
          />
          <InputUI
            type="tel"
            id="telefono"
            label="Telefono:"
            name="telefono"
            variant="underlined"
            className="text-white px-3 py-2 rounded-md mb-4"
            required
          />
          <TextAreaUI
            id="mensaje"
            name="mensaje"
            className="text-white px-3 py-2 rounded-md mb-4 resize-y"
            label="Mensaje"
            variant="underlined"
            required
          />

          <button className="bg-white text-black font-bold py-2 rounded-md hover:bg-gray-200 transition duration-300">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contactos;
