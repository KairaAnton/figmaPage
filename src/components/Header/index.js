import React from 'react';
import './index.scss';
import NavBar from './NavBar';
import SerchBar from './SearchBar';

const Header = () => {
    return (/*
        <section className='container-one'>
            <SerchBar />
            <NavBar />
        </section>*/
        <header className='header'>
            <SerchBar />
            <NavBar />
        </header>
    );
}


export default Header;