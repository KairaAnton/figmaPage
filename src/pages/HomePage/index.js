import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TradeContainer from '../../components/TradeContainer';

const HomePage = () => {
    return (
    /* <section className='home-page'> /!*здесь тег не нужен *!/
        <Header />
        <TradeContainer/>
        <Footer />
    </section>*/
    <>
        <Header />
        <TradeContainer/>
        <Footer />
    </>
    );
}



export default HomePage;