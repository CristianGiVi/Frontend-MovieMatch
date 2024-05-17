import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from '../Helpers/getMoviebyId';
import { MovieReview } from './MovieReview';

export const MovieData = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(id);
        if (data.status == 200) {
          const movie = data.data;
          setMovieDetails(movie);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {error ? (
            <div className="alert alert-danger" role="alert">
              No existe esta película.
            </div>
          ) : movieDetails ? (
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">{movieDetails.title}</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><b>Título:</b> {movieDetails.tittle}</li>
                  <li className="list-group-item"><b>Categoría:</b> {movieDetails.category}</li>
                  <li className="list-group-item"><b>Censor:</b> {movieDetails.censorBoardRating}</li>
                  <li className="list-group-item"><b>Duración:</b> {movieDetails.length} min</li>
                  <li className="list-group-item"><b>Año de lanzamiento:</b> {movieDetails.yearRelease}</li>
                  <li className="list-group-item"><b>Descripción:</b> {movieDetails.description}</li>
                </ul>
                <hr />
                <MovieReview movieId={id} />
              </div>
            </div>
          ) : (
            <div className="alert alert-warning" role="alert">
              Cargando detalles de la película...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
