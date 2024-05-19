// Importa la librería axios
import axios from "axios";

// Crea una instancia de Axios con configuración predeterminada
const api = axios.create({
  // Define la URL base para todas las solicitudes
  baseURL: "http://localhost:3000",
  // Define los encabezados predeterminados para las solicitudes
  headers: {
    "Content-Type": "application/json",
  },
});

// Agrega un interceptor de solicitudes para incluir el token en todas las solicitudes
api.interceptors.request.use(
  (config) => {
    // Obtiene el token del almacenamiento local
    const token = localStorage.getItem("token");
    // Si el token existe, lo incluye en los encabezados de autorización
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // Retorna la configuración de la solicitud modificada
    return config;
  },
  (error) => {
    // Maneja los errores de la solicitud y los rechaza
    return Promise.reject(error);
  }
);

// Exporta la instancia de Axios configurada para su uso en otros módulos
export default api;
