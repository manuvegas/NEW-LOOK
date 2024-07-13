import { requestPasswordReset } from "@/Fetching/auth.fetching";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestPasswordReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await requestPasswordReset(email);
      if (response.ok) {
        navigate("/verify-reset-code");
      } else {
        setError("Error al enviar la solicitud. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-32 mb-32">
      <div className="custom-shadow text-white p-6 rounded-lg max-w-sm sm:max-w-xl mx-auto animate__animated animate__fadeIn">
        <h1 className="mb-4 text-center text-xl font-bold leading-tight">
          Solicitar Restablecimiento de Contraseña
        </h1>
        <form onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
          <div className="mt-6">
            <button
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/60"
              type="submit"
            >
              Solicitar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestPasswordReset;
