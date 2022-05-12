import React from 'react';
import './index.scss';


const Button = ({children,className,type, ...arg}) => {

    return (
        <button className={`${type==='blue'?'blue-btn':'white-btn'} ${className}`} {...arg}
        >{children}</button>
    );
}
 

export default Button;