import { FC } from 'react';
import './index.scss';
import { useAppSelector } from '../../../hooks';


const Payment: FC = () => {
    const {content} = useAppSelector(state => state.content.payment);
    const { visa, mastercard, paypal, transfer,
        skill, deal, bpay, klarna, giropay, trusli,
        przelewy, mb, mybank, blik } = useAppSelector(state => state.images);

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