import { verifyResetCode } from "@/Fetching/auth.fetching";
import React, { useState } from "react";


const VerifyResetCode = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyResetCode(email, code);
      if (response.ok) {
        navigate("/ResetPassword");
      } else {
        setError("Código incorrecto. Por favor, verifica e intenta nuevamente.");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="mt-32 mb-32">
      <div className="custom-shadow text-white p-6 rounded-lg max-w-sm sm:max-w-xl mx-auto animate__animated animate__fadeIn">
        <h1 className="mb-4 text-center text-xl font-bold leading-tight">
          VERIFICAR CODIGO DE REESTABLECIMIENTO
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
            </div>
            <div>
              <label className="text-base font-medium" htmlFor="code">
                Código de Restablecimiento:
              </label>
              <div className="mt-2">
                <input
                  id="code"
                  name="code"
                  placeholder="Código"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/60"
              type="submit"
            >
              Verificar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyResetCode;