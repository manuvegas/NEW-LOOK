import { HTTP, URLS } from "./http";

const ROUTE = "/api/products"

export const getProductById = async (pid) => {
  try {
    const response = await HTTP.GET(URLS.URL_API + ROUTE + "/" + pid);
    console.log(response);
    return response
  } catch (error) {
    console.error(`Error al obtener el producto con ID:`, error.message);
    throw { message: error.message };
  }
};

export const createProduct = async (producto) => {
  try {
    const result = await HTTP.POST(URLS.URL_API + ROUTE, producto);
    return result.producto;
  } catch (error) {
    console.error("Error al crear el producto:", error.message);
    throw { message: error.message, errors: error.errors };
  }
};

export const getAllProducts = async () => {
  try {
    const result = await HTTP.GET(URLS.URL_API + ROUTE);
    return result.productos
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
    throw { message: error.message };
  }
};

export const modificarProductoPorId = async (pid, producto) => {
  try {
    const result = await HTTP.PUT(URLS.URL_API + `${ROUTE}/${pid}`, producto);
    return result.producto
  } catch (error) {
    console.error("Error al modificar el producto:", error.message);
    throw { message: error.message };
  }
};

export const eliminarProductoPorId = async (pid) => {
  try {
    const result = await HTTP.DELETE(URLS.URL_API + `${ROUTE}/${pid}`);
    return result;
  } catch (error) {
    console.error("Error al eliminar el producto:", error.message);
    throw { message: error.message };
  }
}