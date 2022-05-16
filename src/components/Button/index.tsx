import { FC, ReactNode } from 'react';
import './index.scss';

export enum BtnType {
    blue = 'blue',
    blueBorder = 'blue-border',
    grayBorder = 'gray-border'
}

interface IProps {
    className?: string,
    type: BtnType,
    children: ReactNode
}

const Button: FC<IProps> = ({ className, type, children }) => {
    return (
        <button className={`${type} ${className}`}
        >{children}</button>
    );
}


export default Button;