// Importa useState desde React, y Link, useNavigate desde react-router-dom
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Importa la función postUser desde el archivo de ayuda
import { postUser } from "../Helpers/PostUser";

// Define y exporta el componente LoginPage
export const LoginPage = () => {
  // Obtiene la función de navegación programática
  const navigate = useNavigate();

  // Define los estados para manejar los inputs del formulario y el mensaje de alerta
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  // Define la función manejadora del submit del formulario
  const onLogin = async (e) => {
    try {
      // Previene la recarga de la página al enviar el formulario
      e.preventDefault();
      // Llama a la función postUser con los datos del
      const response = await postUser({ email: email, password: password });

      // Si la respuesta es exitosa (status 200), navega a la página de películas
      if (response === true) {
        window.dispatchEvent(new Event("storage"));
        navigate("/movies", { replace: true });
      } else {
        setAlertMessage(response);
      }
    } catch (error) {
      setAlertMessage("Sucedio un error con la operacion al iniciar sesion");
    }
  };

  return (
    // Contenedor principal con margen superior
    <div className="row justify-content-center">
      {/* Muestra el mensaje de alerta si existe */}
      {alertMessage && (
        <div className="alert alert-danger" role="alert">
          {alertMessage}
        </div>
      )}
      {/* Formulario para iniciar sesión */}
      <form onSubmit={onLogin}>
        {/* Campo para el email */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Usuario
          </label>
          <input
            type="email"
            className="form-control"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Campo para la contraseña */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Botón de envío del formulario */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-primary">
            ENVIAR
          </button>
        </div>

      </form>
    </div>
  );
};
