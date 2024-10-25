import { useParams } from "react-router-dom";
import { getMovieReviews } from "../Helpers/getMovieReviews";
import { useEffect, useState } from "react";
import { AddMovieReview } from "./AddMovieReview";

export const MovieReview = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(id);
        if (data) {
          setReviews(data);
        } else {
          setError(data);
        }
      } catch (error) {
        setError("Error fetching movie reviews.");
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4">Reseñas de Películas</h2>
      <AddMovieReview movieId={id} />
      {error ? (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      ) : reviews.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          No hay reseñas disponibles para esta película.
        </div>
      ) : (
        reviews.map((review) => (
          <div className="card mb-3" key={review.reviewId}>
            <div className="card-body">
              <h5 className="card-title">
                {review.userName} {review.userLastName}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <span className="font-weight-bold">Rating: </span>
                <span className="text-danger">{review.rating}/10</span>
              </h6>
              <p className="card-text">{review.comment}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
