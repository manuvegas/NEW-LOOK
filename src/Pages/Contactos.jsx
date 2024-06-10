import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Contactos() {
  const location = useLocation();
  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual

  return (
    <section className="py-32">
      <div className="bg-[#060606] text-white p-6 rounded-lg max-w-sm lg:max-w-xl mx-auto shadow-lg  animate__animated animate__fadeIn">
        <div class="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
          <div class="mb-2 flex justify-center"></div>
          <h2 class="text-center text-3xl font-bold leading-tight">
            CONTACTOS
          </h2>

          <form class="mt-8" method="POST" action="#">
            <div class="space-y-5">
              <div>
                <label class="text-base font-medium">Nombre:</label>
                <div class="mt-2">
                  <input
                    placeholder="Lucas"
                    type="text"
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <label class="text-base font-medium">Apellido:</label>
                </div>
                <div class="mt-2">
                  <input
                    placeholder="Roldan"
                    type="text"
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <label class="text-base font-medium">Email:</label>
                </div>
                <div class="mt-2">
                  <input
                    placeholder="lucas@gmail.com"
                    type="email"
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <label class="text-base font-medium">mensaje:</label>
                </div>
                <textarea
                  name="consulta"
                  id="texto"
                  placeholder="Escribe tu consulta"
                  className="flex h-24 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div>
                <button
                  class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/60"
                  type="button"
                >
                  <Link to="/">Enviar</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactos;
