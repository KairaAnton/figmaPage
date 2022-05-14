import './index.scss';
import { FC, ReactNode } from 'react';
import TextParagraph from '../../../TextParagraph';

interface IProps{
    imgSrc:string,
    classNameImg:string,
    children:ReactNode
}

const TradeRule: FC<IProps> = ({ imgSrc,classNameImg,children }) => {
    return (
        <li className='rule-container'>
            <img src={imgSrc} alt='logo' className={classNameImg} />
            <hr/>
            <TextParagraph className='rule-container__text' >{children}</TextParagraph>
        </li>

    );
}


export default TradeRule;