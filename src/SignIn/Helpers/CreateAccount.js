export const createAccount = async (newUserData) => {
    const url = 'http://localhost:3000/moviematch/join';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    };

    try {
        const resp = await fetch(url, options);
        const data = await resp.json();
        if (data.status !== 201) {
            return { mesagge: data.message, status: data.status };
          }
        return data;
    } catch (error) {
        return {mesagge: error.message, status: 500}; 
    }
};