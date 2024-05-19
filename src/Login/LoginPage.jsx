// Importa useState desde React, y Link, useNavigate desde react-router-dom
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Importa la función postUser desde el archivo de ayuda
import { postUser } from "./Helpers/PostUser";

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
    // Previene la recarga de la página al enviar el formulario
    e.preventDefault();
    // Llama a la función postUser con los datos del usuario
    const data = await postUser({ email: email, password: password });

    // Si la respuesta es exitosa (status 200), navega a la página de películas
    if (data.status == 200) {
      navigate("/movies", { replace: true });
    } else {
      // Si hay un error, muestra el mensaje de alerta
      setAlertMessage(data.mesagge);
    }
  };

  return (
    // Contenedor principal con margen superior
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center">Inicio de sesión</h1>
              <hr />
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
                    Siguiente
                  </button>
                </div>
              </form>
              {/* Enlace para redirigir a la página de registro si no tiene una cuenta */}
              <p className="mt-3 text-center">
                ¿No tienes una cuenta? <Link to="/signin">Regístrate aquí</Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
