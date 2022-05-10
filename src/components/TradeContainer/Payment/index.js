import React from 'react';
import payment from '../../../images/payment.png';
import './index.scss';

const Payment = () => {
    return (
        <section className='payment-container'>
            <article className='payment-container__img-container'>
                <img src={payment} alt='logo' />
            </article>
            <article className='payment-container__text-container' >
                <span>* Some of the payment methods may not be available in your country</span>
            </article>
        </section>
    );
}


export default Payment;