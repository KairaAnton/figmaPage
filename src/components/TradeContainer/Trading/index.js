import React from 'react';
import Button from '../../Button';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import './index.scss';
import TradingList from './TradingList';

const Trading = () => {
    return (
        <section className='trading'>
            <div className='trading__container _container'>
                <TextTitle className='trading__h1'>Trading at your fingertips</TextTitle>
                <TextParagraph className='trading__paragraph'>Trade anywhere, anytime using our various platforms.</TextParagraph>
                <TradingList />
                <article className='trading__button-container'>
                    <Button type='blue' >Start Trading Now</Button>
                    <span>or</span>
                    <Button type='white' >Try Free Demo</Button>
                </article>
            </div>
        </section>
    );
}

export default Trading;