// Importa el componente MovieList desde la ruta correspondiente
import { MovieList } from "../Components";

// Define y exporta el componente Movie
export const Movie = () => {
  return (
    // Contenedor principal con margen superior
    <div className="container mt-5">
      {/* Título centrado */}
      <h1 className="text-center mb-4">Peliculas</h1>
      {/* Línea horizontal */}
      <hr />
      {/* Renderiza el componente MovieList */}
      <MovieList />
    </div>
  );
};
