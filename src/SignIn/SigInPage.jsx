import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SigInPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { nombre, apellido, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos del formulario al servidor
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h1>Create Account</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleChange}
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
            value={apellido}
            onChange={handleChange}
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
            value={email}
            onChange={handleChange}
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
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Verificación de Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>

      <p className="mt-3">
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>.
      </p>
    </div>
  );
};
