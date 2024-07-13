export const HTTP = {
  GET: async (url, headers) => {
    const response = await fetch(url, {
      method: "GET",
      headers: headers
    })
    return response.json()
  },

  POST: async (url, body) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      },
      body: JSON.stringify(body)
    })
    return response.json()
  },

  PUT: async (url, body, headers = { 'Content-Type': 'application/json' }) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(body)
    })
    return response.json()
  },

  DELETE: async (url, headers = { 'Content-Type': 'application/json' }) => {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers
    })
    return response.json();
  }
}

export const URLS = {
  URL_API: "https://new-look-back.vercel.app",
  URL_2:"http://localhost:4040"
}