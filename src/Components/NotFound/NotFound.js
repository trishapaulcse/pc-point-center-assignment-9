import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>

            <p className='text-5xl md:text-5xl'>404</p>
            <p className='text-5xl md:text-9xl'></p>
            <Link to='/'>
                <button class=" mt-10 p-6 bg-blue-300 text-black font-bold rounded-none ...">Go to home page</button>
            </Link>
        </div>
    );
};

export default NotFound;