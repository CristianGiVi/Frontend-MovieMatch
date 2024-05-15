export const getMovieReviews = async (movieId) => {
    const URL = `http://localhost:3000/moviematch/reviews/movie/${movieId}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Falta agregar la utentificacion

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
 
        if (data.status != 200) {
            return null;
        }

        const reviews = data.data;

        return reviews;
    } catch (error) {
        return { mensaje: error.message, status: 500 }; 
    }
}