import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>

            <p className='text-5xl md:text-9xl font-bold'>404</p>
            <p className='text-5xl md:text-9xl font-bold'>You are lost</p>
            <Link to='/'>
                <button class=" mt-10 p-5 bg-red-300 text-black font-bold rounded-none ...">Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;