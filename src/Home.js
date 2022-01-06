import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {  
    const navigate = useNavigate();

    const addDish = () => {
        // Lag document og navigér med id

        const id = 2
        navigate(`dishes/${id}`)

        /*
            Dish-objektet

            Navn: Pizza

            Type: Kjøtt | Vegetar | Fisk | Any
            Land: Italiensk
            Foretrukket helg: True | False
            Tidsbruk: Enkel | Medium | Kevende | Ekstrem

            Historikk: [1. februar, 3. Mars ]
        */
    }
    

    return (
        <div>
            <h1>Dinner Planner</h1>
            <button onClick={ addDish }>Legg til rett</button>
            <h1> Meny for denne uken</h1>

        </div>
    );
}

export default Home;