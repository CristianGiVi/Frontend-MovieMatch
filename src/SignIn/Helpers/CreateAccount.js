// Define y exporta la función asíncrona createAccount, que recibe los datos del nuevo usuario
export const createAccount = async (newUserData) => {
  // URL del endpoint donde se va a realizar la solicitud para crear una nueva cuenta
  const url = "http://localhost:3000/moviematch/join";

  // Configuración de la solicitud HTTP
  const options = {
    method: "POST", // Método de la solicitud (POST para enviar datos)
    headers: {
      "Content-Type": "application/json", // Especifica que los datos se enviarán en formato JSON
    },
    body: JSON.stringify(newUserData), // Convierte los datos del nuevo usuario a formato JSON
  };

  try {
    // Realiza la solicitud HTTP con fetch y espera la respuesta
    const resp = await fetch(url, options);
    // Convierte la respuesta a formato JSON
    const data = await resp.json();
    // Si la respuesta no tiene un status 201 (creado), retorna un objeto con el mensaje y el status de error
    if (data.status !== 201) {
      return { message: data.message, status: data.status };
    }
    // Si la respuesta es exitosa, retorna los datos de la respuesta
    return data;
  } catch (error) {
    // Si ocurre un error en el fetch, captura el error y retorna un objeto con el mensaje de error y un status 500
    return { message: error.message, status: 500 };
  }
};
