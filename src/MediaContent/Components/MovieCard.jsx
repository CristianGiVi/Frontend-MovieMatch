import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export const MovieCard = ({movieData}) => {
    const {id, tittle, yearRelease, category, censorBoardRating, description } = movieData;
    const [poster, setPoster] = useState("");

    return (
            <div className="card">
                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={ poster } className="card-img" alt={ tittle } />
                    </div>

                    <div className="col-8">
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
                            <Link to={`/movies/${ id }`}>
                                Más..
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};