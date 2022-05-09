import React from 'react';
import Navigation from '../../Navigation';
import logo from './../../../images/logo.png';
import user from './../../../images/user.png';
import './index.scss';
import Button from '../../Button';


const NavBar = () => {
    return (
        <div className='nav-container'>
            <section className='nav-container__header-nav'>
                <img src={logo} alt='logo' />
                <Navigation className='nav-container__nav-bar' />
                <article className='nav-container__login'>
                    <img src={user} className='nav-container__userLogo' alt='logo' />
                    <span>Login</span>
                    <Button className='nav-container__button' content='Start trading' />
                </article>
            </section>
        </div>
    );
}


export default NavBar;