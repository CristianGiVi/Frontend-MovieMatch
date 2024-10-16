import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../Login/modals/LoginModal"

import moviematch from "../public/moviematch.png";

export const Navbar = () => {

  const [showModalLogin, setShowModalLogin] = useState(false);

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
    <img src={moviematch} alt="Descripción de la imagen" style={{ width: "10%", height: "auto", zIndex: 2, position: "absolute", marginTop:"-50px", marginLeft: "40px" }} />

    <nav className="navbar  navbar-dark bg-dark p-2 mt-5">
      <div className="container-fluid">
        <div className="ms-auto d-flex">
          {/* Elementos alineados a la derecha */}
          <button className="navbar-brand ms-auto btn btn-dark">
            Crear cuenta
          </button>

          {/* Link para navegar al login, con estilo de marca */}
          <button className="navbar-brand ms-auto btn btn-dark" onClick={() => setShowModalLogin(true)}>
            Iniciar sesion
          </button>
        </div>
      </div>

      {/* Contenedor colapsable para el botón de logout, alineado a la derecha */}
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          {token && (
            <button className="nav-item nav-link btn" onClick={onLogout}>
              Logout
            </button>
          )}
        </ul>
      </div>
    </nav>
        
              {/* Modal para añadir nuevo segmento */}
      <LoginModal
        show={showModalLogin}
        handleClose={() => setShowModalLogin(false)}
      />
    </>
      );
};
