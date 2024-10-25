import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Login/modals/LoginModal";
import SigInModal from "../SignIn/modals/SigInModal";

import moviematchIcon from "../public/moviematch.png";

export const Navbar = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalSigIn, setShowModalSigIn] = useState(false);

  // useNavigate es un hook que proporciona una función para programáticamente navegar a otra ruta
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const onLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login", { replace: true });
  };

  return (
    <>
      <img
        src={moviematchIcon}
        alt="Descripción de la imagen"
        style={{
          width: "150px",
          height: "150px",
          zIndex: 2,
          position: "absolute",
          marginTop: "-75px",
          marginLeft: "40px",
        }}
      />

<nav className="navbar navbar-dark bg-dark p-2" style={{ marginTop: "80px" }}>
        <div className="container-fluid">
          {token ? (
            <div className="ms-auto d-flex">
              {/* Botón de Logout */}
              <button
                className="navbar-brand ms-auto btn btn-dark"
                onClick={onLogout}
              >
                CERRAR SESION
              </button>
            </div>
          ) : (
            <div className="ms-auto d-flex">
              {/* Botón de Crear Cuenta */}
              <button
                className="navbar-brand ms-auto btn btn-dark"
                onClick={() => setShowModalSigIn(true)}
              >
                CREAR CUENTA
              </button>

              {/* Botón de Iniciar Sesión */}
              <button
                className="navbar-brand ms-auto btn btn-dark"
                onClick={() => setShowModalLogin(true)}
              >
                INICIAR SESION
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Modal para iniciar sesion */}
      <LoginModal
        show={showModalLogin}
        handleClose={() => setShowModalLogin(false)}
      />

      {/* Modal para crear cuenta */}
      <SigInModal
        show={showModalSigIn}
        handleClose={() => setShowModalSigIn(false)}
      />
    </>
  );
};
