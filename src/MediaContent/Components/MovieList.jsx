import { useEffect, useState } from "react";
import { getAllMovies } from "../Helpers/getAllMovies";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [alertMessage, setAlertMessage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movies = await getAllMovies();
                if (movies.length > 0) {
                    setMovies(movies);
                    setAlertMessage(null);
                } else {
                    setAlertMessage("No hay peliculas");
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                setAlertMessage("Hubo un error al obtener las películas.");
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar películas..."
                        value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                </div>
            </div>

            {alertMessage && (
                <div className="alert alert-warning" role="alert">
                    {alertMessage}
                </div>
            )}

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {movies
                    .filter((movie) =>
                        movie.title.toLowerCase().includes(searchKey.toLowerCase())
                    )
                    .map((movie) => (
                        <div className="col mb-4" key={movie._id}>
                            <MovieCard movieData={movie} />
                        </div>
                    ))}
            </div>
        </div>
    );
};
