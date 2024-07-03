import { HTTP, URLS } from "./http";


const ROUTE = "/api/auth"

export const login = async (usuario) => {
  try {
    const resultado = await HTTP.POST(URLS.URL_API + ROUTE + "/login", usuario)
    if (!resultado.ok) {
      throw resultado
    }
    // Guardo el token y el rol en LocalStorage
    localStorage.setItem("Token", resultado.token);
    localStorage.setItem("Role", resultado.role);
  } catch (error) {
    throw { message: error.message }
  }
}

export const register = async (usuario) => {
  try {
    const resultado = await HTTP.POST(URLS.URL_API + ROUTE + "/register", usuario)
    if (!resultado.ok) {
      throw resultado
    }
  } catch (error) {
    console.log(error);
    throw { message: error.message }
  }
}

export const verificarToken = async () => {
  try {
    const token = localStorage.getItem("Token");
    if (!token) {
      throw new Error("No se encontró el token en el localStorage");
    }

    const headers = new Headers();
    headers.append("Authorization", token);

    const resultado = await HTTP.GET(URLS.URL_API + ROUTE + "/verify-token", headers);
    return resultado;
  } catch (error) {
    console.error("Error en verificarToken:", error);
    throw error; // Lanza el error para que pueda ser manejado donde se llama a verificarToken
  }
}