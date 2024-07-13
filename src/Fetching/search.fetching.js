import { HTTP, URLS } from "./http";

export const searchProductsByTitle = async (searchTerm) => {
  try {
    const response = await HTTP.GET(`${URLS.URL_API}/api/search?q=${searchTerm}`); 
    return response;

  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};