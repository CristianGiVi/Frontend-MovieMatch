import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from '../Helpers/getMoviebyId';
import {MovieReview} from './MovieReview'

export const MovieData = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getMovieById(id);
                setMovieDetails(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovie();
    }, [id]);

    const onNavigateBack = () => {
        navigate(-1);
      }
    
      return (
        
        <div className="row mt-5">
          <div className="col-8">
            {movieDetails ? (
              <>
                <h3>{movieDetails.title}</h3>
                <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>Titulo:</b> { movieDetails.tittle } </li>
                  <li className="list-group-item"> <b>Categoria:</b> { movieDetails.category } </li>
                  <li className="list-group-item"> <b>Censor:</b> { movieDetails.censorBoardRating } </li>
                  <li className="list-group-item"> <b>Duracion:</b> { movieDetails.length } min</li>
                  <li className="list-group-item"> <b>Año de lanzamiento:</b> { movieDetails.yearRelease } </li>
                  <li className="list-group-item"> <b>Descripcion:</b> { movieDetails.description } </li>
                </ul>

                <hr />
                <button 
                  className="btn btn-outline-primary"
                  onClick={ onNavigateBack }
                >
                  Regresar
                </button>

                <hr />

                <MovieReview />
              </>
            ) : (
              <p>No existe esta pelicula</p>
            )}
          </div>
        </div>
      )

}

