import { FC } from 'react';
import './index.scss';
import TextTitle from '../../TextTitle';
import TradeRule from './TradeRule';
import Button, { BtnType } from '../../Button';
import { useAppSelector } from '../../../hooks';


const TradeWithTrust: FC = () => {
    const { btnContent, h, rules } = useAppSelector(state => state.content.tradeTrust);
    const { safe, column, lock } = useAppSelector(state => state.images);
    return (
        <section className='trust-trade'>
            <div className='trust-trade__container _container'>
                <img src={column} alt='logo' className='trust-trade__img-column' />
                <img src={safe} alt='logo' className='trust-trade__img-safe' />
                <img src={lock} alt='logo' className='trust-trade__img-lock' />
                <TextTitle >{h}</TextTitle>
                <ul className='trust-trade__rules-container'>
                    <TradeRule imgSrc={column} classNameImg='trust-trade__rule-column' >{rules[0]}</TradeRule>
                    <TradeRule imgSrc={safe} classNameImg='trust-trade__rule-safe' >{rules[1]}</TradeRule>
                    <TradeRule imgSrc={lock} classNameImg='trust-trade__rule-lock' >{rules[2]}</TradeRule>
                </ul>
                <Button type={BtnType.blueBorder}>{btnContent}</Button>
            </div>
        </section>
    );
};

export default TradeWithTrust;