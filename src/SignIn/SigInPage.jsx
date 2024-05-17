import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "./Helpers/CreateAccount";

export const SigInPage = () => {
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const onSubmit = async(e) => {
    e.preventDefault();
    const data = await createAccount(
      {
        email: newEmail, 
        password: newPassword, 
        name: newName, 
        lastName: newLastName
      }
    );

    if(data.status == 201){
      navigate("/login", {replace: true,}); 
    } else {
      setAlertMessage(data.mesagge);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center">Crear una cuenta</h1>
              <hr />
              {alertMessage && (
                <div className="alert alert-danger" role="alert">
                  {alertMessage}
                </div>
              )}
              <form onSubmit={onSubmit}>
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
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-outline-primary">
                    Siguiente
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
