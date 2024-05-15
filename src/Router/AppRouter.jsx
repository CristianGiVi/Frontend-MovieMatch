import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../Login/LoginPage"
import { SigInPage } from "../SignIn/SigInPage"
import { MediaContentRoutes } from "../MediaContent/Routes/MediaContentRoutes"
import { Navbar } from "../Navbar/Navbar"

export const AppRouter = () => {
    return (
        <>

            <Navbar/>
            <Routes>
                <Route path="login" element={<LoginPage/>}/>

                <Route path="sigin" element={<SigInPage/>}/>

                <Route path="/*" element={<MediaContentRoutes/>}/>
            </Routes>
        </>
    )
}
