import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.scss';
import TradeContainer from '../../components/TradeContainer';

const HomePage = () => {
    return (
        <section className='home-page'>
            <Header />
            <TradeContainer/>
            <Footer />
        </section>
    );
}



export default HomePage;