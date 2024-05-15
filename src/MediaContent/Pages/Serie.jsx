import { useEffect, useState } from "react"

export const Serie = () => {
  const [data, setData] = useState("")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => response.json())
      .then((data) => {setData(data), console.log(data)});

  }, []);

  return (
    <>
        <h1>{data.name}</h1>
    </>
  )
}

