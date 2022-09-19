import React from "react";
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuFilmes from './pages/menuFilmes';
import Main from './components/main';
import Series from './pages/series';
import Filmes from  './pages/Filmes';


function routes () {
    return (
        <Router>
            
        <Routes>
            
                <Route  path='/' element={<Main />}/> 
                <Route path='/Inicio' element={<MenuFilmes />}/>
                <Route  path='/Series' element={<Series />}/>
                <Route  path='/Filmes' element={<Filmes />}/>
        </Routes>
        </Router>
        
    );
}
export default routes;