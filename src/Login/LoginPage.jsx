import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);


    
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <form onSubmit={onLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
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

        <button type="button" className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </form>

      <p>
        ¿No tienes una cuenta? <Link to="/sigin">Regístrate aquí</Link>.
      </p>
    </div>
  );
};
