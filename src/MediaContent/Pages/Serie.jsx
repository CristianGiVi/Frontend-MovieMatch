import { useEffect, useState } from "react";

export const Serie = () => {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      console.log(storedToken);
    } else {
      console.log("No JWT found");
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    console.log(decodedToken);


  }, []);

  return (
    <>
      <h1>En produccion</h1>
    </>
  );
}
