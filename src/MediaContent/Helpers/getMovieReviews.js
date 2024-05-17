export const getMovieReviews = async (movieId) => {
    const URL = `http://localhost:3000/moviematch/reviews/movie/${movieId}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const response = await fetch(URL, options);
      const data = await response.json();

      if (response.status !== 200) {
        return { mesagge: data.message, status: data.status };
      }
      const reviews = data.reviews;
      return {data: reviews, status: 200};
    } catch (error) {
      return { mesagge: error.message, status: 500 }; 
    }
  };
  