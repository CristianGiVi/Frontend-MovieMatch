import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createReview } from "../Helpers/createReview";

export const AddMovieReview = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const token = localStorage.getItem('token');
      console.log(token)
      if (!token) {
        setError("Usuario no ha iniciado sesion");
        return;
      }

      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userId = decodedToken.id;

      const reviewData = {
        rating: parseFloat(rating),
        comment,
        user_id: userId,
        movie_id: parseInt(id)
      };

      const data = await createReview(reviewData);

      if (data.status == 201) {
        setComment("");
        setRating("");
      } else {
        setError(data.mesagge);
      }

    } catch (error) {
      setError("Error fetching movie reviews.");
    }
  };

 
  return (
    <div className="container mt-3">
      <hr />
      {error ? (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      ) :  (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comentario</label>
          <textarea
            className="form-control"
            id="comment"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Calificación (0.0 - 10.0)</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            className="form-control"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="text-center mb-3">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
      )
    }
    </div>
  );
};