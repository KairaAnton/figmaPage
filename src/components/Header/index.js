import React from 'react';
import NavBar from './NavBar';
import SerchBar from './SearchBar';
import './index.scss';

const Header = () => {
    return (
        <header className='header'>
            <SerchBar />
            <NavBar />
        </header>
    );
}


export default Header;