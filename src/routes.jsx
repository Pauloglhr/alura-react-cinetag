import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio";

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element= {<Inicio/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;