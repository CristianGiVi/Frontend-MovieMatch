// Importa los componentes y hooks necesarios desde react-router-dom
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// Define y exporta el componente Navbar
export const Navbar = () => {
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
    // Barra de navegación con clases de Bootstrap para estilo
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      {/* Link para navegar al login, con estilo de marca */}
      <Link className="navbar-brand" to="/login">
        Login
      </Link>

      {/* Contenedor colapsable para los enlaces de navegación */}
      <div className="navbar-collapse">
        <div className="navbar-nav">
          {/* NavLink crea enlaces de navegación con estilos activos automáticos */}
          <NavLink className="nav-item nav-link" to="/movies">
            Peliculas
          </NavLink>

          <NavLink className="nav-item nav-link" to="/series">
            Series
          </NavLink>
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
  );
};
