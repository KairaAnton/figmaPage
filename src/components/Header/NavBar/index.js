import React from 'react';
import './index.scss';
import Navigation from '../../Navigation';
import logo from './../../../images/logo.png';
import user from './../../../images/user.png';
import Button from '../../Button';


const NavBar = () => {
    return (
        <section className='nav-container'>
            <nav className='nav-container__header-nav _container'>
                <img src={logo} alt='logo' />
                <Navigation className='nav-container__nav-bar' />
                <article className='nav-container__login'>
                    <button className='nav-container__user-button'>
                    <img src={user} className='nav-container__userLogo' alt='logo' />
                    <span>Login</span>
                    </button>
                    <Button type='blue' className='nav-container__button'>Start trading</Button>
                </article>
            </nav>
        </section>
    );
}


export default NavBar;