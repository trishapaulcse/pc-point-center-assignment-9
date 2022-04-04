import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div>
                    <h1>PC-POINT-SHOP</h1>
                </div>
                <div>
                    <a href="/Shop">Home</a>
                    <a href="/About">Review</a>
                    <a href="/Orders">Dashboard</a>
                    <a href="/Review">Blog</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;