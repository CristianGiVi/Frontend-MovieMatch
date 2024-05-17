import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export const MovieCard = ({ movieData }) => {
  const { id, tittle, yearRelease, category, censorBoardRating, description } = movieData;
  const [poster, setPoster] = useState("");

  useEffect(() => {
    // setPoster(movieData.posterUrl);
  }, [movieData]);

  return (
    <div className="card h-100">
      <img src={poster} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{tittle}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{category}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{censorBoardRating}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{yearRelease}</small>
        </p>
        <Link to={`/movies/${id}`} className="btn btn-primary">
          Más..
        </Link>
      </div>
    </div>
  );
};
