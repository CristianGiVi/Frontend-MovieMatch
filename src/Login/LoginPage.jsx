import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "./Helpers/PostUser";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await postUser({ email: email, password: password });
    
    if (data.status == 200) {
      navigate("/movies", { replace: true });
    } else {
      setAlertMessage(data.mesagge);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center">Inicio de sesión</h1>
              <hr />
              {alertMessage && (
                <div className="alert alert-danger" role="alert">
                  {alertMessage}
                </div>
              )}
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
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-outline-primary">
                    Siguiente
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                ¿No tienes una cuenta? <Link to="/sigin">Regístrate aquí</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
