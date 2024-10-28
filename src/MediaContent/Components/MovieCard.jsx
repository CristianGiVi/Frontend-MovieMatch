import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getPoster } from '../Helpers/getPoster';

export const MovieCard = ({ movieData }) => {
  const { _id, title, yearRelease, censorBoardRating, plot } = movieData;
  const [poster, setPoster] = useState("");

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await getPoster(title);
            if (data) {
              setPoster(data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    fetchData();
}, [movieData]);

return (
  <div className="card h-100 border border-dark rounded shadow-sm" style={{ backgroundColor: '#fff', color: '#000' }}>
    <img 
      src={poster} 
      className="card-img-top rounded-top" 
      alt={title} 
      style={{
        height: '300px'
      }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title fw-bold">{title}</h5>
      <p className="card-text text-secondary mb-2">{plot}</p>
      <div className="mt-auto">
        <p className="card-text mb-1">
          <small className="text-muted">Clasificación: {censorBoardRating}</small>
        </p>
        <p className="card-text mb-3">
          <small className="text-muted">Año de lanzamiento: {yearRelease}</small>
        </p>
        <Link to={`/movies/${_id}`} className="btn btn-danger w-100 text-white">
          Más..
        </Link>
      </div>
    </div>
  </div>
);
};
