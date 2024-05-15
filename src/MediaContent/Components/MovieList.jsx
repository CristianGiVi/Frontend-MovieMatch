import { useEffect, useState } from "react";
import { getAllMovies } from "../Helpers/getAllMovies";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllMovies();
                setMovies(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
            movies.map(
                (movie) => (
                    <MovieCard key={movie.id} movieData={movie} />
                ))
            }
        </div>
    );
};
