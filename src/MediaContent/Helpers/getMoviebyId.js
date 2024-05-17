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
        if (data.status != 200) {
            return { mesagge: error.message, status: data.status };
        }
        const movieDetails = data.data;
        return {data: movieDetails, status: 200};
    } catch (error) {
        return { mesagge: error.message, status: 500 }; 
    }
}