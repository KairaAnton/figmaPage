import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <section className={styles.homePage}>
            <Header />
            <Footer />
        </section>
    );
}



export default HomePage;