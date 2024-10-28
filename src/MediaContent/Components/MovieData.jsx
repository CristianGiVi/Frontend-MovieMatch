import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../Helpers/getMoviebyId';
import { MovieReview } from './MovieReview';
import { getPoster } from '../Helpers/getPoster';

export const MovieData = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const [poster, setPoster] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await getMovieById(id);
        if (movie) {
          setMovieDetails(movie);
          const data = await getPoster(movie.title);
          if (data) {
            setPoster(data);
          }
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

    <>


      {error ? (
        <div className="alert alert-danger" role="alert">
          No existe esta película.
        </div>
      ) : movieDetails ? (
        <>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <img
                    src={poster}
                    className="card-img-top rounded-top"
                    alt={movieDetails.title}
                    style={{
                      height: '500px',
                      width: '100%'
                    }}
                  />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Título:</b> {movieDetails.title}</li>
                    <li className="list-group-item"><b>Censor:</b> {movieDetails.censorBoardRating}</li>
                    <li className="list-group-item"><b>Duración:</b> {movieDetails.length} min</li>
                    <li className="list-group-item"><b>Año de lanzamiento:</b> {movieDetails.yearRelease}</li>
                    <li className="list-group-item"><b>Descripción:</b> {movieDetails.plot}</li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>   
        <div className="container mt-5"><MovieReview movieId={id} /></div>     
        </>

      ) : (
        <div className="alert alert-warning" role="alert">
          Cargando detalles de la película...
        </div>
      )}



      

    </>

  );
};
