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
        if (data.status == 200) {
          const reviews = data.data;
          setReviews(reviews);
        } else {
          setError(data.mesagge);
        }
      } catch (error) {
        setError("Error fetching movie reviews.");
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div className="mt-4">
      <AddMovieReview movieId={id} />
      {error ? (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      ) :  (
        reviews.map((review) => (
          <div className="card mb-3" key={review.id}>
            <div className="card-body">
              <h5 className="card-title">
                {review.userName} {review.userLastName}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Rating: {review.rating}/10
              </h6>
              <p className="card-text">{review.comment}</p>
            </div>
          </div>
        ))
      )
      }
    </div>
  );
};
