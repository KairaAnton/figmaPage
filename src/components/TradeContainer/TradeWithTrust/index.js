import React from 'react';
import safe from '../../../images/safe.png';
import column from '../../../images/column.png';
import lock from '../../../images/lock.png';
import TextTitle from '../../TextTitle';
import TradeRule from './TradeRule';
import Button from '../../Button';
import './index.scss';
import { useSelector } from 'react-redux';

const TradeWithTrust = () => {
    const { btnContent, h, rules: { textColumn, textSafe, textLock } } = useSelector(state => state.content.tradeTrust)

    return (
        <section className='trust-trade'>
            <div className='trust-trade__container _container'>
                <img src={column} alt='logo' className='trust-trade__img-column' />
                <img src={safe} alt='logo' className='trust-trade__img-safe' />
                <img src={lock} alt='logo' className='trust-trade__img-lock' />
                <TextTitle >{h}</TextTitle>
                <ul className='trust-trade__rules-container'>
                    <TradeRule imgSrc={column} classNameImg='trust-trade__rule-column' >{textColumn}</TradeRule>
                    <TradeRule imgSrc={safe} classNameImg='trust-trade__rule-safe' >{textSafe}</TradeRule>
                    <TradeRule imgSrc={lock} classNameImg='trust-trade__rule-lock' >{textLock}</TradeRule>
                </ul>
                <Button type='white' className='trust-trade__button'>{btnContent}</Button>
            </div>
        </section>
    );
}

export default TradeWithTrust;