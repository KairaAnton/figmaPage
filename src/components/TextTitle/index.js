import React from 'react';
import './index.scss';

const TextTitle = ({ className ,children}) => {
    return (
        <h1 className={`text-title ${className}`}>
            {children}
        </h1>
    );
}


export default TextTitle;