import React from 'react';
import './index.scss';
import TextParagraph from '../../TextParagraph';
import logo from '../../../images/logo.png';
import Navigation from '../../Navigation';

const FooterNav = () => {

    const text = <span>Операции, предлагаемые данным сайтом, могут осуществляться только совершеннолетними (18+) и полностью дееспособными лицами. Операции с 
        финансовыми инструментами, которые выполняются посредством этого сайта, могут относиться к операциям с высоким уровнем риска и повлечь за собой
          потерю вложенных средств. Перед принятием решения о начале торговли вы обязаны ознакомиться с Условиями и соглашениями об оказании услуг, а также с 
           <a className='footer-nav__a' href='#'> Уведомлением о рисках</a>,
            <a className='footer-nav__a' href='#'> Политикой конфиденциальности</a>, <a  className='footer-nav__a' href='#'>Политикой AML</a> и
             <a className='footer-nav__a' href='#'> Политикой KYC</a>.</span>
    return (
        <section className='footer-nav'>
            <div className='footer-nav__container _container'>
                <article className='footer-nav__navigation'>
                    <img src={logo} alt='logo' />
                    <Navigation />
                </article>
                <article className='footer-nav__risks'>
                    <h3>Уведомление о рисках:</h3>
                    <TextParagraph className='footer-nav__paragraph'>{text}</TextParagraph>
                </article>
            </div>
        </section>
    );
}

FooterNav.propTypes = {};

export default FooterNav;