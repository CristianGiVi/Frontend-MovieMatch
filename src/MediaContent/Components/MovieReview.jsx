import { useParams } from "react-router-dom";
import { getMovieReviews } from "../Helpers/getMovieReviews";
import { useEffect, useState } from "react";
import { AddMovieReview } from "./AddMovieReview";

export const MovieReview = () => {

  const { id } = useParams();
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const data = await getMovieReviews(id);
            setReviews(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching movie:', error);
        }
    };

    fetchReviews();
}, [id]);

  return (
    <>

    <AddMovieReview/>
    
      <h1>All movie reviews</h1>
    
    </>
    
  )
}
