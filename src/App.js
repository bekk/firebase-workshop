import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import Dish from './Dish';
import Dishes from './Dishes';
import Home from './Home';

const App = () => {
    return (
        <div>    
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/dishes/:id" element={ <Dish /> } />
                <Route path="/dishes" element={ <Dishes /> } />
            </Routes>
        </div>
    );
}

export default App;
