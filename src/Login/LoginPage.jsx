import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "./Helpers/PostUser";

export const LoginPage = () => {

  

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await postUser({ email: email, password: password });
    
    if (data.status == 200) {
      console.log(data)
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="container mt-5">
      <h1>Inicio de sesion</h1>
      <hr />

      <form onSubmit={onLogin}>
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

        <button type="submit" className="btn btn-primary">
          Siguiente
        </button>
      </form>

      <p className="mt-3">
        ¿No tienes una cuenta? <Link to="/sigin">Regístrate aquí</Link>.
      </p>
    </div>
  );
};
