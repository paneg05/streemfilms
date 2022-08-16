import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from './pages/Home'
import Filmes from './pages/Filmes'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>

            
            <Routes>
                
                <Route path="/" element={<Home/>}/>
                <Route path="/filme/:id" element={<Filmes/>}/>


            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp