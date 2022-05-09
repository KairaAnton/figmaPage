import React from 'react';
import TextParagraph from '../../../TextParagraph';
import './index.scss';

const TradeRule = ({ imgSrc,classNameImg,content }) => {
    console.log('imgRsc', imgSrc)
    return (
        <li className='rule-container'>
            <img src={imgSrc} alt='logo' className={classNameImg} />
            <TextParagraph content={content}/>
        </li>

    );
}


export default TradeRule;