import './index.scss';
import { FC } from 'react';
import { useAppSelector } from '../../../../hooks';
import TextParagraph from '../../../TextParagraph';


const TradingList: FC = () => {

    const { android, web, windows } = useAppSelector(state => state.content.trading);
    const { androidImg, webImg, windowsImg } = useAppSelector(state => state.images);
    const renderImage = (name: string) => {
        if (name === 'android') { return android };
        if (name === 'windows') { return windows };
        if (name === 'web') { return web };
    };

    return (
        <ul className='trading-list'>
           <li>
        <img className='trading-list__windows' src={androidImg} alt='logo' />
        <TextParagraph className='trading-list__paragraph'>{android}</TextParagraph>
    </li>
    <li>
        <img className='trading-list__web' src={windowsImg} alt='logo' />
        <TextParagraph className='trading-list__paragraph'>{windows}</TextParagraph>
    </li>
    <li>
        <img className='trading-list__web' src={webImg} alt='logo' />
        <TextParagraph className='trading-list__paragraph'>{web}</TextParagraph>
    </li>
        </ul>
    );
}

export default TradingList;