import './index.scss';
import { FC } from 'react';
import { useAppSelector } from '../../../hooks';
import Button, { BtnType } from '../../Button';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import TradingList from './TradingList';

const Trading: FC = () => {
    const { h, p, btnLeft, btnRight } = useAppSelector(state => state.content.trading);

    return (
        <section className='trading'>
            <div className='trading__container _container'>
                <TextTitle className='trading__h1'>{h}</TextTitle>
                <TextParagraph className='trading__paragraph'>{p}</TextParagraph>
                <TradingList />
                <article className='trading__button-container'>
                    <Button type={BtnType.blue} >{btnLeft}</Button>
                    <span>or</span>
                    <Button type={BtnType.blueBorder} >{btnRight}</Button>
                </article>
            </div>
        </section>
    );
}

export default Trading;