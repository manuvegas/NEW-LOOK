import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/Fetching/auth.fetching";

const Login = () => {
  const [errorText, setErrorText] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const usuario = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      await login(usuario);
      setErrorText("");
      navigate("/");
    } catch (error) {
      setErrorText(error.message);
    }
  };
  return (
    <>
      <div className="pt-32 pb-28">
        <div className="custom-shadow text-white p-6 rounded-lg max-w-sm sm:max-w-xl mx-auto  animate__animated animate__fadeIn">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center"></div>
            <h1 className="text-center text-3xl font-bold leading-tight">
              INICIAR SESION
            </h1>
            <p className="mt-2 text-center text-sm">
              ¿No tienes un cuenta?
              <Link
                to="/Register"
                className="text-blue-600 ml-2 hover:underline"
              >
                Registrate
              </Link>
            </p>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium" htmlFor="email">
                    Email:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      placeholder="Lucas@hotmail.com"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium" htmlFor="password">
                      Password:
                    </label>
                    <Link
                      className="text-sm font-semibold hover:underline"
                      to="/requestPasswordReset"
                    >
                      Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    />
                  </div>
                </div>
                <div>
                  {errorText && (
                    <span className=" text-red-800">{errorText}</span>
                  )}
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/60"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
