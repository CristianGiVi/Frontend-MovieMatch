// Importa useState desde React y Link, useNavigate desde react-router-dom
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Importa la función createAccount desde el archivo de ayuda
import { createAccount } from "./Helpers/CreateAccount";

// Define y exporta el componente SigInPage
export const SigInPage = () => {
  // Obtiene la función de navegación programática
  const navigate = useNavigate();

  // Define los estados para manejar los inputs del formulario y el mensaje de alerta
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  // Define la función manejadora del submit del formulario
  const onSubmit = async (e) => {
    // Previene la recarga de la página al enviar el formulario
    e.preventDefault();
    // Llama a la función createAccount con los datos del nuevo usuario
    const data = await createAccount({
      email: newEmail,
      password: newPassword,
      name: newName,
      lastName: newLastName,
    });

    // Si la respuesta es exitosa (status 201), navega a la página de login
    if (data.status == 201) {
      navigate("/login", { replace: true });
    } else {
      // Si hay un error, muestra el mensaje de alerta
      setAlertMessage(data.message);
    }
  };

  return (
    // Contenedor principal con margen superior
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center">Crear una cuenta</h1>
              <hr />
              {/* Muestra el mensaje de alerta si existe */}
              {alertMessage && (
                <div className="alert alert-danger" role="alert">
                  {alertMessage}
                </div>
              )}
              {/* Formulario para crear una cuenta */}
              <form onSubmit={onSubmit}>
                {/* Campo para el nombre */}
                <div className="mb-3">
                  <label htmlFor="Username" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    name="Username"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                  />
                </div>
                {/* Campo para el apellido */}
                <div className="mb-3">
                  <label htmlFor="userLastName" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userLastName"
                    name="userLastName"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                    required
                  />
                </div>
                {/* Campo para el email */}
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="userEmail"
                    name="userEmail"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  />
                </div>
                {/* Campo para la contraseña */}
                <div className="mb-3">
                  <label htmlFor="userPassword" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="userPassword"
                    name="userPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
              {/* Enlace para redirigir a la página de inicio de sesión si ya tiene una cuenta */}
              <p className="mt-3 text-center">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login">Inicia sesión aquí</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
