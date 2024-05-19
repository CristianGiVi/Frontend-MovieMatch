// Importa los componentes y funciones necesarios desde react-router-dom
import { Route, Routes } from "react-router-dom";
// Importa los componentes de página
import { LoginPage } from "../Login/LoginPage";
import { SigInPage } from "../SignIn/SigInPage";
import { MediaContentRoutes } from "../MediaContent/Routes/MediaContentRoutes";
import { HomePage } from "../HomePage/HomePage";
// Importa el componente Navbar
import { Navbar } from "../Navbar/Navbar";

// Define y exporta el componente AppRouter
export const AppRouter = () => {
  return (
    <>
      {/* Renderiza el componente Navbar */}
      <Navbar />
      {/* Define las rutas de la aplicación */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<HomePage />} />

        {/* Ruta para la página de login */}
        <Route path="login" element={<LoginPage />} />

        {/* Ruta para la página de registro */}
        <Route path="signin" element={<SigInPage />} />

        {/* Ruta por defecto que renderiza MediaContentRoutes para todas las demás rutas */}
        <Route path="/*" element={<MediaContentRoutes />} />
      </Routes>
    </>
  );
};
