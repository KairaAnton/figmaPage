import React from 'react';
import noteLeft from '../../../images/noteLeft.png';
import noteRight from '../../../images/noteRight.png';
import arrow from '../../../images/arrow.png';
import './index.scss';
import TextTitle from '../../TextTitle';
import TextParagraph from '../../TextParagraph';
import Button from '../../Button';
import { useSelector } from 'react-redux';

const TradeDemo = () => {
    const { h, p,btnContent:{btnLeft,btnRight} } = useSelector(state => state.content.tradeDemo)

    return (
        <section className='trade-demo'>
            <div className="trade-demo__container _container">
                <img src={noteLeft} alt='logo' className='trade-demo__img trade-demo__left' />
                <img src={noteRight} alt='logo' className='trade-demo__img trade-demo__right' />
                <div className='trade-demo__ellipse' />
                <div className='trade-demo__content'>
                    <img src={arrow} alt='logo' />
                    <TextTitle className='trade-demo__title'>{h}</TextTitle>
                    <TextParagraph className='trade-demo__paragraph' >{p}</TextParagraph>
                    <article className='trade-demo__button-container' >
                        <Button className='trade-demo__button-blue' type='blue'>{btnLeft}</Button>
                        <span>or</span>
                        <Button className='trade-demo__button-white' type='white'>{btnRight}</Button>
                    </article>
                </div>
            </div>
        </section>
    );
}


export default TradeDemo;