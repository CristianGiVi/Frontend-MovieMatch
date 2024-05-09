import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../Navbar/Navbar"
import { Movie } from "../Pages"

export const MediaContentRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Routes>
                    <Route path="movies" element={<Movie/>}/>

                </Routes>
            </div>

        </>
    )
}
