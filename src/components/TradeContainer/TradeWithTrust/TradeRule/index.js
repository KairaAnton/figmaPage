import React from 'react';
import TextParagraph from '../../../TextParagraph';
import './index.scss';

const TradeRule = ({ imgSrc,classNameImg,children }) => {
    return (
        <li className='rule-container'>
            <img src={imgSrc} alt='logo' className={classNameImg} />
            <hr/>
            <TextParagraph className='rule-container__text' >{children}</TextParagraph>
        </li>

    );
}


export default TradeRule;