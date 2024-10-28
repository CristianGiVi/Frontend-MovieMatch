// Define y exporta la función asíncrona postUser, que recibe los datos del usuario para iniciar sesión
export const postUser = async (userData) => {
  // URL del endpoint donde se va a realizar la solicitud para iniciar sesión
  const url = "http://localhost:3000/moviematch/login";

  // Configuración de la solicitud HTTP
  const options = {
    method: "POST", // Método de la solicitud (POST para enviar datos)
    headers: {
      "Content-Type": "application/json", // Especifica que los datos se enviarán en formato JSON
    },
    body: JSON.stringify(userData), // Convierte los datos del usuario a formato JSON
  };

  try {
    // Realiza la solicitud HTTP con fetch y espera la respuesta
    const resp = await fetch(url, options);
    // Convierte la respuesta a formato JSON
    const data = await resp.json();
    // Si la respuesta tiene un status 200 (éxito), almacena el token en localStorage
    if (resp.ok) {
      localStorage.setItem("token", data.token); // Almacena el token en localStorage
      return true;
    }

    return data
    
  } catch (error) {
    // Si ocurre un error en el fetch, captura el error y retorna un objeto con el mensaje de error y un status 500
    return error.message;
  }
};
