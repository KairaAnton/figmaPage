import './index.scss';
import noteLeft from '../../../images/noteLeft.png';
import noteRight from '../../../images/noteRight.png';
import arrow from '../../../images/arrow.png';
import TextTitle from '../../TextTitle';
import TextParagraph from '../../TextParagraph';
import Button, { BtnType } from '../../Button';
import { useAppSelector } from '../../../hooks';
import { FC } from 'react';

const TradeDemo: FC = () => {
    const { h, p, btnContent: { btnLeft, btnRight } } = useAppSelector(state => state.content.tradeDemo)

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
                        <Button className='trade-demo__button-blue' type={BtnType.blue}>{btnLeft}</Button>
                        <span>or</span>
                        <Button className='trade-demo__button-white' type={BtnType.blueBorder}>{btnRight}</Button>
                    </article>
                </div>
            </div>
        </section>
    );
}


export default TradeDemo;