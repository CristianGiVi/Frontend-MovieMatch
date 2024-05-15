import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../Navbar/Navbar"
import { Movie, Serie } from "../Pages"
import { MovieData } from "../Components/MovieData"

export const MediaContentRoutes = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="movies" element={<Movie/>}/>

                    <Route path="series" element={<Serie/>}/>

                    <Route path="movies/:id" element={<MovieData />}></Route>
                </Routes>

            </div>



        </>
    )
}
