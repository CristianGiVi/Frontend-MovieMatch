export const postUser= async (userData) => {
    const url = 'http://localhost:3000/moviematch/login';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    try {
        const resp = await fetch(url, options);
        const data = await resp.json();
        return data;
    } catch (error) {
        return {mensaje: error.mesagge, status: 500}; 
    }
};