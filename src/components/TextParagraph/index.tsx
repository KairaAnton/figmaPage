import { FC, ReactNode } from 'react';
import './index.scss';

interface IProps{
    className?:string,
    children:ReactNode
}

const TextParagraph:FC<IProps> = ({ children, className}) => {
    return (
        <p className={`paragraph ${className} `}>
            {children}
        </p>
    );
}

export default TextParagraph;