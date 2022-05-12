import React from 'react';
import firstLphone from '../../../images/firstLphone.png';
import firstRphone from '../../../images/firstRphone.png';
import Button from '../../Button';
import TextTitle from '../../TextTitle';
import './index.scss';

const TakeControl = () => {
    return (
        <section className='take-controle'>
            <div className='take-controle__container _container'>
                <article className='control-img-container'>
                    <div className='control-img-container__ellipse' />
                    <img src={firstLphone} alt='logo' className='control-img-container__left-img' />
                    <img src={firstRphone} alt='logo' className='control-img-container__right-img' />
                </article>
                <article className='content-container'>
                    <TextTitle>Take Control</TextTitle>
                    <span className='content-container__span-container'>Use our advanced tools and features to gain control on your account:</span>
                    <ul className='content-container__list'>
                        <li>Stop Limit / Stop Loss / Trailing Stop</li>
                        <li>Guaranteed Stop</li>
                        <li>Negative balance protection</li>
                        <li>FREE email & push notifications on market events</li>
                        <li>Alerts on price movements, Change % & Traders’ Sentiments</li>
                    </ul>
                    <div className='content-container__button-container'>
                        <Button type='white' className='content-container__button-left'>Go to Risk Manangement</Button>
                        <Button type='white' className='content-container__button-right' >Go to Alerts</Button>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default TakeControl;