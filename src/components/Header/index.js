import React from 'react';
import NavBar from './NavBar';
import SerchBar from './SearchBar';
import './index.scss';

const Header = () => {
    return (
        <section className='container-one'>
            <SerchBar />
            <NavBar />
        </section>
    );
}


export default Header;