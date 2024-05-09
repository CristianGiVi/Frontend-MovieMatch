export const postUser= async (user) => {
    const url = 'http://localhost:3000/api/login';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    try {
        const resp = await fetch(url, options);
        const data = await resp.json();
        return data;
    } catch (error) {
        return {mensaje: error.mensaje, status: 500}; 
    }
};