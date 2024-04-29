import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import  {Button} from "../../UI/Button";
import { Input} from "../../UI/input";

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
          <Input
            type="text"
            placeholder="Nombre"
            id="nombre"
            name="nombre"
            label="Nombre"
            variant="underlined"
            className="text-white px-3 py-2 rounded-md mb-4"
            required
          />
          <Input
            type="email"
            id="email"            label="Email"
            placeholder="email"
            name="email"
            variant="underlined"
            className="text-white px-3 py-2 rounded-md mb-4"
            required
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            label="Password"
            variant="underlined"
            className="text-white px-3 py-2 rounded-md mb-4"
            required
          />
          <Input
            type="password"
            label="Confirm password"
            variant="underlined"
            placeholder="Confirm Password"
            id="password"
            name="password"
            className="text-white px-3 py-2 rounded-md mb-4"
            required
          />
          <Button className="bg-white flex mx-auto text-black font-bold py-2 rounded-md hover:bg-gray-200 transition duration-300">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Register;
