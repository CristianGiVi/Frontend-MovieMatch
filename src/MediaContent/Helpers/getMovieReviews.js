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
      return data;
    } catch (error) {
      return { mesagge: error.message, status: 500 }; 
    }
  };
  