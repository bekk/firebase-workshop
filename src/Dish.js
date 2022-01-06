import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Dish = () => {  
    let { id } = useParams();

    return (
        <div>
            <h1>Rett skal være rett { id }</h1>
            <Link to="/" replace >Hjem </Link>
        </div>
    );
}

export default Dish;