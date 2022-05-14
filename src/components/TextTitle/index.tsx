import { FC, ReactNode } from 'react';
import './index.scss';

interface IProps{
    className?:string,
    children:ReactNode
}

const TextTitle: FC<IProps> = ({ className ,children}) => {
    return (
        <h1 className={`text-title ${className}`}>
            {children}
        </h1>
    );
}


export default TextTitle;