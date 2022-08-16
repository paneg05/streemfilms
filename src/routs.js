import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Erro from "./pages/Erro";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>

            
            <Routes>
                
                <Route path="/" element={<Home/>}/>
                <Route path="/filme/:id" element={<Filmes/>}/>

                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp