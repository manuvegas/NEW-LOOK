import React from "react";

const ResetPassword = () => {
  return (
    <div className="mt-32 mb-32">
      <div className="bg-[#060606] text-white p-6 rounded-lg max-w-sm sm:max-w-xl mx-auto shadow-lg  animate__animated animate__fadeIn">
        <h1 className=" mb-4 text-center text-xl font-bold leading-tight">
          RESTABLECER CONTRASEÑA
        </h1>
        <form action="">
          <div className="space-y-2">
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
              <label className="text-base font-medium" htmlFor="email">
                password:
              </label>
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
              <label className="text-base font-medium" htmlFor="email">
                Confirmar password:
              </label>
              <div className="mt-2">
                <input
                  id="confirmar_password"
                  name="confirmar_password"
                  placeholder="Confirmar password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-6">
          <button
            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/60 "
            type="submit"
          >
            RESTABLECER
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
