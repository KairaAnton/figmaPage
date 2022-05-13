import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../Button';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import './index.scss';
import TradingList from './TradingList';

const Trading = () => {
const {h,p,btnContent:{btnLeft, btnRight}}= useSelector(state=>state.content.trading)

    return (
        <section className='trading'>
            <div className='trading__container _container'>
                <TextTitle className='trading__h1'>{h}</TextTitle>
                <TextParagraph className='trading__paragraph'>{p}</TextParagraph>
                <TradingList />
                <article className='trading__button-container'>
                    <Button type='blue' >{btnLeft}</Button>
                    <span>or</span>
                    <Button type='white' >{btnRight}</Button>
                </article>
            </div>
        </section>
    );
}

export default Trading;