// Importa los componentes y elementos necesarios de react-router-dom
import { Route, Routes } from "react-router-dom";
// Importa el componente Navbar desde la ruta correspondiente
import { Navbar } from "../../Navbar/Navbar";
// Importa los componentes Movie y Serie desde las rutas correspondientes
import { Movie, Serie } from "../Pages";
// Importa el componente MovieData desde la ruta correspondiente
import { MovieData } from "../Components/MovieData";

// Define y exporta el componente MediaContentRoutes
export const MediaContentRoutes = () => {
    return (
        <>
            {/* Contenedor principal con clase "container" */}
            <div className="container">
                {/* Define las rutas de la aplicación */}
                <Routes>
                    {/* Ruta para la página de películas */}
                    <Route path="movies" element={<Movie/>}/>
                    {/* Ruta para la página de series */}
                    <Route path="series" element={<Serie/>}/>
                    {/* Ruta para la página de detalles de una película específica */}
                    <Route path="movies/:id" element={<MovieData />}></Route>
                </Routes>
            </div>
        </>
    );
}
