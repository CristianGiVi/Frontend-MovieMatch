// Importa los componentes y funciones necesarios desde react-router-dom
import { Route, Routes } from "react-router-dom";
// Importa los componentes de página
import { MovieData } from "../MediaContent/Components/MovieData";

import { MovieList } from "../MediaContent/Components/MovieList";

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
        <Route path="/" element={<MovieList />} />

        <Route path="movies/:id" element={<MovieData />}></Route>
      </Routes>
    </>
  );
};
