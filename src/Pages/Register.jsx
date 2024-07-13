import { register } from "@/Fetching/auth.fetching";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Register() {
  const [errorText, setErrorText] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const usuario = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      await register(usuario);
      setErrorText("");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setErrorText(error.message);
    }
  };
  return (
    <section className="pt-32 pb-52">
      <div className="custom-shadow text-white p-6 rounded-lg max-w-sm sm:max-w-xl mx-auto animate__animated animate__fadeIn">
        <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
          <h1 className="text-center text-3xl font-bold leading-tight">
            REGISTRARSE
          </h1>
          <form
            className="mt-8"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium" htmlFor="email">
                  Email:
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium" htmlFor="password">
                    Password:
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    id="password"
                    placeholder="Password"
                    type="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
    </section>
  );
}

export default Register;
