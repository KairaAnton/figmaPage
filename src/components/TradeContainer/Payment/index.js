import React from 'react';
import visa from '../../../images/visa.svg';
import mastercard from '../../../images/mastercard.svg';
import paypal from '../../../images/paypal.svg';
import transfer from '../../../images/transfer.svg';
import skill from '../../../images/skill.svg';
import deal from '../../../images/deal.svg';
import bpay from '../../../images/bpay.svg';
import klarna from '../../../images/klarna.svg';
import giropay from '../../../images/giropay.svg';
import trusli from '../../../images/trusli.svg';
import przelewy from '../../../images/przelewy.svg';
import mb from '../../../images/mb.svg';
import mybank from '../../../images/mybank.svg';
import blik from '../../../images/blik.svg';
import './index.scss';
import { useSelector } from 'react-redux';

const Payment = () => {
    const content  = useSelector(state => state.content.payment)
    return (
        <section className='payment'>
            <article className='payment__background'>
                <div className='payment__img-container _container'>
                    <img src={visa} alt='logo' />
                    <img src={mastercard} alt='logo' />
                    <img src={paypal} alt='logo' />
                    <img src={transfer} alt='logo' />
                    <img src={skill} alt='logo' />
                    <img src={deal} alt='logo' />
                    <img src={bpay} alt='logo' />
                    <img src={klarna} alt='logo' />
                    <img src={giropay} alt='logo' />
                    <img src={trusli} alt='logo' />
                    <img src={przelewy} alt='logo' />
                    <img src={mb} alt='logo' />
                    <img src={mybank} alt='logo' />
                    <img src={blik} alt='logo' />
                </div>
            </article>
            <article className='payment__text-container _container' >
                <span>{content}</span>
            </article>

        </section>
    );
}


export default Payment;