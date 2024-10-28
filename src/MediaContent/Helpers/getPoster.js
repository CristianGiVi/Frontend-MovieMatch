
export const getPoster = async (search) => {
    if (search) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=3f6ff1fa&t=${search}`);
        const json = await response.json();
        return json.Poster; 
    } else {
        return [];  
    }
}