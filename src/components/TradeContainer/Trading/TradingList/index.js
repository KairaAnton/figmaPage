import React from 'react';
import android from '../../../../images/android.png';
import windows from '../../../../images/windows.png';
import web from '../../../../images/web.png';
import './index.scss';
import TextParagraph from '../../../TextParagraph';
import { useSelector } from 'react-redux';

const TradingList = () => {

    const {tradingList} = useSelector(state=>state.content.trading);

        const renderImage = name =>{ 
            if(name ==='android'){return android};
            if(name === 'windows'){return windows};
            if(name === 'web'){return web}; 
    }
    const renderList = tradingList.map(elem => <li key={elem.name} >
        <img className={`trading-list__${elem.name}`} src={renderImage(elem.name)} alt='logo' />
        <TextParagraph className='trading-list__paragraph'>{elem.text}</TextParagraph>
    </li>)


    return (
        <ul className='trading-list'>
            {renderList}

        </ul>
    );
}

export default TradingList;