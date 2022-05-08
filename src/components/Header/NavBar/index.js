import React from 'react';
import Navigation from '../../Navigation';
import logo from './../../../images/logo.png';
import user from './../../../images/user.png';
import styles from './NavBar.module.scss';
import Button from '../../Button';


const NavBar = () => {
    return (
        <section className={styles.headerNav}>
            <img src={logo} alt='logo' />
            <Navigation className={styles.navBar} />
            <article className={styles.login}>
                <img src={user} className={styles.userLogo} alt='logo' />
                <span>Login</span>
                <Button className={styles.button} content='Start trading' />
            </article>
        </section>
    );
}


export default NavBar;