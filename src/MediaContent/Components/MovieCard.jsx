import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export const MovieCard = ({ movieData }) => {
  const { _id, title, yearRelease, censorBoardRating, plot } = movieData;
  const [poster, setPoster] = useState("");

  useEffect(() => {
    // setPoster(movieData.posterUrl);
  }, [movieData]);

  return (
    <div className="card h-100">
      <img src={poster} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{plot}</p>
        <p className="card-text">
          <small className="text-muted">{censorBoardRating}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{yearRelease}</small>
        </p>
        <Link to={`/movies/${_id}`} className="btn btn-primary">
          Más..
        </Link>
      </div>
    </div>
  );
};
