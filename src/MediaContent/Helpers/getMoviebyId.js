export const getMovieById = async ( id ) => {
    const URL = `http://localhost:3000/moviematch/movies/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        const movieDetails = data.data;

        if (data.status != 200) {
            return null;
        }

        return movieDetails;
    } catch (error) {
        return { mensaje: error.message, status: 500 }; 
    }
}