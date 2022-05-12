import React from 'react';
import android from '../../../../images/android.png';
import windows from '../../../../images/windows.png';
import web from '../../../../images/web.png';
import './index.scss';
import TextParagraph from '../../../TextParagraph';

const TradingList = () => {

    const childrenList = [{
            img: android,
            text: 'Android App',
            name:'android'
        },{
            img: windows,
            text: 'Windows 10 Trader',
            name:'windows'
        },{
            img: web,
            text: 'WebTrader',
            name:'web'
        }];
 let ind =0;
    const renderList = childrenList.map(elem => <li key={elem.name} >
        <img className={`trading-list__${elem.name}`} src={elem.img} alt='logo' />
        <TextParagraph className='trading-list__paragraph'>{elem.text}</TextParagraph>
    </li>)


    return (
        <ul className='trading-list'>
            {renderList}

        </ul>
    );
}

export default TradingList;