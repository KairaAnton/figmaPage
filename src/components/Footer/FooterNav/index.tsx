import { FC } from 'react';
import './index.scss';
import { useAppSelector } from '../../../hooks';
import TextParagraph from '../../TextParagraph';
import Navigation from '../../Navigation';

const FooterNav: FC = () => {
    const { h, pSpan } = useAppSelector(state => state.content.footerNav);
    const { logo } = useAppSelector(state => state.images);

    return (
        <section className='footer-nav'>
            <div className='footer-nav__container _container'>
                <article className='footer-nav__navigation'>
                    <img src={logo} alt='logo' />
                    <Navigation />
                </article>
                <article className='footer-nav__risks'>
                    <h3>{h}</h3>
                    <TextParagraph className='footer-nav__paragraph'>
                        <span>{pSpan[0]} <a className='footer-nav__a' href='/#'>{pSpan[1]}</a>
                            <a className='footer-nav__a' href='/#'> {pSpan[2]}</a>,
                            <a className='footer-nav__a' href='/#'> {pSpan[3]}</a> и
                            <a className='footer-nav__a' href='/#'>{pSpan[4]}</a>.
                        </span>
                    </TextParagraph>
                </article>
            </div>
        </section>
    );
}

FooterNav.propTypes = {};

export default FooterNav;