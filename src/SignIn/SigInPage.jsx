import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "./Helpers/CreateAccount";

export const SigInPage = () => {
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");

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
      console.log(data)
      navigate("/login", {replace: true,}); 
    }
    
    console.log(data)

  };

  return (
    <div className="container mt-5">
      <h1>Crear una cuenta</h1>
      <hr />

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Siguiente
        </button>
      </form>

      <p className="mt-3">
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>.
      </p>
    </div>
  );
};
