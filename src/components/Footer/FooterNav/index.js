import React from 'react';
import './index.scss';
import TextParagraph from '../../TextParagraph';
import logo from '../../../images/logo.png';
import Navigation from '../../Navigation';
import { useSelector } from 'react-redux';

const FooterNav = () => {
    const {h,p} = useSelector(state=>state.content.footerNav)

    return (
        <section className='footer-nav'>
            <div className='footer-nav__container _container'>
                <article className='footer-nav__navigation'>
                    <img src={logo} alt='logo' />
                    <Navigation />
                </article>
                <article className='footer-nav__risks'>
                    <h3>{h}</h3>
                    <TextParagraph className='footer-nav__paragraph'>{p}</TextParagraph>
                </article>
            </div>
        </section>
    );
}

FooterNav.propTypes = {};

export default FooterNav;