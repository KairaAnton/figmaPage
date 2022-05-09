import React from 'react';
import safe from '../../../images/safe.png';
import column from '../../../images/column.png';
import lock from '../../../images/lock.png';
import TextTitle from '../../TextTitle';
import TradeRule from './TradeRule';
import './index.scss';


const TradeWithTrust = () => {

    const text = 'Trade with Trust';
    const textColumn = 'Nordic Association of Brokers Ltd is a FTSE 250 company listed on the London Stock Exchange’s Main Market for Listed Companies';
    const textSafe = 'Your funds are kept in segregatedbank accounts';
    const textLock = 'Secured by SSL';
    
    return (
        <section className='trust-container'>
            <img src={column} alt='logo' className='trust-container__img-column' />
            <img src={safe} alt='logo' className='trust-container__img-safe' />
            <img src={lock} alt='logo' className='trust-container__img-lock' />
            <TextTitle content={text} />
            <ul className='trust-container__rules-container'>
            <TradeRule imgSrc={column} classNameImg='trust-container__rule-column' content={textColumn}/>
            <TradeRule imgSrc={safe} classNameImg='trust-container__rule-safe' content={textSafe}/>
            <TradeRule imgSrc={lock} classNameImg='trust-container__rule-lock' content={textLock}/>
            </ul>
        </section>
    );
}


export default TradeWithTrust;