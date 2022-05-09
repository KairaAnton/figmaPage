import React from 'react';
import noteLeft from '../../../images/noteLeft.png';
import noteRight from '../../../images/noteRight.png';
import arrow from '../../../images/arrow.png';
import './index.scss';
import TextTitle from '../../TextTitle';
import TextParagraph from '../../TextParagraph';
import Button from '../../Button';

const TradeDemo = () => {
    const contentTitle = 'Trade CFDs on Shares, Indices, Forex and Cryptocurrencies';
    const contentP = 'Reliable, Simple, Innovative. Join millions who have already traded with Nordic Association of Brokers.'
    return (
        <div className='trade-demo'>
            
                <img src={noteLeft} alt='logo' className='trade-demo__left' />
                <img src={noteRight} alt='logo' className='trade-demo__right' />
            
            <section className='trade-demo__content'>
                <img src={arrow} alt='logo' />
                <TextTitle className='trade-demo__title' content={contentTitle} />
                <TextParagraph className='trade-demo__paragraph' content={contentP}/>
                <article className='trade-demo__button-container' >
                    <Button className='trade-demo__button-blue' content='Start Trading Now' />
                    <span>or</span>
                    <Button className='trade-demo__button-white' content='Try Free Demo'/>
                </article>
            </section>
        </div>
    );
}


export default TradeDemo;