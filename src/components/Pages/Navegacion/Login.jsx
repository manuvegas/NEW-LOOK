import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import InputUI from "../../UI/InputUI"
import  Button  from "../../UI/Button";

const Login = () => {
  const location = useLocation();
  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual
  return (
    <>
      <section className="pt-40 pb-44">
        <div className="bg-black text-white p-8 rounded-lg max-w-sm lg:max-w-xl mx-auto shadow-lg  animate__animated animate__fadeIn">
          <h2 className="text-2xl font-bold text-center mb-4">LOGIN</h2>
          <form className="flex flex-col">
            <InputUI
              type="text"
              id="nombre"
              label="Email"
              name="nombre"
              variant="underlined"
              className="text-white px-3 py-2 rounded-md mb-4"
              required
            />
            <InputUI
              type="password"
              id="password"
              label="Password"
              name="password"
              variant="underlined"
              className="text-white px-3 py-2 rounded-md mb-4"
              required
            />

            <Button className="bg-white flex mx-auto  text-black font-bold py-2 rounded-md hover:bg-gray-300 transition duration-300">
              Enviar
            </Button>
            <span className="mt-2 text-center text-lg">
              ¿No tienes una cuenta?
              <Link to="/Register" className="underline ml-2">
                Registrate
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
