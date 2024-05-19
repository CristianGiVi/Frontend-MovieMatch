// Importa las librerías necesarias desde React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importa el componente principal de la aplicación
import { App } from "./App.jsx";

// Importa el componente BrowserRouter desde react-router-dom para manejar el enrutamiento en la aplicación
import { BrowserRouter } from "react-router-dom";

// Crea un punto de entrada raíz para la aplicación en el elemento con id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  /* Envolviendo la aplicación en React.StrictMode para activar comprobaciones adicionales
    y advertencias en el desarrollo
  */
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
