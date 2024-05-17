import { MovieList } from "../Components";

export const Movie = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Peliculas</h1>
      <hr />
      <MovieList />
    </div>
  );
};
