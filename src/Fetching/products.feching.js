import { HTTP, URLS } from "./http";

const ROUTE = "/api/products"

export const createProduct = async (producto) => {
  try {
    const result = await HTTP.POST(URLS.URL_API + ROUTE, producto);
    return result;
  } catch (error) {
    console.error("Error al crear el producto:", error.message);
    throw { message: error.message };
  }
};

export const getAllProducts = async () => {
  try {
    const result = await HTTP.GET(URLS.URL_API + ROUTE);
    return result;
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
    throw { message: error.message };
  }
};