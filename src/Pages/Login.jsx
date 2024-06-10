import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
      <div className="pt-40 pb-60">
        <div className="bg-[#060606] text-white p-6 rounded-lg max-w-sm lg:max-w-xl mx-auto shadow-lg  animate__animated animate__fadeIn">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center"></div>
            <h2 className="text-center text-3xl font-bold leading-tight">
              INICIAR SESION
            </h2>
            <p className="mt-2 text-center text-sm">
              ¿No tienes un cuenta?
              <Link to="/Register" className="text-blue-600 ">
                {" "}
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
                      to="/Password"
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
            <div className="mt-3 space-y-3">
              <button
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                type="submit"
              >
                <span className="mr-2 inline-block">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-500"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
