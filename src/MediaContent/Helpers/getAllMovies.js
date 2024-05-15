export const getAllMovies = async () => {
    const URL = 'http://localhost:3000/moviematch/movies';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        return data.data;
    } catch (error) {
        return { mensaje: error.message, status: 500 }; 
    }
}
