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
        if (data.status == 200) {
            localStorage.setItem('token', data.token);  // Almacena el token en localStorage
        }
        return data;
    } catch (error) {
        return { mensaje: error.message, status: 500 };
    }
};  