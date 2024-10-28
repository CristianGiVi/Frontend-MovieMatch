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
        if(response.ok){
            const data = await response.json();
            return data;
        }
        return false;
    } catch (error) {
        return { mesagge: error.message, status: 500 }; 
    }
}